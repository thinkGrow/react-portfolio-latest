import * as React from "react";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

type TabsProps = {
  children: React.ReactNode;
  defaultIndex?: number;
  onChange?: (index: number) => void;
};

function Tabs({ children, defaultIndex, onChange }: TabsProps) {
  return (
    <Tab.Group defaultIndex={defaultIndex} onChange={onChange}>
      {children}
    </Tab.Group>
  );
}

function TabsTriggerList({ children }: { children: React.ReactNode }) {
  return (
    <Tab.List className="flex flex-col md:flex-row w-full justify-between gap-4 px-4 font-sans text-sm mb-4">
      {children}
    </Tab.List>
  );
}

// function TabsTrigger({ children }: { children: React.ReactNode }) {
//   return (
//     <Tab
//       style={{ borderColor: "#6ee7b7" }}
//       className={({ selected }) =>
//         cn(
//           "flex text-center px-4 py-2 border rounded font-head transition-all",
//           "focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0", //
//           selected
//             ? "bg-[#257656] text-white"
//             : // ? "bg-[#061e15] text-white"
//               "bg-gray-300 text-foreground hover:bg-muted/80 border-border"
//         )
//       }
//     >
//       {children}
//     </Tab>
//   );
// }

type TabsTriggerProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Tab>;

function TabsTrigger({ children, onClick }: TabsTriggerProps) {
  return (
    <Tab
      onClick={onClick}
      className={({ selected }: { selected: boolean }) =>
        cn(
          "flex text-center px-4 py-2 border rounded font-head transition-all",
          "focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0",
          selected
            ? "bg-[#257656] text-white"
            : "bg-gray-300 text-foreground hover:bg-muted/80 border-border"
        )
      }
    >
      {children}
    </Tab>
  );
}

function TabsPanels({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Tab.Panels className="w-full px-4">{children}</Tab.Panels>;
}

function TabsContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Tab.Panel
      className={cn(
        "rounded-xl bg-card py-6 text-sm text-muted-foreground shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </Tab.Panel>
  );
}

export { Tabs, TabsTriggerList, TabsTrigger, TabsPanels, TabsContent };
