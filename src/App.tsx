import "./App.css";
// import { Button } from "@/components/retroui/Button";
import {
  Tabs,
  TabsPanels,
  TabsTrigger,
  TabsContent,
  TabsTriggerList,
} from "@/components/retroui/Tab";
import Skills from "./components/Skills/Skills";
// import { Text } from "./components/retroui/Text";

function App() {
  return (
    <div className="w-full min-h-screen px-4 py-10 bg-background text-foreground">
      <Tabs>
        <TabsTriggerList>
          <TabsTrigger>Home</TabsTrigger>
          <TabsTrigger>Projects</TabsTrigger>
          <TabsTrigger>Services</TabsTrigger>
          <TabsTrigger>About</TabsTrigger>
          <TabsTrigger>Contact</TabsTrigger>
        </TabsTriggerList>

        <TabsPanels>
          <TabsContent>
            <h1 className="text-2xl">frontend dev</h1>
            <h2 className="text-xl"></h2>
            <Skills></Skills>
          </TabsContent>
          <TabsContent>
            <p className="text-lg">Welcome to Projects.</p>
          </TabsContent>
          <TabsContent>
            <p className="text-lg">Welcome to Services.</p>
          </TabsContent>
          <TabsContent>
            <p className="text-lg">This is the about section!</p>
          </TabsContent>
          <TabsContent>
            <p className="text-lg">This is the contact section!</p>
          </TabsContent>
        </TabsPanels>
      </Tabs>
    </div>
  );
}

export default App;
