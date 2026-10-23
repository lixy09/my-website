"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({
    title,
    subtitle,
    tags,
    projectLink,
    imageSrc,
    imageAlt = "Project mockup",
    category,
    period,
    coverTitle,
    coverDetail,
    coverStyle = "type",
}) {
    const previewRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageFailed, setImageFailed] = useState(false);
    const revealed = Boolean(imageSrc && imageLoaded && !imageFailed && inView);

    useEffect(() => {
        if (!imageSrc) return;
        if (!("IntersectionObserver" in window)) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, { rootMargin: "-12% 0px -15% 0px", threshold: 0.2 });

        if (previewRef.current) observer.observe(previewRef.current);
        return () => observer.disconnect();
    }, [imageSrc]);

    const isRepository = projectLink?.includes("github.com");
    const Preview = projectLink ? Link : "div";
    const previewLinkProps = projectLink ? {
        href: projectLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Explore ${title} (opens in a new tab)`,
    } : {};

    return (
        <article className="project-card">
            <div className="project-card-heading">
                <div className="project-card-kicker">
                    <span>{category}</span>
                    {period && <span className="project-card-period">{period}</span>}
                </div>
                <h2 className="project-card-title">
                    {projectLink ? <Link href={projectLink} target="_blank" rel="noopener noreferrer">
                        {title}
                        <span className="sr-only"> (opens in a new tab)</span>
                    </Link> : title}
                </h2>
                {projectLink && <Link
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                    aria-label={`${isRepository ? "View source for" : "Visit"} ${title} (opens in a new tab)`}
                >
                    {isRepository ? "View source" : "Visit project"}
                    <span className="project-card-arrow"><FiArrowUpRight aria-hidden="true" /></span>
                </Link>}
            </div>
            <Preview
                {...previewLinkProps}
                ref={previewRef}
                className={`project-card-image project-card-cover project-card-cover-${coverStyle} ${revealed ? "is-revealed" : ""}`}
            >
                {imageSrc && <div className="project-card-preview-layer" aria-hidden={!revealed}>
                    <div className="project-card-image-inner">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 767px) 90vw, (max-width: 1199px) 46vw, 420px"
                            className="object-contain"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageFailed(true)}
                        />
                    </div>
                    <span className="project-card-image-caption" aria-hidden="true">{title} / Preview</span>
                </div>}
                <div className="project-card-cover-content" aria-hidden="true">
                    <span className="project-card-cover-title">{coverTitle || title}</span>
                    <span className="project-card-image-caption">{coverDetail || category}</span>
                </div>
            </Preview>
            <div className="project-card-details">
                <div>
                    <h3 className="project-card-label">About the project</h3>
                    <div className="project-card-description">{subtitle}</div>
                </div>
                <div className="project-card-stack">
                    <h3 className="project-card-label">Built with</h3>
                    <ul className="project-card-tags">
                        {tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                </div>
            </div>
        </article>
    );
}
