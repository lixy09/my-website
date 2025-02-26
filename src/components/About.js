"use client";

export default function About() {
    return (
        <div className="bg-navy text-white font-mono text-sm rounded-lg p-6 shadow-lg w-full max-w-md">
            <p>// About Me</p>
            <p>
                <span className="text-dirt">const</span>{" "}
                <span className="text-mint">anan</span> = &#123;
            </p>

            <p className="ml-4">
                <span className="text-geel">base</span>:{" "}
                <span className="text-salmon">"Middelburg"</span>,
            </p>

            <p className="ml-4">
                <span className="text-geel">skills</span>: &#123;
            </p>
            <p className="ml-8 text-salmon">"Javascript",</p>
            <p className="ml-8 text-salmon">"Python",</p>
            <p className="ml-8 text-salmon">"PHP",</p>
            <p className="ml-8 text-salmon">"Web development",</p>
            <p className="ml-4">&#125;,</p>

            <p className="ml-4">
                <span className="text-geel">strength</span>: &#123;
            </p>
            <p className="ml-8 text-salmon">"Adaptable",</p>
            <p className="ml-8 text-salmon">"Detail-Oriented",</p>
            <p className="ml-8 text-salmon">"Problem-Solver",</p>
            <p className="ml-4">&#125;,</p>

            <p className="ml-4">
                <span className="text-geel">interests</span>: &#123;
            </p>
            <p className="ml-8 text-salmon">"Reading",</p>
            <p className="ml-8 text-salmon">"Boxing",</p>
            <p className="ml-8 text-salmon">"Traveling",</p>
            <p className="ml-4">&#125;,</p>

            <p>&#125;;</p>
        </div>
    );
}
