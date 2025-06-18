// components/About/About.tsx
import TreeItem from "./TreeItem";
import { aboutData } from "./aboutData";

const About = () => {
  return (
    <div className="p-4 bg-background text-foreground font-mono lowercase h-150">
      {aboutData.map((node, index) => (
        <TreeItem key={index} node={node} />
      ))}
    </div>
  );
};

export default About;
