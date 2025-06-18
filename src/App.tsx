import { useLocation, useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsPanels,
  TabsTrigger,
  TabsTriggerList,
  TabsContent,
} from "@/components/retroui/Tab";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import TerminalFooter from "./components/TerminalFooter/TerminalFooter";

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
    <div>
      <div className="w-full px-4 py-10 bg-background text-foreground">
        <Tabs defaultIndex={safeTabIndex} onChange={handleTabChange}>
          <TabsTriggerList>
            <TabsTrigger>skills</TabsTrigger>
            <TabsTrigger>projects</TabsTrigger>
            <TabsTrigger>services</TabsTrigger>
            <TabsTrigger>about</TabsTrigger>
            <TabsTrigger>contact</TabsTrigger>
          </TabsTriggerList>
          <br />
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
      <div className="md:mt-0">
        <TerminalFooter></TerminalFooter>
      </div>
    </div>
  );
}

export default App;
