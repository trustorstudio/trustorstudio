import React from "react";
import About from "~/components/About";
import Button from "~/components/Button";

type Props = {};

const GamesPage = function ({}: Props) {
    return (
        <main className="">
            <section className="relative overflow-hidden  snap-start w-full">
                <video
                    className="flex items-center justify-center w-full h-screen  overflow-hidden z-0 object-cover before:bg-black before:w-full before:h-full before:inset-0 before:absolute"
                    autoPlay
                    playsInline
                    loop
                    muted
                    preload="auto"
                >
                    <source type="video/mp4" src={"/games.mp4"} />
                </video>

                <div className="absolute h-screen overflow-hidden text-center top-0 left-0 right-0 flex flex-col justify-center gap-6">
                    <h2 className="text-white font-light text-[5rem] leading-[1.14] uppercase tracking-wider">
                        The Voice Of The Maker
                    </h2>
                    <p className="text-white font-normal text-[2rem] tracking-[7.7px] uppercase leading-[1]">
                        Trustor Studio
                    </p>
                    <span className="text-center ">
                        <Button className="bg-white text-black rounded-full px-16 text-[12px]">
                            DISCOVERY NOW
                        </Button>
                    </span>
                </div>
            </section>
            <About
                title="Tank Of Valor"
                description="Dominate the arena, destroy enemies, claim glory."
            />
            <About
                title="Tank Of Valor"
                isReverse
                description="Dominate the arena, destroy enemies, claim glory."
            />
        </main>
    );
};

export default GamesPage;
