"use client";
import Type from "@/components/Type";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

export default function Intro() {
    const pdfFile = "/Resume-Anan-Li.pdf";

    return (
        <section
            id="home"
            className="relative w-full mt-20 flex flex-col items-center justify-center"
        >
            <div className="max-w-6xl md:w-3/4 px-4 md:px-6 py-8 md:py-12 mt-20 flex flex-col items-start text-left">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Hi There!
                </h1>

                <h1 className="text-6xl md:text-8xl font-extrabold mt-2">
                    I&apos;M <span className="text-leave">ANAN LI</span>
                </h1>

                <div className="mt-4 md:mt-6 text-3xl md:text-4xl font-sans font-bold text-mint">
                    <Type />
                </div>

                <p className="text-xl md:text-2xl font-sans text-black mt-4 mb-4 md:w-4/5">
                    A constantly evolving{" "}
                    <span className="font-bold text-leave">
                        digital creator
                    </span>{" "}
                    driven by a passion for{" "}
                    <span className="font-bold">lifelong learning</span> and the
                    desire to leave a lasting impact. I&apos;m always seeking interesting <span className="font-bold">challenges</span> and 
                    <span className="font-bold"> opportunities</span> to apply my skills and knowledge.
                </p>

                {/* Download Button */}
                <div className="mt-6 md:mt-8">
                    <Link
                        href={pdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.preventDefault(); // Prevents default behavior
                            const link = document.createElement("a");
                            link.href = "/Resume-Anan-Li.pdf";
                            link.download = "Resume-Anan-Li.pdf"; // Forces download
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            setTimeout(
                                () =>
                                    window.open(
                                        "/Resume-Anan-Li.pdf",
                                        "_blank"
                                    ),
                                100
                            ); // Opens in new tab
                        }}
                    >
                        <button className="flex items-center gap-2 bg-leave text-white px-6 py-2 rounded-md shadow hover:bg-mint transition">
                            <AiOutlineDownload size={20} />
                            Download CV
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
