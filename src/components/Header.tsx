import Image from "next/image";
import Link from "next/link";
import React from "react";
import configs from "~/configs";

type Props = {};

const Header = function ({}: Props) {
    return (
        <header>
            <section>
                <Link href={configs.routes.home}>
                    <picture>
                        <Image src={""} alt="" />
                    </picture>
                </Link>
            </section>
        </header>
    );
};

export default Header;
