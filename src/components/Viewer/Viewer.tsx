import Image from "next/image";
import React from "react";
import viewers from "~/constants/viewers";
import { ViewerType } from "~/types";

type Props = {
    className?: string;
};

const Viewer = function ({ className }: Props) {
    return (
        <nav className="my-0 mx-auto w-full max-w-[1200px] max-sm:px-12 max-md:px-20 min-h-screen">
            <ul className={`grid-flow-col gap-[25px] auto-cols-[18.5%] mt-12  grid  ${className}`}>
                {viewers.map(function (viewer: ViewerType, index: number) {
                    return (
                        <li
                            className="group cursor-pointer overflow-hidden relative w-full h-40 transition-all duration-300 shadow-sm rounded border-solid border-[1px] border-[rgba(249,249,249, 0.1)]"
                            key={index}
                        >
                            <Image
                                className="group-hover:opacity-0 absolute inset-0 block w-full  h-full object-cover opacity-100 transition-all duration-500 ease-in-out"
                                src={viewer.image}
                                alt="Viewer Image"
                            />
                            <video
                                className="group-hover:opacity-100 opacity-0 w-full h-full absolute top-0"
                                autoPlay
                                muted
                                loop
                            >
                                <source src={viewer.video} type="video/mp4" />
                            </video>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Viewer;
