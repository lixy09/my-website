import ProjectCard from "@/components/projectCard";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen mt-20 pt-10">
            {/* Page Title */}
            <h1 className="text-6xl font-bold text-center mb-3 text-gray-800">
                Featured Projects
            </h1>
            <p className="text-xl font-italic text-center text-gray-400 mb-8">Focusing on experience</p>

            {/* Project Card - Junker */}
            <div className="flex justify-center mb-20">
                <ProjectCard
                    title="Junker"
                    subtitle={
                        <>
                        Sustainable Second-hand Exchange Platform with <span className="font-bold">Community-based</span> exchange system and <span className="font-bold">Tinder-style</span> swiping for browsing items. 
                        </>
                    }
                    tags={[
                        "Sveltekit",
                        "JavaScript",
                        "TypeScript",
                        "SQLite",
                        "Tailwind CSS",
                        "Microservices",
                        "API Gateway",
                        "JWT Authentication",
                        "GitHub",
                        "Docker",
                    ]}
                    projectLink={"https://github.com/HZ-HBOICT-Y2-2425/uvc-project-frontend-team-9-junker"}
                    imageSrc="/junker.png"
                    imageAlt="Junker Mockup"
                    aspectRatio="square"
                />
            </div>

            {/* Project Card - WeatherVIS */}
            <div className="flex justify-center mb-20">
                <ProjectCard
                    title="WeatherVIS"
                    subtitle={
                        <>
                        Real-time data visualization tool for monitoring wind power load fluctuations based on weather conditions.<br /><br />
                        🏆 Winner of the Hacking by the Sea Hackathon 2024!
                        </>
                    }
                    tags={[
                        "PHP",
                        "Laravel",
                        "MySQL",
                        "Data Visualization",
                        "GIS Mapping",
                        "Tailwind CSS",
                        "GitHub",
                    ]}
                    projectLink={"https://github.com/itsMiniscule/WeatherVIS"}
                    imageSrc="/weathervis.jpeg"
                    imageAlt="Weather Mockup"
                    aspectRatio="square"
                />
            </div>

            {/* Project Card - Gemba */}
            <div className="flex justify-center mb-20">
                <ProjectCard
                    title="Outokumpu Gemba Walk"
                    subtitle={
                        <>
                        Customized website to improve the <span className="font-bold">efficiency</span> of Gemba walks within Outokumpu, replacing manual Excel-based documentation with a user-friendly <span className="font-bold">digital solution</span>.
                        </>
                    }
                    tags={[
                        "PHP",
                        "Laravel",
                        "MySQL",
                        "User Authentication",
                        "Bulma CSS",
                        "Heroku",
                        "GitHub",
                        "Docker",
                    ]}
                    projectLink={"https://github.com/HZ-ICT-2324/fpr-team05"}
                    imageSrc="/gemba1.png"
                    imageAlt="Gemba Mockup"
                    aspectRatio="square"
                />
            </div>

            {/* Project Card - Tetra */}
            <div className="flex justify-center">
                <ProjectCard
                    title="Tetra's Adventure"
                    subtitle={
                        <>
                        Engaging and Educational game for children to learn <span className="font-bold">fundamental programming</span> concepts. Involved game designing and <span className="font-bold">object-oriented programming</span>.
                        </>
                        
                    }
                    tags={[
                        "HTML5",
                        "TypeScript",
                        "JavaScript",
                        "CSS3",
                        "GitHub",
                        "Canvas",
                    ]}
                    projectLink={"https://github.com/HZ-ICT-2324/oop-team02"}
                    imageSrc="/Tetra's-Adventure.png"
                    imageAlt="Tetra Mockup"
                    aspectRatio="video"
                />
            </div>
        </div>
    );
}
