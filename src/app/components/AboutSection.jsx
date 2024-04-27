"use client";

import { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import { motion } from "framer-motion";
import { Skill } from "./Skill";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 pt-8 list-numbers">
        <li>Node.js & React</li>
        <li>MySQL & R</li>
        <li>R Markdown</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        <li>Django & Flask</li>
        <li>jQuery</li>
        <li>WordPress, Markdown</li>
        <li>Bootstrap & TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certifications",
    content: (
      <ul className="list-disc px-4 w-full py-4">
        <Skill
          name="Google IT Support"
          file="gitsupport.png"
          href="https://www.credly.com/badges/36b52ef9-b4fe-475a-aae1-400452724d07/public_url"
          type="Professional Certificate"
        />
        <Skill
          name="Google Data Analytics"
          href="#"
          file="gdataanalytics.png"
          type="Professional Certificate"
        />
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/about-image.png"
          width={500}
          alt="About Me Image"
          height={500}
          className="rounded-lg transition hover:scale-105"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full w-full overflow-auto">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I&apos;m a full-stack developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, HTML, CSS, Python, Git and
            more frameworks, languages and libraries. I am a quick learner and I
            am always looking to expand my knowledge and skill set. I work as a
            freelancer and open-source. Additionally, I&apos;ve wrote several
            books too!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};