"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/favicon.ico";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const [navColor, setNavColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavColor(window.scrollY >= 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-lg bg-cream">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="brand logo"
                            width={35}
                            height={35}
                        />
                        <span className="p-2 text-2xl font-bold">AL</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        {navOpen ? "✖" : "☰"}
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        <NavItem
                            href="/"
                            icon={<AiOutlineHome />}
                            label="Home"
                        />

                        <NavItem
                            href="/experience"
                            icon={<CgFileDocument />}
                            label="Experience"
                        />

                        <NavItem
                            href="/project"
                            icon={<AiOutlineFundProjectionScreen />}
                            label="Projects"
                        />
                    </ul>
                </div>

                {/* Mobile Menu */}
                {navOpen && (
                    <ul className="md:hidden bg-cream flex flex-col space-y-4 py-4 px-6">
                        <NavItem
                            href="/"
                            icon={<AiOutlineHome />}
                            label="Home"
                            mobile
                        />

                        <NavItem
                            href="/experience"
                            icon={<CgFileDocument />}
                            label="Experience"
                            mobile
                        />

                        <NavItem
                            href="/project"
                            icon={<AiOutlineFundProjectionScreen />}
                            label="Projects"
                            mobile
                        />
                    </ul>
                )}
            </div>
        </nav>
    );
}

// Reusable Nav Item Component
function NavItem({ href, icon, label, external = false, mobile = false }) {
    const classes = `flex items-center gap-2 px-4 py-2 ${
        mobile ? "text-lg" : "hover:text-gray-400 transition"
    }`;

    return (
        <li>
            {external ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                >
                    {icon} {label}
                </a>
            ) : (
                <Link href={href} className={classes}>
                    {icon} {label}
                </Link>
            )}
        </li>
    );
}
