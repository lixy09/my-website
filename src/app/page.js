"use client";
import Intro from "@/components/Intro";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import About from "@/components/About";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Intro />

            {/* Scroll Down Indicator */}
            <div className="flex justify-center py-4">
                <Link href="#about">
                    <FaArrowDown
                        size={30}
                        className="text-gray-600 hover:text-mint transition animate-bounce"
                    />
                </Link>
            </div>

            <div id="about">
                <About />
            </div>
        </div>
    );
}
