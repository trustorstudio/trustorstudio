"use client";

import React from "react";
import Image from "next/image";
import images from "~/assets/images";
import classNames from "classnames/bind";
import styles from "~/app/(not-found)/NotFound.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

type Props = {};

const NotFound = function ({}: Props) {
    return (
        <div className={cx("wrapper")}>
            <div>
                <Image width={260} src={images.notFound} alt="not-found" />
            </div>
            <div className={cx("title")}>404 - Page not found</div>
            <div className={cx("description")}>The page you are looking for doesn’t exist</div>
            <Button className={cx("button")}>Back to Home</Button>
        </div>
    );
};

export default NotFound;
