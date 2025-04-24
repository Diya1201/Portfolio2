"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillsTabs from "./SkillsAccordian"; // vertical tab version

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: <SkillsTabs />,
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
          >
            View Certifications
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <h2 className="text-4xl font-bold text-white text-center mb-8">About Me</h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h3 className="text-2xl font-bold">
            I am <span style={{ color: "rgba(168, 85, 247, 1)" }}>Diya</span>
          </h3>
          <h4 className="text-xl">
            A <span style={{ color: "rgba(168, 85, 247, 1)" }}>Software Engineer</span> based in{" "}
            <span style={{ color: "rgba(168, 85, 247, 1)" }}>USA</span>
          </h4>
          <p className="text-base lg:text-lg">
            I am a Software Engineer with a Master’s from Stevens Institute of Technology, passionate about building clean, scalable, and user-focused applications. I specialize in full-stack development using Python, Java, C++, MySQL, JavaScript, React, Next.js, and Flask. I’ve also built mobile apps with Flutter and explored cloud solutions with AWS tools like Lambda and S3. Currently, I am expanding my skills in TypeScript and Tailwind CSS. I enjoy solving real-world problems through technology and continuously learning to stay ahead in a fast-evolving field.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>AWS Cloud Practitioner</li>
              <li>Google Professional Cloud Developer</li>
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
