import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
  delay = 0,
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div>
      <div
        ref={ref}
        className={`project-card bg-dark-light rounded overflow-hidden flex flex-col justify-between transform transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          transitionDelay: `${delay}ms`,
          minHeight: "250px", // ensures equal card height
        }}
      >
        {/* Image */}
        <div className="w-full h-[250px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-[100%] object-fit"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x250?text=No+Image";
            }}
          />
        </div>

        {/* Content */}
        <div className="project-overlay p-6 flex flex-col justify-between flex-1">
          <div>
            <p className="text-gray-300 text-sm mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-dark text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-primary px-3 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-opacity-90 transition-colors"
            >
              Demo <ExternalLink size={14} />
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-700 px-3 py-1.5 rounded-md text-sm flex items-center gap-1 hover:bg-opacity-90 transition-colors"
            >
              Code <Github size={14} />
            </a>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-primary py-2">{title}</h3>
    </div>
  );
};

export default ProjectCard;
