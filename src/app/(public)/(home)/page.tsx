import React from "react";
import About from "~/components/About";
import Banner from "~/components/Banner";
import Viewer from "~/components/Viewer";

type Props = {};

const HomePage = function ({}: Props) {
    return (
        <main className="snap-proximity snap-y">
            <Banner className="snap-center" />
            <About />
            <Viewer className="snap-center" />
        </main>
    );
};

export default HomePage;
