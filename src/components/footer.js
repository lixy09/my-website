import Link from "next/link";
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-6xl w-3/4 md:w-1/2 mx-auto bg-navy text-white rounded-3xl px-4 md:px-8 py-8 flex flex-col items-center text-center my-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-5">
                    Get In Touch!
                </h1>
                <p className="text-base sm:text-lg mb-5">
                    Feel free to shoot me a message! <br />
                    I&apos;m always up for a chat or a quick collaboration.
                </p>
                {/* Email Button */}
                <Link href="mailto:li0047@hz.nl">
                <button className="flex items-center gap-2 bg-geel text-white px-6 py-2 rounded-md shadow hover:bg-mint transition mb-6">
                    <FaEnvelope size={20} />
                    Email Me
                </button>
                </Link>
                
                {/* Social Icons */}
                <ul className="flex gap-6">
                    <li>
                        <a
                            href="https://github.com/lixy09"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2  hover:text-mint transition"
                        >
                            <FaGithub className="text-2xl" />
                            <span className="text-lg">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/anan-li-3527b62b6/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-mint transition"
                        >
                            <FaLinkedinIn className="text-2xl" />
                            <span className="text-lg">LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* Copyright */}
            <p className="text-base sm:text-lg font-light mb-5">© 2025 A.L.</p>
        </div>
    );
}
