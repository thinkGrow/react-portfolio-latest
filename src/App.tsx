import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsPanels, TabsTrigger, TabsTriggerList, TabsContent } from "@/components/retroui/Tab";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const tabRoutes = ["/skills", "/projects", "/services", "/about", "/contact"];

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTabIndex = tabRoutes.indexOf(location.pathname);
  const safeTabIndex = currentTabIndex === -1 ? 0 : currentTabIndex;

  const handleTabChange = (index: number) => {
    navigate(tabRoutes[index]);
  };

  return (
    <div className="w-full min-h-screen px-4 py-10 bg-background text-foreground">
      <Tabs defaultIndex={safeTabIndex} onChange={handleTabChange}>
        <TabsTriggerList>
          <TabsTrigger>Skills</TabsTrigger>
          <TabsTrigger>Projects</TabsTrigger>
          <TabsTrigger>Services</TabsTrigger>
          <TabsTrigger>About</TabsTrigger>
          <TabsTrigger>Contact</TabsTrigger>
        </TabsTriggerList>

        <TabsPanels>
          <TabsContent>
            <Skills />
          </TabsContent>
          <TabsContent>
            <Projects />
          </TabsContent>
          <TabsContent>
            <Services />
          </TabsContent>
          <TabsContent>
            <About />
          </TabsContent>
          <TabsContent>
            <Contact />
          </TabsContent>
        </TabsPanels>
      </Tabs>
    </div>
  );
}

export default App;
