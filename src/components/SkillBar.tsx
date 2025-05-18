import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SkillBar = ({ name, percentage, delay = 0 }) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="mb-6" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="text-light font-medium">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;