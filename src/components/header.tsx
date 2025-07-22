"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navbars } from "~/constants/navbars";
import { images } from "~/public/images";
import { publicRouters } from "~/constants/routers";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-white/20 bg-black/20 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.section
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center"
          >
            <Link href={publicRouters.home} className="flex items-center ">
              <Image className="text-xl h-14 w-auto  font-bold text-white" loading="lazy" src={images.logo} alt="Cardano2vn" />

              <p className="text-2xl font-bold">Trustor Studio</p>
            </Link>
          </motion.section>

          <section className="hidden items-center space-x-8 md:flex">
            {navbars.map((navbar) => (
              <Link href={navbar.href} key={navbar.id} className="font-medium text-gray-300 transition-colors duration-200 hover:text-white">
                {navbar.title}
              </Link>
            ))}
            <Link
              target="_blank"
              href="lms.cardano2vn.io"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-gray-800/50 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:border-white/50 hover:bg-gray-700/50"
            >
              <span>LMS App</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </Link>
          </section>

          <section className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </section>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm"
          >
            <div className="px-6 py-4 space-y-4">
              <div className="space-y-3">
                {navbars.map(function (navbar) {
                  return (
                    <Link
                      href={navbar.href}
                      key={navbar.id}
                      onClick={closeMenu}
                      className="block font-medium text-gray-300 transition-colors duration-200 hover:text-white py-2"
                    >
                      {navbar.title}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-white/10">
                <Link
                  target="_blank"
                  href="lms.cardano2vn.io"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-gray-800/50 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:border-white/50 hover:bg-gray-700/50"
                >
                  <span>LMS App</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
