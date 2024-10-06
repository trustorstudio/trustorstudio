import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Gutter.module.scss";

const cx = classNames.bind(styles);

type Props = {
    className?: string;
    children: ReactNode;
};

const Gutter = function ({}: Props) {
    return <div className={cx("wrapper")}></div>;
};

export default Gutter;
