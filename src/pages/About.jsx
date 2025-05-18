import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-dark py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-on-scroll">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-gray-300 max-w-3xl animate-on-scroll">
            Get to know more about me, my background, what I do, and my skills
            in developing outstanding digital experiences.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left column - Image & Personal Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative rounded-lg overflow-hidden mb-8 animate-on-scroll">
                <img
                  src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Developer Profile"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-2xl font-bold text-light">
                    {" "}
                    Harshad Kumawat
                  </h2>
                  <p className="text-primary">Full Stack Developer</p>
                </div>
              </div>

              <div className="bg-dark-light p-6 rounded-lg mb-8 animate-on-scroll">
                <h3 className="text-xl font-semibold text-light mb-4">
                  Personal Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail size={20} className="text-primary mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-light">
                        harshadkumawat339977@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={20} className="text-primary mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-light">+91 62641 97551</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-light">Indore , MP</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar size={20} className="text-primary mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm">Birthday</p>
                      <p className="text-light">12.oct.2000</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="text-center animate-on-scroll">
                <Link to="/contact" className="btn-primary w-full">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - About content */}
          <div className="lg:col-span-3">
            <div className="mb-12 animate-on-scroll">
              <h2 className="section-heading">Who am I?</h2>
              <div className="mt-8 space-y-4 text-gray-300">
                <p>
                  I'm Harshad Kumawat, a Full Stack Web Developer I specialize
                  in building modern, responsive web applications using the MERN
                  stack. Over the past year, I've developed a variety of
                  real-world projects that showcase my strong problem-solving
                  abilities and passion for writing clean, maintainable code.
                </p>
                <p>
                  My core strengths lie in JavaScript and its ecosystem,
                  especially React, Node.js, and MongoDB. I focus on writing
                  clean, scalable, and maintainable code while delivering
                  intuitive and user-friendly interfaces.
                </p>
                <p>
                  I’m a strong believer in continuous learning — combining
                  self-taught skills, structured courses, and practical
                  projects. Whether working solo or in a team, I bring a
                  problem-solving mindset, attention to detail, and a
                  collaborative approach.
                </p>
                <p>
                  Outside of coding, I enjoy exploring new technologies,
                  learning about UI/UX trends, and occasionally diving into
                  creative pursuits. I'm always open to exciting projects and
                  opportunities that push my skills forward.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="section-heading">Experience</h2>
              <div className="mt-8 space-y-8">
                <div className="bg-dark-light p-6 rounded-lg relative">
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center -ml-12 mr-4">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <div className="ml-8">
                    <span className="text-primary text-sm font-medium">
                      2023 - Present
                    </span>
                    <h3 className="text-xl font-semibold text-light mt-1">
                      Full Stack Developer Intern
                    </h3>
                    <p className="text-gray-400 mt-1">E-Skills </p>
                    <ul className="mt-4 text-gray-300 space-y-2 list-disc pl-5">
                      <li>
                        Completed an internship program focused on full stack
                        development using the MERN stack.
                      </li>
                      <li>
                        Built and deployed several real-world web applications
                        during the learning period.
                      </li>
                      <li>
                        Worked on both frontend (React, Tailwind CSS) and
                        backend (Node.js, Express, MongoDB) development.
                      </li>
                      <li>
                        Collaborated with mentors, followed Agile practices, and
                        improved problem-solving skills through hands-on coding.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="section-heading">Education</h2>
              <div className="mt-8 space-y-8">
                {/* Law Degree */}
                <div className="bg-dark-light p-6 rounded-lg relative">
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center -ml-12 mr-4">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div className="ml-8">
                    <span className="text-primary text-sm font-medium">
                      2020 - 2025
                    </span>
                    <h3 className="text-xl font-semibold text-light mt-1">
                      B.B.A. LL.B. (Hons.)
                    </h3>
                    <p className="text-gray-400 mt-1">
                      Renaissance Law College, Indore
                    </p>
                    <p className="mt-4 text-gray-300">
                      Pursuing a 5-year integrated program in business
                      administration and law. Gained experience through moot
                      courts, legal aid camps, and internships in corporate and
                      property law.
                    </p>
                  </div>
                </div>

                {/* Web Development Education */}
                <div className="bg-dark-light p-6 rounded-lg relative">
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center -ml-12 mr-4">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div className="ml-8">
                    <span className="text-primary text-sm font-medium">
                      2022 - Present
                    </span>
                    <h3 className="text-xl font-semibold text-light mt-1">
                      Full Stack Web Development
                    </h3>
                    <p className="text-gray-400 mt-1">Self-Taught & E-Skills</p>
                    <p className="mt-4 text-gray-300">
                      Learned HTML, CSS, JavaScript, React.js, Node.js,
                      Express.js, MongoDB, and Tailwind CSS through a
                      combination of online courses and offline training. Gained
                      practical experience by building real-world applications
                      and continuously refining skills in modern web
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <h2 className="section-heading">What's Next?</h2>
              <div className="mt-8 bg-dark-light p-6 rounded-lg">
                <p className="text-gray-300 mb-6">
                  I'm always interested in new challenges and opportunities to
                  grow professionally. Whether you have a project in mind, need
                  technical expertise, or just want to connect, I'd love to hear
                  from you.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Get in Touch <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
