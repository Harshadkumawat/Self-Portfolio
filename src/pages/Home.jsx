import React from "react";
import { Link } from "react-router-dom";
import { Code2, Palette, LineChart, MoveRight } from "lucide-react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/SkillBar";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <h2 className="section-heading">Who am I?</h2>
              <h3 className="text-2xl text-primary font-semibold mt-8 mb-4">
                I'm Harshad Kumawat, a self-taught Full Stack Web Developer
              </h3>
              <p className="text-gray-300 mb-4">
                I specialize in building modern, responsive web applications
                using the MERN stack. Over the past year, I've developed a
                variety of real-world projects that showcase my strong
                problem-solving abilities and passion for writing clean,
                maintainable code.
              </p>
              <p className="text-gray-300 mb-6">
                My core strengths lie in JavaScript and its ecosystem,
                especially React, Node.js, and MongoDB. I focus on writing
                clean, scalable, and maintainable code while delivering
                intuitive and user-friendly interfaces
              </p>

              <Link to="/about" className="btn-primary">
                More About Me
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 rounded-lg overflow-hidden animate-on-scroll">
                  <img
                    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Developer at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark">
        <div className="container">
          <div className="mb-16 animate-on-scroll">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-gray-400 mt-6 max-w-3xl">
              A selection of my recent work. These projects showcase my skills
              and expertise in various technologies and domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Crypto-app"
              description="No description available."
              image="https://raw.githubusercontent.com/Harshadkumawat/Crypto-app/main/assets/Crypto-app.png"
              tags={["React"]}
              demoLink="https://crypto-app-roan-phi.vercel.app/"
              codeLink="https://github.com/Harshadkumawat/Crypto-app"
              delay={100}
            />
            <ProjectCard
              title="News-Web"
              description= "A modern news application built with React and Tailwind CSS that fetches and displays news articles based on user-selected topics using the News API."
              image="https://raw.githubusercontent.com/Harshadkumawat/News-Web/main/assets/News-Web.png"
              tags={[ "React",  "Tailwind"]}
              demoLink="https://news-web-lac.vercel.app/"
              codeLink="https://github.com/Harshadkumawat/News-Web"
              delay={200}
            />
            <ProjectCard
              title="Finance Dashboard"
              description="An analytics dashboard for tracking financial data with interactive visualizations and reports"
              image="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              tags={["Next.js", "Chart.js", "Supabase", "Auth0"]}
              demoLink="#"
              codeLink="#"
              delay={300}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center"
            >
              View All Projects <MoveRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="section-heading">My Skills</h2>
              <p className="text-gray-400 mt-6 mb-8">
                I've developed expertise in various technologies through years
                of practice and continuous learning. Here's a look at my
                technical proficiency.
              </p>

              <SkillBar
                name="JavaScript / TypeScript"
                percentage={75}
                delay={100}
              />
              <SkillBar name="React / Next.js" percentage={75} delay={200} />
              <SkillBar name="Node.js / Express" percentage={85} delay={300} />
              <SkillBar name="HTML5 / CSS3" percentage={90} delay={400} />
              <SkillBar name="Tailwind CSS" percentage={90} delay={500} />

              <div className="mt-8">
                <Link to="/skills" className="btn-outline">
                  Explore All Skills
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-30 animate-pulse-slow"></div>
                <div className="relative bg-dark-light p-8 rounded-lg animate-on-scroll">
                  <h3 className="text-xl font-semibold mb-6 text-light">
                    Technology Stack
                  </h3>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-dark flex items-center justify-center mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt="React"
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-dark flex items-center justify-center mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                          alt="TypeScript"
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-dark flex items-center justify-center mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                          alt="Tailwind"
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">Tailwind</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-dark flex items-center justify-center mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                          alt="Node.js"
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-dark flex items-center justify-center mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                          alt="MongoDB"
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-dark flex items-center justify-center mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                          alt="Git"
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">Git</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-dark bg-opacity-70 relative">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">
              Let's Work Together on Your Next Project
            </h2>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work and open to new
              opportunities. If you have a project that needs expertise in web
              development, let's discuss how I can help you achieve your goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
