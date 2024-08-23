"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import banners from "~/constants/banners";
import Image from "next/image";
import Button from "~/components/Button";
import images from "~/assets/images";
import { BannerType } from "~/types";

type Props = {
    className?: string;
};

const Banner = function ({ className }: Props) {
    const [image, setImage] = useState<any>(images.banner.first);

    return (
        <div>
            <Image
                className={`absolute content-[""] top-0 left-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0.3)] backdrop-blur-3xl blur-[15px] ${className}`}
                src={image}
                alt="Background"
            />
            <div className="relative px-4 my-0 mx-auto w-full max-w-[1200px] max-sm:px-12 max-md:px-20  overflow-hidden transition-all duration-75 ease-in-out">
                <div className="relative  my-0 mx-auto min-h-screen gap-[3rem] pt-20 md:flex md:items-center">
                    <div>
                        <div className={"carousel-content"}>
                            <span className="uppercase leading-[1.5] text-[15px] text-white">
                                Discover
                            </span>
                            <h1 className="capitalize tracking-wider text-[50px] leading-[1.1] text-[#EE4222]">
                                Make WEB3 Popular with Humans
                            </h1>
                            <hr className="block drop-shadow-sm h-[0.4px] w-[10px] border-none my-3 mx-4" />
                            <p className="leading-[1.6] text-[16px] text-white drop-shadow-2xl">
                                DEMARKET is a decentralized NFT exchange on the Cardano Blockchain
                                platform from BLOCKALPHA.
                            </p>
                            <Button className="bg-[#EE4222] text-white text-[16px] font-semibold mt-6">
                                Get Explorer
                            </Button>
                        </div>
                    </div>

                    <Swiper
                        className="w-full pt-14"
                        modules={[Pagination, EffectCoverflow, Autoplay]}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 3,
                            slideShadows: true,
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                            1560: { slidesPerView: 3 },
                        }}
                        onSlideChange={(swiper) => {
                            setImage(banners[swiper.realIndex].image);
                        }}
                    >
                        {banners.map(function (banner: BannerType, index: number) {
                            if (banner.image === image) {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="rounded w-[100px] h-[450px]"
                                    >
                                        <div className="relative w-full h-full">
                                            <div className="z-10 absolute top-0 left-0 opacity-100 flex flex-col justify-end h-full w-full py-8 px-4">
                                                <h2>TECHOLOGY GIRL</h2>
                                                <p>{banner.description}</p>
                                                <Button className="bg-[#EE4222] text-white text-[12px] font-semibold max-w-40 ">
                                                    Get Explorer
                                                </Button>
                                            </div>
                                            <Image
                                                className="absolute w-full h-full object-cover inset-0 z-0"
                                                src={banner.image}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            }

                            return (
                                <SwiperSlide
                                    key={index}
                                    className="relative rounded w-[100px] h-[450px]"
                                >
                                    <Image
                                        className="absolute  w-full h-full object-cover inset-0"
                                        src={banner.image}
                                        alt=""
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;
