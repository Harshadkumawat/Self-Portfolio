import { Code, Layout, Database, Globe, LineChart, Layers } from "lucide-react";
import SkillBar from "../components/SkillBar";

const Skills = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-dark py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-on-scroll">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-gray-300 max-w-3xl animate-on-scroll">
            A comprehensive overview of my technical abilities, expertise, and
            the services I offer to clients and collaborators.
          </p>
        </div>
      </div>

      {/* Technical Skills */}
      <section className="container py-16">
        <div className="mb-16 animate-on-scroll">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-gray-400 mt-6">
            My proficiency in various programming languages, frameworks, and
            tools that I've honed over the years through professional work and
            personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-light mb-6 animate-on-scroll">
              Frontend Development
            </h3>
            <div className="space-y-8">
              <SkillBar
                name="HTML5 / CSS3 / SASS"
                percentage={95}
                delay={100}
              />
              <SkillBar name="Tailwind CSS" percentage={90} delay={200} />
              <SkillBar
                name="JavaScript / TypeScript"
                percentage={75}
                delay={300}
              />
              <SkillBar name="React / Next.js" percentage={75} delay={400} />
              <SkillBar name="Responsive Design" percentage={95} delay={500} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-light mb-6 animate-on-scroll">
              Backend Development
            </h3>
            <div className="space-y-8">
              <SkillBar name="Node.js / Express" percentage={85} delay={100} />
              <SkillBar name="MongoDB / Mongoose" percentage={80} delay={300} />
              <SkillBar name="RESTful APIs" percentage={90} delay={500} />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-light mb-6 animate-on-scroll">
              Tools & Technologies
            </h3>
            <div className="space-y-8">
              <SkillBar name="Git / GitHub" percentage={95} delay={100} />

              <SkillBar name=" Vercel" percentage={80} delay={400} />
              <SkillBar name="Postman" percentage={85} delay={500} />
              <SkillBar name=" VS Code" percentage={80} delay={600} />
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
