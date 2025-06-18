// components/About/TreeItem.tsx
import { useState } from "react";
import { FolderIcon, FolderOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";
import type { TreeNode } from "./aboutData";

type Props = {
  node: TreeNode;
  depth?: number;
};

const TreeItem = ({ node, depth = 0 }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const indent = "│   ".repeat(depth);

  const handleToggle = () => {
    if (node.type === "folder") setIsOpen(!isOpen);
  };

  return (
    <div className="font-mono lowercase">
      <div
        onClick={handleToggle}
        className="flex items-center cursor-pointer hover:text-primary transition"
      >
        <span className="mr-1">{indent}├──</span>
        {node.type === "folder" ? (
          isOpen ? <FolderOpenIcon className="w-4 h-4 mr-2" /> : <FolderIcon className="w-4 h-4 mr-2" />
        ) : (
          <DocumentIcon className="w-4 h-4 mr-2" />
        )}
        {node.label}
      </div>

      {isOpen &&
        node.children?.map((child, index) => (
          <TreeItem key={index} node={child} depth={depth + 1} />
        ))}
    </div>
  );
};

export default TreeItem;
