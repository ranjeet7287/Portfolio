import React from "react";

const About = () => {
  // Data for the experience timeline
  const experiences = [
    {
      year: "Apr 2025 - Present",
      role: "Software Developer — Full Stack",
      company: "ClearCatNet",
      description:
        "Led end-to-end development of Learnees EdTech platform, delivering production-ready MVP in 4 months by managing a team of 3 developers. Architected scalable full-stack system with Node.js/Express/PostgreSQL backend, Next.js frontend, and React.js admin panel.",
    },
    {
      year: "Jan 2024 - Mar 2025",
      role: "Software Developer — Mobile & Backend",
      company: "Shauryats Solutions Pvt. Ltd",
      description:
        "Architected and deployed a full-stack EdTech platform achieving 100K+ downloads with 7K peak concurrent users. Built production-grade React.js web app and cross-platform React Native mobile app with complete CI/CD pipeline.",
    },
    {
      year: "Sept 2023 - Dec 2023",
      role: "Software Developer Intern — Mobile & Backend",
      company: "Shauryats Solutions Pvt. Ltd",
      description:
        "Designed normalized PostgreSQL database schema for exam analytics, improving query performance by 50%. Built competitive features including tournament leaderboards and analytics dashboard.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start max-w-5xl mx-auto">
          {/* Career Timeline Section */}
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-5 border-l-2 border-blue-200 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                    <span className="block text-sm text-blue-600 font-medium mb-1">
                      {exp.year}
                    </span>
                    <h4 className="font-bold text-gray-800">{exp.role}</h4>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="w-full md:w-3/5 lg:w-2/3 space-y-4 text-gray-700">
            <p className="text-lg">
              Full Stack Developer with hands-on experience building and
              deploying production-grade web and mobile applications. I've
              successfully delivered 3 production applications from scratch,
              collectively serving 100K+ users with 99.5%+ uptime. Skilled in
              JavaScript, React, Next.js, Node.js, React Native, and
              Python/Django with strong expertise in system design, database
              architecture, and agile development.
            </p>
            <p className="text-lg">
              Proficient in optimizing frontend performance through techniques
              such as code splitting, lazy loading, and reusable component
              libraries — achieving 90+ Lighthouse scores and improving page
              load times by 60%. Experienced in implementing CI/CD pipelines,
              WebSocket-based real-time systems, and Redis caching to reduce
              system latency by 40%.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me solving DSA problems on
              Coding Ninjas (300+ solved), exploring new technologies, or
              mentoring team members on development best practices.
            </p>

            {/* Education */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                Education
              </h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800">B.Tech in Computer Science Engineering</h4>
                <p className="text-gray-600 text-sm">Shri Venkateshwara University, Uttar Pradesh</p>
                <p className="text-blue-600 text-sm font-medium">April 2021 – April 2025</p>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  JavaScript (ES6+)
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React.js
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React Native
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Node.js (Express)
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Django
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Redis
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Docker
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Git
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
