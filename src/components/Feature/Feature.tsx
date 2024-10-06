import React from "react";
import classNames from "classnames/bind";
import styles from "./Feature.module.scss";
import Image from "next/image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

type Props = {};

const Feature = function ({}: Props) {
    return (
        <div className={cx("wrapper")}>
            <Image className={cx("image")} width={360} height={203} src={images.feature} alt="" />
            <div className={cx("container")}>
                <h3 className={cx("title")}>
                    Multi-chain Web3 Infrastructure Dmail Closes Pre-A Round
                </h3>
                <p className={cx("description")}>
                    Recently, Dmail, the multi-chain infrastructure, closes its Pre-A Round. Dmail
                    Network has completed its seed and strategic round before
                </p>

                <div className={cx("infomation")}>
                    <div className={cx("user")}>
                        <div className={cx("avatar")}>
                            <Image className={cx("avatar-image")} src={images.x} alt="Avatar" />
                        </div>
                        <span className={cx("name")}>Coinspeaker</span>
                    </div>
                    <span className={cx("day")}>{"July 25th, 2023"}</span>
                </div>
            </div>
        </div>
    );
};

export default Feature;
