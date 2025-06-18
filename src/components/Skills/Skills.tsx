import { useEffect, useState } from "react";
import Skill from "@/components/Skill/Skill";
import type { SkillProps } from "@/components/Skill/Skill";

const Skills = () => {
  const [skills, setSkills] = useState<SkillProps[]>([]);

  useEffect(() => {
    fetch("/skillsData.json")
      .then((res) => res.json())
      .then((data: SkillProps[]) => setSkills(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-6">
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
