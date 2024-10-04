import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

type Props = {};

const HomePage = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <section className={cx("landing")}>
                <header className={cx("header")}>
                    <Link className={cx("logo-wrapper")} href="/">
                        <Image className={cx("logo-image")} src={images.logo} alt="Logo" />
                    </Link>
                </header>
                <main className={cx("landing-content")}>
                    <section className={cx("slogan")}>
                        <h2>Intelligent and Secure Messaging</h2>
                        <h3>Keeping You Informed and Connected.</h3>
                        <p>
                            Dmail Network is an AI-powered decentralized communication
                            infrastructure built to provide encrypted emails, unified notifications,
                            and targeted marketing across multiple chains and dApps for users,
                            developers, and marketers.
                        </p>
                    </section>

                    <section className={cx("links")}>
                        <Link className={cx("to-play")} href={"/"}>
                            Launch Cmail
                        </Link>

                        <Link className={cx("to-sub")} href={"/"}>
                            Launch Cmail
                        </Link>
                    </section>

                    <section className={cx("statistics")}>
                        <div className={cx("total")}>
                            <p>
                                <strong>17.52</strong>
                                {"M"}
                            </p>
                            <span>Total CMailer</span>
                        </div>
                        <div className={cx("total")}>
                            <p>
                                <strong>17.52</strong>
                                {"M"}
                            </p>
                            <span>Total CMailer</span>
                        </div>
                        <div className={cx("total")}>
                            <p>
                                <strong>17.52</strong>
                                {"M"}
                            </p>
                            <span>Total CMailer</span>
                        </div>
                        <div className={cx("total")}>
                            <p>
                                <strong>17.52</strong>
                                {"M"}
                            </p>
                            <span>Total CMailer</span>
                        </div>
                    </section>
                </main>
                <footer className={cx("footer-wrapper")}>
                    <main className={cx("footer-container")}>
                        <section className={cx("footer-subcribe")}>
                            <div className={cx("subcribe-picture")}>
                                <Image
                                    className={cx("subcribe-image")}
                                    src={images.subcribe}
                                    alt="Subcribe Picture"
                                />
                            </div>
                            <div className={cx("subcribe-detail")}>
                                <h2>
                                    Subscribe To <span>CMail</span>
                                </h2>
                                <p>
                                    Unlock instant updates and exclusive insights, engage with your
                                    favorite projects and earn rewards just for staying informed!
                                </p>
                                <div className={cx("subcribe-button")}>
                                    <Link className={cx("subcribe-link")} href={""}>
                                        Subcribe
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className={cx("footer-content")}>
                            <div className={cx("footer-left")}>
                                <Link className={cx("logo-wrapper")} href="/">
                                    <Image
                                        className={cx("logo-image")}
                                        src={images.logo}
                                        alt="Logo"
                                    />
                                </Link>
                                <p className={cx("footer-left-description")}>
                                    Dmail Network is an AI-powered decentralized communication
                                    infrastructure built to provide encrypted emails, unified
                                    notifications, and targeted marketing across multiple chains and
                                    dApps for users, developers, and marketers.
                                </p>

                                <p className={cx("footer-left-contact")}>contact@mail.dmail.ai</p>
                            </div>
                            <div className={cx("footer-right")}>
                                <ul className={cx("footer-right-list")}>
                                    <h3 className={cx("footer-right-title")}>Product</h3>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                </ul>
                                <ul className={cx("footer-right-list")}>
                                    <h3 className={cx("footer-right-title")}>Product</h3>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                </ul>
                                <ul className={cx("footer-right-list")}>
                                    <h3 className={cx("footer-right-title")}>Product</h3>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                </ul>
                                <ul className={cx("footer-right-list")}>
                                    <h3 className={cx("footer-right-title")}>Product</h3>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                    <li className={cx("footer-right-item")}>
                                        <Link className={cx("footer-right-link")} href={""}>
                                            CMail DApp
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className={cx("footer-description")}>
                            <div className={cx("footer-links")}>
                                <strong>Community</strong>
                                <Link className={cx("footer-social")} href={""}>
                                    <Image
                                        className={cx("footer-social-media")}
                                        src={images.x}
                                        alt="Social Media"
                                    />
                                </Link>
                                <Link className={cx("footer-social")} href={""}>
                                    <Image
                                        className={cx("footer-social-media")}
                                        src={images.x}
                                        alt="Social Media"
                                    />
                                </Link>
                                <Link className={cx("footer-social")} href={""}>
                                    <Image
                                        className={cx("footer-social-media")}
                                        src={images.x}
                                        alt="Social Media"
                                    />
                                </Link>
                                <Link className={cx("footer-social")} href={""}>
                                    <Image
                                        className={cx("footer-social-media")}
                                        src={images.x}
                                        alt="Social Media"
                                    />
                                </Link>
                            </div>

                            <div className={cx("footer-foundation")}>
                                @Dmail Network Foundation LTD.
                            </div>
                        </section>
                    </main>
                </footer>
            </section>
        </main>
    );
};

export default HomePage;
