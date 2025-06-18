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
      {" "}
      <div className="space-y-4 px-4 md:h-150">
        <h1 className="text-2xl">frontend dev</h1>
        <h2 className="text-xl">
          skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
