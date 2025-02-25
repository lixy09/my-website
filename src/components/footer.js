import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="flex flex-col items-center text-center py-6">
            <h1 className="text-2xl font-bold text-leave">
                CONTACT ME
            </h1>
            <p className="text-lg">Feel free to reach out!</p>
            <ul className="flex gap-6 m-2">
                <li className="social-icons">
                    <a
                        href="https://github.com/lixy09"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl text-gray-700 hover:text-black transition"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="mailto:li0047@hz.nl"
                        className="text-2xl text-gray-700 hover:text-black transition"
                    >
                        <FaEnvelope />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/anan-li-3527b62b6/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl text-gray-700 hover:text-black transition"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
        </div>
    );
}
