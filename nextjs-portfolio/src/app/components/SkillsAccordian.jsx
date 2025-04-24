"use client";
import { useState } from "react";

const tabData = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Flask", "Java", "Python", "C++"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "Sequelize"],
  },
  {
    label: "Cloud / Tools",
    items: ["AWS (Lambda, S3)", "Git", "GitHub", "VS Code"],
  },
  {
    label: "Miscellaneous",
    items: ["Flutter", "Firebase", "Figma"],
  },
];

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-700 rounded-lg overflow-hidden">
      {/* Tab List */}
      <div className="sm:w-1/3 bg-gray-800 border-r border-gray-700">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full text-left px-4 py-3 font-semibold hover:bg-gray-700 ${
              activeTab === index ? "bg-gray-700 text-white" : "text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="sm:w-2/3 bg-gray-900 p-6">
        <ul className="list-disc pl-5 text-gray-100 space-y-1">
          {tabData[activeTab].items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsTabs;
