"use client";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "@/components/projectCard";
import { projects } from "@/components/Project";

export default function Home() {
    const [activeDot, setActiveDot] = useState(0);
    const projectRefs = useRef([]);

    // Scroll to project
    const scrollToProject = (index) => {
        projectRefs.current[index]?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
            block: "start",
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
            { rootMargin: "-20% 0px -35% 0px", threshold: 0 }
        );

        projectRefs.current.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className="projects-page">
            {/* Dot Navigation */}
            <nav aria-label="Project navigation" className="project-navigation">
                {projects.map((_, index) => (
                    <button
                        key={projects[index].title}
                        type="button"
                        aria-label={`Scroll to ${projects[index].title}`}
                        aria-current={activeDot === index ? "true" : undefined}
                        onClick={() => scrollToProject(index)}
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                            activeDot === index
                                ? "bg-leave scale-75 md:scale-100"
                                : "bg-gray-400 scale-50 md:scale-75"
                        } hover:scale-75 md:hover:scale-100 hover:bg-leave`}
                    />
                ))}
            </nav>

            {/* Projects */}
            <div>
                {/* Page Title */}
                <header className="projects-header">
                    <div>
                        <p className="project-card-label">Ideas into experiences</p>
                        <h1>Selected <span>projects.</span></h1>
                    </div>
                    <p className="projects-intro">A selection of things I&apos;ve built.<br />For the web, for people, for a little fun.</p>
                </header>

                {/* Render Projects Dynamically */}
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        ref={(el) => { projectRefs.current[index] = el; }}
                        className="project-section"
                    >
                        <ProjectCard
                            category={project.category}
                            period={project.period}
                            coverTitle={project.coverTitle}
                            coverDetail={project.coverDetail}
                            coverStyle={project.coverStyle}
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
        </main>
    );
}
