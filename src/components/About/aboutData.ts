// components/About/aboutData.ts
export type TreeNode = {
  label: string;
  type: "folder" | "file";
  children?: TreeNode[];
};

export const aboutData: TreeNode[] = [
  {
    label: "education",
    type: "folder",
    children: [
      { label: "bsc-computer-science.txt", type: "file" },
      { label: "thesis-ai.txt", type: "file" },
      { label: "a-level-edexcel.txt", type: "file" },
    ],
  },
  {
    label: "experience",
    type: "folder",
    children: [
      { label: "backend-dev-ngenit.txt", type: "file" },
      { label: "teacher-o-a-undergrad-level-math-cs.txt", type: "file" },
    ],
  },
  {
    label: "interests",
    type: "folder",
    children: [
      { label: "web-dev.txt", type: "file" },
      { label: "ai-research.txt", type: "file" },
      { label: "football.txt", type: "file" },
    ],
  },
];
