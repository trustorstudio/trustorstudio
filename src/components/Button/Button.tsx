import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { ReactNode } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
    loading?: boolean;
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    text?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    children: ReactNode;
    className: string;
    LeftIcon?: IconType;
    RightIcon?: IconType;
    onClick?: () => void;
    blank?: boolean;
};

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    LeftIcon,
    RightIcon,
    onClick,
    loading,
    blank = false,
    ...passProps
}: Props) {
    let Component: any = "button";
    const props: any = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (href) {
        props.href = href;
        Component = Link;
        if (blank) {
            props.target = "_blank";
        }
    }

    return (
        <Component
            className={`inline-flex items-center justify-center min-w-[100px] py-3 px-6 rounded text-[14px] font-normal border-solid border-[1px] border-transparent relative after:absolute after:inset-[-5px]  after:content-["] after:z-10 after:opacity-0 after:transition-all after:duration-300 after:bg-inherit hover:after:opacity-100  ${className}`}
            {...props}
        >
            {!loading && LeftIcon && (
                <span className="inline-block w-6 text-center">
                    <LeftIcon />
                </span>
            )}
            {loading ? (
                <ClipLoader color={"#fff"} loading={loading} size={18} />
            ) : (
                <span>{children}</span>
            )}
            {!loading && RightIcon && (
                <span className="inline-block w-6 text-center">
                    <RightIcon />
                </span>
            )}
        </Component>
    );
}

export default Button;
