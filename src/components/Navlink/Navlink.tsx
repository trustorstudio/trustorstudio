"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "~/libs/utils";

interface Props extends LinkProps {
    children: ReactNode;
    className?: string;
    activeClassName?: string;
}

function NavLink({ children, className, activeClassName, ...props }: Props) {
    const pathname = usePathname();
    const isActive = pathname === props.href;

    return (
        <Link
            {...props}
            className={cn(className, {
                [`${activeClassName}`]: isActive,
            })}
        >
            {children}
        </Link>
    );
}

export default NavLink;
