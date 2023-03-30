import React from "react";
import AboutSection from "./component/AboutSection";
import HeroSection from "./component/HeroSection";
import ProjectSection from "./component/ProjectSection";

export default function  home() {
   return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
    </main>
        
            
    
    )
} 
