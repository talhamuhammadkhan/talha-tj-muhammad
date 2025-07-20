"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <p className="text-xl sm:text-2xl md:text-3xl font-semi-bold font-semibold text-muted-foreground mx-auto lg:mx-0 font-mono">
        I am {" "}
      <span className="text-crimson">
        <Typewriter
          words={[
            "a Software Engineer",
            "a Full-Stack Developer",
            "a Web Developer",
            "a Software Developer",
            "an AI/ML Engineer",
            "a Front-End Developer",
            "a Back-End Developer",
            "a Data Scientist",
            "a Data Analyst",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={3500}
        />
      </span>
    </p>
  );
}
