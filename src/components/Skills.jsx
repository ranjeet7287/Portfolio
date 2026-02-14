import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "React Native", proficiency: 90 },
      { name: "JavaScript (ES6+)", proficiency: 88 },
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "HTML5 / CSS3", proficiency: 88 },
    ],
    backend: [
      { name: "Node.js (Express)", proficiency: 86 },
      { name: "Python", proficiency: 82 },
      { name: "Django", proficiency: 84 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "MySQL", proficiency: 80 },
      { name: "RESTful APIs", proficiency: 88 },
    ],
    devops: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 78 },
      { name: "CI/CD", proficiency: 82 },
      { name: "Redis", proficiency: 80 },
      { name: "WebSockets", proficiency: 82 },
      { name: "Jira", proficiency: 85 },
      { name: "Jest", proficiency: 78 },
      { name: "Google Play Console", proficiency: 83 },
      { name: "Plesk Obsidian", proficiency: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I work with a variety of technologies across the full stack
          development spectrum.
        </p>

        {/* Tabbed Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm bg-white p-1">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === "frontend"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === "backend"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("devops")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === "devops"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              DevOps & Tools
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[activeTab].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </h4>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-800">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              System Design
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Data Structures & Algorithms
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Database Design
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              RESTful APIs
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Agile Development
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Performance Optimization
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Team Leadership
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              CI/CD Pipelines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
