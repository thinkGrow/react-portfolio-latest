import { Card } from "@/components/retroui/Card";

type ProjectProps = {
  title: string;
  description: string;
  items: string[];
  image?: string;
};

const Project = ({ title, description, items, image }: ProjectProps) => {
  return (
    <Card className="flex rounded-xl overflow-hidden h-100 p-4">
      <div>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover p-4"
          />
        )}
      </div>

      <div>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <ul className="list-disc list-inside pl-2">
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
