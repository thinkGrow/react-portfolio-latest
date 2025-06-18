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
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="w-full min-h-screen px-4 py-10 bg-background text-foreground">
      <Tabs>
        <TabsTriggerList>
          <TabsTrigger>Skills</TabsTrigger>
          <TabsTrigger>Projects</TabsTrigger>
          <TabsTrigger>Services</TabsTrigger>
          <TabsTrigger>About</TabsTrigger>
          <TabsTrigger>Contact</TabsTrigger>
        </TabsTriggerList>

        <TabsPanels>
          <TabsContent>
            <h1 className="text-2xl">frontend dev</h1>
            <h2 className="text-xl">
              skills - because you're here to see what I can build for you, not
              what I do at my leisure time
            </h2>
            <Skills></Skills>
          </TabsContent>
          {/* Projects */}
          <TabsContent>
            <Projects></Projects>
          </TabsContent>
          {/* Services */}
          <TabsContent>
            <Services></Services>
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
