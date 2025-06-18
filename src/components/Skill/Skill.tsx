import { Card } from "@/components/retroui/Card";

export type SkillProps = {
  title: string;
  description: string;
  items: string[];
};

const Skill = ({ title, description, items }: SkillProps) => {
  return (
    <Card className="rounded-2xl min-w-full sm:w-[48%]">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
      <Card.Content>
        <ul className="list-disc list-inside pl-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card.Content>
    </Card>
  );
};

export default Skill;
