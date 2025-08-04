import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ 
            '--target-width': `${skill.level}%`,
            width: isVisible ? `${skill.level}%` : '0%'
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
