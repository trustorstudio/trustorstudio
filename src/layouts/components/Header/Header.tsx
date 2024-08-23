"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import images from "~/assets/images";
import Button from "~/components/Button";
import Logo from "~/components/Logo";
import configs from "~/configs";
import useScroll from "~/hooks/useScroll";

type Props = {};

const Header = function ({}: Props) {
    const [isScroll] = useScroll({ offset: 0 });
    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-10  ${
                isScroll && "bg-black bg-opacity-80"
            }`}
        >
            <div className="my-0 px-4 mx-auto w-full max-w-[1200px] max-sm:px-12 max-md:px-20 ">
                <div
                    className={`flex items-center justify-between py-11 px-0 transition-all duration-200 ease-linear ${
                        isScroll && "py-6"
                    }`}
                >
                    <section className="">
                        <Logo className="" />
                    </section>
                    <nav className="">
                        <ul className="flex max-sm:none max-md:none"></ul>
                    </nav>
                    <section className="">
                        <Button className="bg-[#EE4222] text-white text-[16px] font-semibold shadow-sm">
                            Connect Wallet
                        </Button>
                    </section>
                </div>
            </div>
        </header>
    );
};

export default Header;
