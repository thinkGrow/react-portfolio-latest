// src/components/Projects/Projects.tsx

import { useEffect, useState } from "react";
import Project from "@/components/Project/Project";

type ProjectType = {
  title: string;
  description: string;
  items: string[];
  image?: string;
  gitHub?: string;
  live?: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    import("@/data/projectsData")
      .then((mod) => {
        setProjects(mod.default);
      })
      .catch((err) => {
        setError("Failed to load projects.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-muted-foreground">Loading projects...</p>;
  if (error) return <p className="text-destructive">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 auto-rows-fr">
      {projects.map((project, index) => (
        <div className="h-full" key={index}>
          <Project {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
