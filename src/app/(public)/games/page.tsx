import React from "react";

type Props = {};

const GamesPage = function ({}: Props) {
    return (
        <main>
            <section className="relative overflow-hidden">
                <video
                    className="flex items-center justify-center w-full h-screen  overflow-hidden z-0 object-cover"
                    autoPlay
                    playsInline
                    loop
                    muted
                    preload="auto"
                >
                    <source type="video/mp4" src={"/games.mp4"} />
                </video>
            </section>
        </main>
    );
};

export default GamesPage;
