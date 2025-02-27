"use client";
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-tan w-full py-20 mb-5">
            <div className="bg-geel rounded-3xl md:w-5/6 mx-auto my-10 px-6 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-center">
                {/* Left Text Section */}
                <div className="md:w-7/12 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
                        About Me
                    </h1>

                    <p className="text-lg md:text-xl font-sans text-black mt-4 mb-4 md:w-4/5">
                        I&apos;m a curious person always enjoy exploring and
                        learning new things. I&apos;ve worked as a{" "}
                        <span className="font-bold text-navy">
                            labratory technician
                        </span>{" "}
                        extracting DNA, an{" "}
                        <span className="font-bold text-navy">
                            English teacher
                        </span>{" "}
                        for children, and a freelancer running social media
                        accounts to sell{" "}
                        <span className="font-bold text-navy">
                            art products
                        </span>
                        .
                    </p>
                    <p className="text-lg md:text-xl font-sans text-black mt-4 mb-4 md:w-4/5">
                        Programming is one thing I&apos;m always interested in
                        and passionate about because it{" "}
                        <span className="font-bold text-navy">constantly</span>{" "}
                        presents challenges. I have been learning{" "}
                        <span className="font-bold text-navy">
                            web development
                        </span>{" "}
                        for the past 2 years.
                    </p>
                    <p className="text-lg md:text-xl font-sans text-black mt-4 mb-4 md:w-4/5">
                        My main focus now is to create products and digital experiences 
                        that are easy for everyone to use and enjoy. Here are a
                        few technologies I&apos;ve been working with recently:
                    </p>
                    <ul className="columns-2 list-disc pl-10 space-y-1 text-md">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Sveltekit</li>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>Tailwind</li>
                    </ul>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-5/12 flex justify-center mt-8 md:mt-0">
                    <div className="relative w-full h-96">
                        <Image
                            src="/me.jpeg" // Replace with your image path
                            alt="Your Name"
                            fill // Makes the image fill the container
                            className="rounded-lg object-cover" // Ensures the image covers the area
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
