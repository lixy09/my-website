"use client";
import Type from "@/components/Type";
import Link from "next/link";
import About from "./About";
import { AiOutlineDownload } from "react-icons/ai";

export default function Intro() {
    const pdfFile = "../public/resume.pdf";

    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex flex-col items-center justify-center"
        >
            <div className="max-w-6xl w-full px-6 py-12 flex flex-col md:flex-row items-center">
                {/* Left Text Section */}
                <div className="md:w-7/12 text-center md:text-left">
                    <h1 className="text-4xl font-bold">
                        Hi There!{" "}
                        <span
                            role="img"
                            aria-label="wave"
                            className="inline-block"
                        >
                            👋🏻
                        </span>
                    </h1>

                    <h1 className="text-5xl font-extrabold mt-2">
                        I&apos;M
                        <span className="text-leave"> ANAN LI</span>
                    </h1>

                    <div className="mt-6 text-3xl font-sans font-bold text-mint">
                        <Type />
                    </div>

                    <p className="text-2xl font-sans text-black mt-4 mb-4 md:w-3/5">
                        A constantly evolving{" "}
                        <span className="font-bold text-leave">
                            digital creator
                        </span>{" "}
                        driven by a passion for{" "}
                        <span className="font-bold">lifelong learning</span> and
                        the desire to leave a lasting impact.
                    </p>

                    {/* Download Button */}
                    <div className="mt-8">
                        <Link
                            href={pdfFile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex items-center gap-2 bg-leave text-white px-6 py-2 rounded-md shadow hover:bg-mint transition">
                                <AiOutlineDownload size={20} />
                                Download CV
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-5/12 flex justify-center mt-10 md:mt-0">
                    <About />
                </div>
            </div>
        </section>
    );
}
