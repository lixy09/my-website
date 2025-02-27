"use client";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "@/components/projectCard";
import { projects } from "@/components/Project";

export default function Home() {
    const [activeDot, setActiveDot] = useState(0);
    const projectRefs = useRef([]);

    // Scroll to project
    const scrollToProject = (index) => {
        const projectTop = projectRefs.current[index].offsetTop;
        const offset = 30; // Adjust this value based on your navbar height
        window.scrollTo({
            top: projectTop - offset,
            behavior: "smooth",
        });
    };

    // IntersectionObserver to detect which project is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = projectRefs.current.indexOf(entry.target);
                        setActiveDot(index);
                    }
                });
            },
            { threshold: 0.7 }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="flex min-h-screen mt-20 pt-10 px-4 md:px-8 relative">
            {/* Dot Navigation */}
            <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 md:space-y-4">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToProject(index)}
                        onMouseEnter={() => setActiveDot(index)}
                        onMouseLeave={() =>
                            setActiveDot(
                                projectRefs.current.findIndex((ref) => {
                                    const rect = ref.getBoundingClientRect();
                                    return (
                                        rect.top <= window.innerHeight / 2 &&
                                        rect.bottom >= window.innerHeight / 2
                                    );
                                })
                            )
                        }
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                            activeDot === index
                                ? "bg-leave scale-75 md:scale-100"
                                : "bg-gray-400 scale-50 md:scale-75"
                        } hover:scale-75 md:hover:scale-100 hover:bg-leave`}
                    />
                ))}
            </div>

            {/* Projects */}
            <div className="flex flex-col w-full">
                {/* Page Title */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-3 text-gray-800">
                    Featured Projects
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-italic text-center text-gray-400 mb-8">
                    Some Things I&apos;ve Built
                </p>

                {/* Render Projects Dynamically */}
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className="flex justify-center mb-8 md:mb-20"
                    >
                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            tags={project.tags}
                            projectLink={project.projectLink}
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt}
                            aspectRatio={project.aspectRatio}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
