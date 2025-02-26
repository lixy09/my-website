"use client";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Intro />

            {/* Scroll Down Indicator */}
            <div className="flex justify-center py-4">
                <Link href="#project">
                    <FaArrowDown
                        size={30}
                        className="text-gray-600 hover:text-mint transition animate-bounce"
                    />
                </Link>
            </div>

            <div id="project">
                <Project />
            </div>
        </div>
    );
}
