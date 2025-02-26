"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Type() {
    return (
        <span>
            <Typewriter
                words={[
                    "ICT Student",
                    "Software Developer",
                    "Freelancer",
                    "Game Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </span>
    );
}
