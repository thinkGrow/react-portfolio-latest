// components/About/aboutData.ts
export type TreeNode = {
  label: string;
  type: "folder" | "file";
  children?: TreeNode[];
};

export const aboutData: TreeNode[] = [
  {
    label: "personal info",
    type: "folder",
    children: [
      {
        label: "nickname",
        type: "folder",
        children: [{ label: "rubait-reshad.txt", type: "file" }],
      },
      {
        label: "official name",
        type: "folder",
        children: [{ label: "md-rubaut-reshed-chowdhury.txt", type: "file" }],
      },
      {
        label: "location",
        type: "folder",
        children: [{ label: "bangladesh.txt", type: "file" }],
      },
    ],
  },
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
      { label: "full-stack-laravel.intern", type: "file" },
      { label: "teacher-o-a-undergrad-level-math-cs.txt", type: "file" },
      { label: "sports-journalist.txt", type: "file" },
    ],
  },
  {
    label: "interests",
    type: "folder",
    children: [
      { label: "web-dev.txt", type: "file" },
      { label: "ai-research.txt", type: "file" },
      { label: "football.txt", type: "file" },
      { label: "hip-hop-music.txt", type: "file" },
    ],
  },
];
