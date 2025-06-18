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
    <Card className="rounded-xl sm:h-[50vh] md:h-[35vh]">
      <div className="flex h-full">
        <div>
          <Card.Header>
            <div className="flex justify-between items-center">
              <div>
                <Card.Title className="text-lg p-0 m-0">{title}</Card.Title>
              </div>
              <div className="flex gap-2 my-2">
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
            </div>
          </Card.Header>

          <div className="text-sm px-3 h-[65%]">
            <div className="flex justify-between h-full">
              {/* desc + bulletpoints */}
              <div className="flex flex-col justify-around h-full gap-10 p-1">
                <div>{description}</div>
                <ul className="flex flex-col md:flex-row gap-2 list-disc list-inside text-sm">
                  {items.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="flex h-full items-center justify-center">
                {image && (
                  <img src={image} alt={title} className="h-3/4 object-cover" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
