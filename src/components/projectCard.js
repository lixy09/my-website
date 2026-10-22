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
    aspectRatio = "auto",
    category,
    period,
    coverTitle,
    coverDetail,
    coverStyle = "type",
}) {
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
                className={`project-card-image ${!imageSrc ? `project-card-cover project-card-cover-${coverStyle}` : ""}`}
            >
                {imageSrc ? <>
                <div className={`project-card-image-inner ${aspectRatio === "video" ? "project-card-image-wide" : ""}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 767px) 90vw, (max-width: 1199px) 46vw, 420px"
                        className="object-contain"
                    />
                </div>
                <span className="project-card-image-caption" aria-hidden="true">{title} / Preview</span>
                </> : <div className="project-card-cover-content" aria-hidden="true">
                    <span className="project-card-cover-title">{coverTitle || title}</span>
                    <span className="project-card-image-caption">{coverDetail}</span>
                </div>}
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
