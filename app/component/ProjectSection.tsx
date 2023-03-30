import React from "react"
import Image from "next/image"
import Link from "next/link"

import { BsGithub, } from "react-icons/bs"

const projects = [
  {
    name: "Panaverse Dao ",
    description:
      "Panaverse Dao website is my first website which created through Next.Js 13 and Tailwind CSS.",
    image: "/1.PNG",
    github: "https://youtu.be/Dr6U7EPHqGk",
    link: "https://youtu.be/Dr6U7EPHqGk",
  },
  {
    name: "Typescript QuizApp",
    description: "Simple Typescript Quizapp .",
    image: "/2.PNG",
    github: "https://github.com/MuhammadHammad02/Quiz-App-Typescript",
    link: "https://youtu.be/Z3tSzkbTKyA",
  },
  {
    name: "ATM Machine",
    description:
      "This is Cli based ATM machine project on typescript.",
    image: "/3.PNG",
    github: "https://github.com/MuhammadHammad02/ATM-Project-Typescript",
    link: "https://youtu.be/Q5b4o7zRDQc",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              
                <div className="flex flex-col md:flex-row md:space-x-12 ">
                  <div className=" md:w-1/2 ">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                     
                     
                      </Link>
                    </div>
                  </div>
                </div>
                          </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection