// src/components/Project/Project.tsx

import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import { Tooltip } from "../retroui/Tooltip";
import { FaGithub } from "react-icons/fa";
import { SiSitecore } from "react-icons/si";
import LazyImage from "./LazyImage";

type ProjectProps = {
  title: string;
  description: string;
  items: string[];
  image?: string;
  gitHub?: string;
  live?: string;
};

const Project = ({
  title,
  description,
  items,
  image,
  gitHub,
  live,
}: ProjectProps) => {
  return (
    <Card className="rounded-xl flex flex-col h-full shadow-md">
      <div className="flex flex-col md:flex-row h-full gap-4 p-4">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{title}</h3>

            <div className="flex gap-2">
              <Tooltip.Provider>
                {gitHub && (
                  <Tooltip>
                    <Tooltip.Trigger asChild>
                      <a
                        href={gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="rounded-full" variant="outline">
                          <FaGithub />
                        </Button>
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Content variant="solid">GitHub</Tooltip.Content>
                  </Tooltip>
                )}
                {live && (
                  <Tooltip>
                    <Tooltip.Trigger asChild>
                      <a href={live} target="_blank" rel="noopener noreferrer">
                        <Button className="rounded-full" variant="outline">
                          <SiSitecore />
                        </Button>
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Content variant="solid">Live</Tooltip.Content>
                  </Tooltip>
                )}
              </Tooltip.Provider>
            </div>
          </div>

          <p className="text-sm mt-4 mb-4 text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 text-sm">
            {items.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-full px-2 py-1 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        {image && (
          <div className="w-full md:w-40 flex justify-center items-center">
            <div className="w-28 h-28 overflow-hidden rounded-md bg-white flex justify-center items-center">
              <LazyImage
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Project;
