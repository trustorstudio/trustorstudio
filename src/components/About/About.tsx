import React from "react";
import Button from "~/components/Button";
import Title from "~/components/Title";

type Props = {
    title: string;
    description: string;
    isReverse?: boolean;
};

const About = function ({ title, description, isReverse }: Props) {
    return (
        <section className="py-16 h-screen">
            <Title title={title} description={description} />
            <div className="mx-auto w-full max-w-[1200px] max-sm:px-12 max-md:px-20 ">
                <div className={`flex w-full gap-16 ${isReverse && "flex-row-reverse"}`}>
                    <div className="w-[60%] relative aspect-video before:content-[''] before:absolute before:w-full before:h-full before:top-8 before:left-8 bg-[rgba(0,0,0,0.5)] rounded-3xl shadow-2xl max-md:w-full">
                        <iframe
                            className="block absolute inset-0 w-full h-full rounded-2xl"
                            src="https://www.youtube.com/embed/DCWY93O_QAU"
                            title="Daultarget - Mục Tiêu Kép"
                            frameBorder={"none"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                    <div className="w-[40%] flex flex-col gap-4 items-start max-md:w-full">
                        <h2 className="text-left text-[25px]">About dualtarget</h2>
                        <p className="text-left font-medium text-[20px]">
                            Staking and increasing assets with a decentralized
                        </p>
                        <span className="text-left leading-[1.8] text-[16px] font-normal">
                            We will develop a platform that enables users to choose dual targets and
                            trading methods directly within their wallets. Simultaneously, we'll
                            create automated trading bots on decentralized exchanges
                        </span>
                        <span className="text-left leading-[1.8] text-[16px] font-normal">
                            We will develop a platform that enables users to choose dual targets and
                            trading methods directly within their wallets. Simultaneously, we'll
                            create automated trading bots on decentralized exchanges
                        </span>
                        <Button className="text-center bg-[#EE4222] border-[1px] border-solid border-[#7054d1] rounded-xl shadow-sm text-white flex text-[16px] h-14 w-full py-6 px-8 outline-none m-0 cursor-pointer whitespace-nowrap font-bold hover:shadow-sm ">
                            About us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
