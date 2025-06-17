import "./App.css";
import { Button } from "@/components/retroui/Button";
import {
  Tabs,
  TabsPanels,
  TabsTrigger,
  TabsContent,
  TabsTriggerList,
} from "@/components/retroui/Tab";

function App() {
  return (
    <div className="w-full min-h-screen px-4 py-10 bg-background text-foreground">
      <div className="mb-6">
        <Button>Click Me!</Button>
      </div>

      <h1 className="text-4xl font-head mb-6">Welcome to My App</h1>

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
            <p className="text-lg">Welcome to RetroUI.</p>
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
