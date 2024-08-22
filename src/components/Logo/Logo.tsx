import React from "react";
import Image from "next/image";
import images from "~/assets/images";
import Link from "next/link";
import routes from "~/configs/routes";

type Props = {
    className?: string;
};

function Logo({ className }: Props) {
    return (
        <Link href={routes.home} className={`block ${className}`}>
            <Image
                className="w-full h-auto max-h-[60px] object-contain cursor-pointer"
                src={images.logo.third}
                alt="Trustor Studio Logo"
            />
        </Link>
    );
}

export default Logo;
