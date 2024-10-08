"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaSass,
  FaNpm,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { list } from "postcss";
import { CiPhone } from "react-icons/ci";
import { GiBearFace } from "react-icons/gi";

const about = {
  title: "About me",
  description:
    "I am a programmer who strives to create innovative solutions that have a positive impact on people's lives.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rostyslav Sokalskyi",
    },
    {
      fieldName: "Phone",
      fieldValue: "067-904-5456",
    },
    {
      fieldName: "Experience",
      fieldValue: "9 months",
    },
    {
      fieldName: "Insta",
      fieldValue: "@rostyslavsokalskyi",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ukraine",
    },
    {
      fieldName: "Email",
      fieldValue: "rostyksokalskyi@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avialable",
    },
    {
      fieldName: "Languages",
      fieldValue: "English (B-1), Ukrainian",
    },
  ],
};

const education = {
  icon: "🎓",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus.",
  items: [
    {
      institution: "Lviv Polytechnic ",
      degree: "Computer Science",
      duration: "2022 - Present | (exp.2026)",
    },
    {
      institution: "Zbarazh Secondary School",
      degree: "General Education",
      duration: "2016-2022",
    },
  ],
};

const experience = {
  icon: "👨‍💻",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus.",
  items: [
    {
      company: "Appexoft",
      position: "Software Engineer",
      duration: "01/2023 - Present",
    },
    {
      company: "Social Media Startup",
      position: "Software Engineer",
      duration: "10/2022 - 01/2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus. Sed non risus.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <FaSass />,
      name: "Sass",
    },
    {
      icon: <GiBearFace />,
      name: "Zustand",
    },
    {
      icon: <FaNpm />,
      name: "NPM",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex  items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 ">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 ">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index}>
                      <p className="text-white/60 ">{item.fieldName}</p>
                      <p className="text-xl">{item.fieldValue}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
