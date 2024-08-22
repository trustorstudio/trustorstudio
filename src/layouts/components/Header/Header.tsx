import Image from "next/image";
import Link from "next/link";
import React from "react";
import images from "~/assets/images";
import Button from "~/components/Button";
import Logo from "~/components/Logo";
import configs from "~/configs";

type Props = {};

const Header = function ({}: Props) {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-10 bg-black bg-opacity-30">
            <div className="my-0 px-4 mx-auto w-full max-w-[1200px] max-sm:px-12 max-md:px-20 ">
                <div className="flex items-center justify-between py-11 px-0 transition-all duration-200 ease-linear">
                    <section className="">
                        <Logo className="" />
                    </section>
                    <nav className=""></nav>
                    <section className="">
                        <Button className="bg-[#EE4222] text-white text-[16px] font-semibold">
                            Connect Wallet
                        </Button>
                    </section>
                </div>
            </div>
        </header>
    );
};

export default Header;
