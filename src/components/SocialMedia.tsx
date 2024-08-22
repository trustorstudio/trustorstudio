import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    url: string;
    image: any;
    name: string;
};

const SocialMedia = function ({ url, image, name }: Props) {
    return (
        <li className="m-4">
            <Link className="" href={url} target="_blank">
                <Image className="" src={image} alt={name} />
            </Link>
        </li>
    );
};

export default SocialMedia;
