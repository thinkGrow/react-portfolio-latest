import { Card } from "@/components/retroui/Card";

type ProjectProps = {
  title: string;
  description: string;
  items: string[];
  image?: string;
};

const Project = ({ title, description, items, image }: ProjectProps) => {
  return (
    <Card className="flex rounded-xl h-120 md:h-50 p-4">
      <div className="h-50">
        {image && (
          <img
            
            src={image}
            alt={title}
            className="h-3/4 object-cover p-4"
          />
        )}
      </div>

      <div>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <Card.Content className="m-0 p-0">
          <ul className="flex flex-col md:flex-row gap-2 list-disc list-inside pl-2">
            {items.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Card.Content>
      </div>
    </Card>
  );
};

export default Project;
