import React from "react";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

const Skills = () => {
  const cardData = [
    {
      title: "web",
      description: "mern-focused front-end dev",
      items: ["tailwind", "javascript", "firebase", "react"],
    },
    {
      title: "Tools",
      description: "dev environment",
      items: ["VS Code", "Figma", "GitHub"],
    },
    // add more cards here
  ];

  return (
    <div className="flex gap-10">
      {cardData.map((card, index) => (
        <Card key={index}>
          <Card.Header>
            <Card.Title>{card.title}</Card.Title>
            <Card.Description>{card.description}</Card.Description>
          </Card.Header>
          <Card.Content>
            <ul className="list-disc list-inside pl-2">
              {card.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
