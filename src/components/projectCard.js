import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({
    title,
    subtitle,
    tags,
    projectLink,
    imageSrc,
    imageAlt = "Project mockup",
    aspectRatio = "auto",
}) {
    // Determine aspect ratio class
    const aspectRatioClass =
        aspectRatio === "square"
            ? "aspect-square"
            : aspectRatio === "portrait"
            ? "aspect-[3/4]"
            : aspectRatio === "video"
            ? "aspect-video"
            : "aspect-auto";

    return (
        <Link href={projectLink} target="_blank" rel="noopener noreferrer">
            <div className="max-w-6xl mx-auto p-6 bg-tan rounded-2xl shadow-xl">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Side: Text Content */}
                    <div className="flex-1">
                        <div className="flex flex-col items-start">
                            <h2 className="mt-4 text-3xl font-semibold text-navy">
                                {title}
                            </h2>
                        </div>

                        <h3 className="mt-10 text-2xl font-mono">{subtitle}</h3>

                        <div className="md:w-3/4 flex flex-wrap gap-2 mt-20">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm bg-gray-100 rounded-2xl"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* View Project Button */}
                        <div className="mt-20">
                            <button className="flex items-center gap-2 text-white px-3 py-2 rounded-md shadow hover:bg-navy transition">
                                <FaArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 flex items-center">
                        <div className={`relative w-full ${aspectRatioClass}`}>
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
