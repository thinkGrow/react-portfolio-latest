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
    <>
        <h1 className="text-2xl">frontend dev</h1>
        <h2 className="text-xl">
          skills - because you're here to see what I can build for you, not what
          I do at my leisure time
        </h2>
        <div className="grid grid-cols-4 gap-10 px-4">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
    </>
  );
};

export default Skills;
