import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "~/assets/images";
import socialMedias from "~/constants/social-media";
import SocialMedia from "~/components/SocialMedia";
import { SocialMediaType } from "~/types";
import configs from "~/configs";
import policies from "~/constants/policy";

type Props = {};

const Footer = function ({}: Props) {
    return (
        <footer className="bg-black text-white pt-10 pb-16 text-center">
            <section className="container mx-auto">
                <Link href={configs.routes.home}>
                    <Image
                        className="mx-auto w-full md:max-w-[343px] max-w-[243px] h-auto "
                        src={images.logo.first}
                        alt="Trustor Studio Logo"
                    />
                </Link>
                <nav className=""></nav>

                <nav className="mt-11">
                    <ul className="mx-auto flex justify-center align-center flex-wrap md:flex-nowrap">
                        {socialMedias.map(function (socialMedia: SocialMediaType, index: number) {
                            return (
                                <SocialMedia
                                    image={socialMedia.image}
                                    name={socialMedia.name}
                                    url={socialMedia.url}
                                    key={index}
                                />
                            );
                        })}
                    </ul>
                </nav>
                <nav className="mt-11">
                    <div className="">
                        <ul className="menu align-center justify-center text-2xs md:flex grid grid-cols-1 gap-2 md:gap-5">
                            {policies.map(function (policy, index: number) {
                                return (
                                    <li className="" key={index}>
                                        <Link className="" href={policy.url}>
                                            {policy.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
                <p className="mt-2 text-">{`Play Games @ Miniclip © 2024 - ${new Date().getFullYear()} Miniclip SA`}</p>
            </section>
        </footer>
    );
};

export default Footer;
