export const projects = [
    {
        title: "Mosaic Minesweeper",
        category: "Team project",
        period: "Oct 2025 – Present",
        subtitle: "A Godot puzzle game combining Minesweeper with mosaic-style boards. My contributions include the original Minesweeper mechanics, configurable boards, seed validation and clue feedback, alongside a teammate’s mosaic and solver systems.",
        tags: ["Godot", "GDScript", "Grid systems", "Seeded generation", "Constraint validation"],
        projectLink: "https://github.com/hainany/mine-sweeper-game",
        coverTitle: "Mosaic\nMinesweeper",
        coverDetail: "A grid-based puzzle experiment",
        coverStyle: "grid",
    },
    {
        title: "D&D Character Sheet",
        category: "Individual coursework",
        period: "2026",
        subtitle: "A Go character-management application with a command-line interface and server-rendered web pages. I worked on character rules, JSON persistence and concurrent API integration, with AI assistance and personal review and testing.",
        tags: ["Go", "net/http", "JSON", "Goroutines", "API integration", "Testing"],
        projectLink: "https://github.com/HZ-ICT4-2627/mpp-lixy09",
        coverTitle: "Character\nsheet",
        coverDetail: "CLI + Web · Go",
        coverStyle: "code",
    },
    {
        title: "Instampen",
        category: "Personal project",
        period: "Sep 2026",
        subtitle: "A Dutch grammar practice app covering verbs, fixed combinations and word order, with instant feedback and progress saved in the browser. I provided the idea and product direction; the implementation was AI-assisted.",
        tags: ["TypeScript", "React", "Next.js", "Local storage", "Responsive UI"],
        projectLink: "https://github.com/lixy09/instampen",
        coverTitle: "Learn.\nPractise.\nRepeat.",
        coverDetail: "Dutch grammar practice",
        coverStyle: "type",
    },
    {
        title: "Energy & Emissions Analysis",
        category: "Team coursework",
        period: "Jan – May 2026",
        subtitle: "A group study of country-level energy consumption and emissions using R. Our report combines data cleaning, country and continent comparisons, visualisation and simple linear regression, with residual analysis to discuss the models’ limitations.",
        tags: ["R", "tidyverse", "dplyr", "ggplot2", "Quarto", "Linear regression"],
        coverTitle: "Energy\n& emissions.",
        coverDetail: "Explore · Visualise · Interpret",
        coverStyle: "type",
    },
    {
        title: "Applied Machine Learning",
        category: "Team coursework",
        period: "Jan – May 2026",
        subtitle: "A series of group assignments exploring classification and regression, including coffee quality, customer churn and used-car prices. Our notebooks compare preprocessing pipelines, models and evaluation metrics. I used AI assistance with personal review and testing.",
        tags: ["Python", "pandas", "scikit-learn", "Cross-validation", "Classification", "Regression"],
        coverTitle: "From data\nto models.",
        coverDetail: "Classification + Regression",
        coverStyle: "code",
    },
    {
        title: "Trash Cash",
        category: "Team project",
        period: "Jun – Aug 2025",
        subtitle: "A recycling-themed clicking game prototype in Godot. I mainly wrote the item spawning, click collection, shared money state and floating feedback, and explored equipment and staff mechanics that remain in development.",
        tags: ["Godot", "GDScript", "Signals", "Timers", "State management"],
        projectLink: "https://github.com/lu7ue/trash-cash",
        coverTitle: "Trash\nCash",
        coverDetail: "Collect · Recycle · Play",
        coverStyle: "type",
    },
    {
        title: "Azure Minesweeper",
        category: "Coursework",
        period: "Apr – Jun 2025",
        subtitle: "A cloud computing project using an HTTP-triggered Azure Function to generate a 9 × 9 Minesweeper board, calculate neighbouring mine counts and save the result as JSON in Azure Blob Storage.",
        tags: ["Python", "Azure Functions", "Azure Blob Storage", "HTTP APIs", "JSON"],
        coverTitle: "Board\nto cloud.",
        coverDetail: "HTTP → Python → Blob Storage",
        coverStyle: "code",
    },
    {
        title: "Wastewater Sensor Prediction",
        category: "Team coursework",
        period: "Apr – Jun 2025",
        subtitle: "Team coursework exploring predictions from wastewater sensor data. The shared notebooks cover data preparation, lagged features, baseline comparisons and regression models evaluated with time-series splits. I participated through an AI-assisted workflow with personal review and testing.",
        tags: ["Python", "pandas", "scikit-learn", "Time-series analysis", "TensorFlow / Keras"],
        coverTitle: "Signals\nover time.",
        coverDetail: "Sensor data · Time-series modelling",
        coverStyle: "grid",
    },
    {
        title: "Property Data Analysis",
        category: "Team coursework",
        period: "Feb – Apr 2025",
        subtitle: "A team data science project exploring property affordability. My work covered data preparation, a rule-based classifier and evaluation, including cleaning inconsistent values and comparing predictions using confusion matrices, precision and recall.",
        tags: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "CRISP-DM"],
        coverTitle: "Property\n& patterns.",
        coverDetail: "Prepare · Classify · Evaluate",
        coverStyle: "grid",
    },
    {
        title: "Junker",
        category: "Team coursework",
        period: "Oct 2024 – Jan 2025",
        subtitle: (
            <>
                Second-hand Items Exchange Platform with{" "}
                <span className="font-bold">Community-based</span> exchange
                system and <span className="font-bold">Tinder-style</span>{" "}
                swiping for browsing items. Aiming to <span className="font-bold">reduce waste</span> and CO2 emissions.
            </>
        ),
        tags: [
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
        ],
        projectLink:
            "https://github.com/HZ-HBOICT-Y2-2425/uvc-project-frontend-team-9-junker",
        imageSrc: "/junker.png",
        imageAlt: "Junker Mockup",
        aspectRatio: "square",
    },
    {
        title: "WeatherVIS",
        category: "Team hackathon",
        period: "Jul 2024",
        subtitle: "A team hackathon prototype visualising electricity-network locations on an interactive map. I implemented CSV imports, the database model and map markers using Laravel and Leaflet.",
        tags: [
            "PHP",
            "Laravel",
            "Leaflet",
            "CSV import",
            "Data Visualisation",
            "GIS Mapping",
            "Tailwind CSS",
            "GitHub",
        ],
        projectLink: "https://github.com/itsMiniscule/WeatherVIS",
        imageSrc: "/weathervis.jpeg",
        imageAlt: "Weather Mockup",
        aspectRatio: "square",
    },
    {
        title: "Outokumpu Gemba Walk",
        category: "Client coursework · Team",
        period: "Feb – Jun 2024",
        subtitle: (
            <>
                Customized website to improve the{" "}
                <span className="font-bold">efficiency</span> of Gemba walks
                within Outokumpu, replacing manual Excel-based documentation
                with a user-friendly{" "}
                <span className="font-bold">digital solution</span>.
            </>
        ),
        tags: [
            "PHP",
            "Laravel",
            "MySQL",
            "User Authentication",
            "Bulma CSS",
            "Heroku",
            "GitHub",
            "Docker",
        ],
        projectLink: "https://github.com/HZ-ICT-2324/fpr-team05",
        imageSrc: "/gemba1.png",
        imageAlt: "Gemba Mockup",
        aspectRatio: "square",
    },
    {
        title: "Tetra's Adventure",
        category: "Team coursework",
        period: "Oct 2023 – Jan 2024",
        subtitle: (
            <>
                Engaging and Educational game for children to learn{" "}
                <span className="font-bold">fundamental programming</span>{" "}
                concepts. Involved game designing and{" "}
                <span className="font-bold">object-oriented programming</span>.
            </>
        ),
        tags: ["HTML5", "TypeScript", "JavaScript", "CSS3", "GitHub", "Canvas"],
        projectLink: "https://github.com/HZ-ICT-2324/oop-team02",
        imageSrc: "/Tetra's-Adventure.png",
        imageAlt: "Tetra Mockup",
        aspectRatio: "video",
    },
    {
        title: "Animals Wiki",
        category: "Coursework",
        subtitle: (
            <>
                A simple assignment project to learn API request and mobile-first UI
                design.
            </>
        ),
        tags: ["JavaScript", "API", "HTML5", "CSS3", "GitHub", "Tailwind"],
        projectLink: "https://animals-wiki.onrender.com/",
        imageSrc: "/animalswiki.png",
        imageAlt: "Animals Wiki Mockup",
        aspectRatio: "video",
    },
];
