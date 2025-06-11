import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const GITHUB_USERNAME = "Harshadkumawat";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repos");
        }
        const data = await response.json();

        const mappedProjects = data.map((repo) => {
          const imageUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/assets/${repo.name}.png`;

          let category = "other";
          const name = repo.name.toLowerCase();
          const topics = (repo.topics || []).map((t) => t.toLowerCase());

          const checks = [
            { keywords: ["frontend"], value: "frontend" },
            { keywords: ["ui"], value: "ui" },
            { keywords: ["clone"], value: "clone" },
            {
              keywords: ["fullstack", "backend", "mern stack", "full stack"],
              value: "fullstack",
            },
            { keywords: ["javascript", "js"], value: "javascript" },
          ];

          // Step 1: Check topics first
          for (const check of checks) {
            if (
              topics.some((topic) =>
                check.keywords.some((kw) => topic.includes(kw))
              )
            ) {
              category = check.value;
              break;
            }
          }

          // Step 2: Check name if still "other"
          if (category === "other") {
            for (const check of checks) {
              if (check.keywords.some((kw) => name.includes(kw))) {
                category = check.value;
                break;
              }
            }
          }

          return {
            id: repo.id,
            title: repo.name,
            description: repo.description || "No description available.",
            image: imageUrl,
            tags: [], // optionally fill later
            category,
            demoLink: repo.homepage || "#",
            codeLink: repo.html_url,
          };
        });

        setProjects(mappedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    "all",
    "frontend",
    "ui",
    "clone",
    "fullstack", // ✅ exactly same as check.value
    "javascript",
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-dark py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-on-scroll">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-3xl animate-on-scroll">
            A collection of my work showcasing my skills and experience. Each
            project reflects my passion for creating elegant solutions to
            complex problems.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container py-16">
        <div className="flex flex-wrap gap-4 mb-12 justify-center animate-on-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === cat
                  ? "bg-primary text-secondary"
                  : "bg-dark-light text-gray-300 hover:bg-primary/20"
              }`}
            >
              {cat === "all"
                ? "All Projects"
                : cat.charAt(0).toUpperCase() + cat.slice(1) + " Projects"}
            </button>
          ))}
        </div>

        {/* Loading & Error */}
        {loading && (
          <p className="text-center text-gray-400">Loading projects...</p>
        )}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {/* Projects Grid */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                delay={index * 100}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found for this category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div
          ref={ref}
          className={`mt-16 bg-dark-light p-8 rounded-lg text-center transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-semibold text-light mb-4">
            Have a project in mind?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to new opportunities and exciting projects. If you
            have an idea or need help with an existing project, I'd love to hear
            from you.
          </p>
          <a href="/contact" className="btn-primary">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
