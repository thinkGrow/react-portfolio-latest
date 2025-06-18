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
    <Tab.List className="flex w-full justify-between gap-4 px-4 font-sans text-sm mb-4">
      {children}
    </Tab.List>
  );
}

function TabsTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Tab
      className={({ selected }) =>
        cn(
          "flex text-center px-4 py-2 border border-border rounded font-head transition-all",
          selected
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground hover:bg-muted/80"
        )
      }
    >
      {children}
    </Tab>
  );
}

function TabsPanels({ children }: { children: React.ReactNode }) {
  return <Tab.Panels className="w-full px-4">{children}</Tab.Panels>;
}

function TabsContent({ children }: { children: React.ReactNode }) {
  return (
    <Tab.Panel className="rounded-xl bg-card p-6 text-sm text-muted-foreground shadow-md">
      {children}
    </Tab.Panel>
  );
}

export {
  Tabs,
  TabsTriggerList,
  TabsTrigger,
  TabsPanels,
  TabsContent,
};
