import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import { Tooltip } from "../retroui/Tooltip";
import { FaGithub } from "react-icons/fa";
import { SiSitecore } from "react-icons/si";

type ProjectProps = {
  title: string;
  description: string;
  items: string[];
  image?: string;
};

const Project = ({ title, description, items, image }: ProjectProps) => {
  console.log(image);
  return (
    <Card className="rounded-xl h-120 md:h-40 p-4">
      <div className="flex">
        <div className="h-50">
          {image && (
            <img src={image} alt={title} className="h-3/4 object-cover p-4" />
          )}
        </div>

        <div>
          <Card.Header>
            <Card.Title className="text-lg p-0 m-0">{title}</Card.Title>
            <Card.Description className="text-sm">
              {description}
            </Card.Description>
          </Card.Header>
          <Card.Content className="flex justify-between m-0 p-0 w-full items-center">
            <div>
              <ul className="flex flex-col md:flex-row gap-0.5 list-disc list-inside pl-2 text-sm">
                {items.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <Tooltip.Provider>
                <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button className="rounded-full" variant="outline">
                      <FaGithub />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content variant="solid">GitHub</Tooltip.Content>
                </Tooltip>
                <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button className="rounded-full" variant="outline">
                      <SiSitecore />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content variant="solid">Live</Tooltip.Content>
                </Tooltip>
              </Tooltip.Provider>
            </div>
          </Card.Content>
        </div>
      </div>
    </Card>
  );
};

export default Project;
