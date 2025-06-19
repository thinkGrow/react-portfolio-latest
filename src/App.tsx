import React, { useRef, useState, useEffect } from "react";

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
import RetroAudioPlayer from "./components/Music/RetroAudioPlayer";

const tabRoutes = ["/skills", "/projects", "/services", "/about", "/contact"];

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);

  const currentTabIndex = tabRoutes.indexOf(location.pathname);
  const safeTabIndex = currentTabIndex === -1 ? 0 : currentTabIndex;
  const [showPlayer, setShowPlayer] = useState(true);

  const handleTabChange = (index: number) => {
    navigate(tabRoutes[index]);
    setShowMenu(false); // close menu on tab click
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen lowercase">
      <audio ref={audioRef} loop>
        <source src="/assets/music.m4a" type="audio/mp4" />
      </audio>
      <div className="w-full px-4 py-4 md:py-10 mb-30">
        <Tabs defaultIndex={safeTabIndex} onChange={handleTabChange}>
          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="px-3 py-2 border border-border rounded bg-muted"
            >
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-foreground"></span>
                <span className="block w-5 h-0.5 bg-foreground"></span>
                <span className="block w-5 h-0.5 bg-foreground"></span>
              </div>
            </button>
          </div>

          {/* Tabs menu (responsive) */}
          <TabsTriggerList>
            {/* Desktop triggers */}
            <div className="hidden md:flex w-full justify-between">
              <TabsTrigger>skills</TabsTrigger>
              <TabsTrigger>projects</TabsTrigger>
              <TabsTrigger>services</TabsTrigger>
              <TabsTrigger>about</TabsTrigger>
              <TabsTrigger>contact</TabsTrigger>
            </div>
          </TabsTriggerList>

          <TabsTriggerList>
            {/* Mobile dropdown triggers */}
            {showMenu && (
              // <div className="flex flex-col md:hidden mt-2 gap-2 bg-card border border-border rounded-md px-3 py-2 w-48 mx-auto shadow-md z-10">
              <div className="absolute left-4 mt-1 flex flex-col gap-2 bg-card border border-border rounded-md px-3 py-2 w-48 shadow-md z-50">
                <TabsTrigger>
                  <span className="text-xs px-2 py-1">skills</span>
                </TabsTrigger>
                <TabsTrigger>
                  <span className="text-xs px-2 py-1">projects</span>
                </TabsTrigger>
                <TabsTrigger>
                  <span className="text-xs px-2 py-1">services</span>
                </TabsTrigger>
                <TabsTrigger>
                  <span className="text-xs px-2 py-1">about</span>
                </TabsTrigger>
                <TabsTrigger>
                  <span className="text-xs px-2 py-1">contact</span>
                </TabsTrigger>
              </div>
            )}
          </TabsTriggerList>

          {/* renders to phone */}
          <div>
            <TabsPanels className="pb-40 md:hidden">
              <div className="flex justify-center">
                {showPlayer && (
                  <RetroAudioPlayer onClose={() => setShowPlayer(false)} />
                )}
              </div>
              <TabsContent className="h-auto lg:h-[65vh]">
                <Skills />
              </TabsContent>
              <TabsContent className="mb-10">
                <Projects />
              </TabsContent>
              <TabsContent className="mb-10 lg:h-[60vh]">
                <Services />
              </TabsContent>
              <TabsContent className="mb-10 lg:h-[60vh]">
                <About />
              </TabsContent>
              <TabsContent className="mb-10 lg:h-[60vh]">
                <Contact />
              </TabsContent>
            </TabsPanels>
          </div>

          {/*renders to desktop*/}
          <div className="pt-5 sm:hidden md:visible">
            <TabsPanels className="pb-40">
              <div className="flex justify-center">
                {showPlayer && (
                  <RetroAudioPlayer onClose={() => setShowPlayer(false)} />
                )}
              </div>
              <TabsContent className="mb-10 lg:h-[65vh]">
                <Skills />
              </TabsContent>
              <TabsContent className="mb-10">
                <Projects />
              </TabsContent>
              <TabsContent className="mb-10 lg:h-[60vh]">
                <Services />
              </TabsContent>
              <TabsContent className="mb-10 lg:h-[60vh]">
                <About />
              </TabsContent>
              <TabsContent className="mb-10 lg:h-[60vh]">
                <Contact />
              </TabsContent>
            </TabsPanels>
          </div>
        </Tabs>
      </div>

      <div className="mt-40 md:mt-0">
        <TerminalFooter />
      </div>
    </div>
  );
}

export default App;
