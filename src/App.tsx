import React, { useRef, useState } from "react";
// import Swal from "sweetalert2";
// import { cn } from "@/lib/utils";

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

  // const Swal = require("sweetalert2");
  // const showAlert = () => {
  //   Swal.fire({
  //     title: "Do you want to save the changes?",
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: "Save",
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire("Saved!", "", "success");
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
  // };

  const handleTabChange = (index: number) => {
    navigate(tabRoutes[index]);
    setShowMenu(false); // close menu on tab click
  };

  return (
    <div className="bg-background text-foreground min-h-screen lowercase">
      {/* <button onClick={showAlert} className="btn">
        Show Alert
      </button>
      <button className="btn" onClick={() => audioRef.current?.play()}>
        Play Music
      </button> */}
      <audio ref={audioRef} loop>
        <source src="/assets/music.m4a" type="audio/mp4" />
      </audio>
      <div className="w-full px-4 py-10 mb-30">
        <Tabs defaultIndex={safeTabIndex} onChange={handleTabChange}>
          {/* Mobile hamburger button */}
          <div className="md:hidden mb-4">
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

            {/* Mobile dropdown triggers */}
            {showMenu && (
              <div className="flex flex-col md:hidden mt-2 gap-2 bg-card border border-border rounded-md px-3 py-2 w-48 mx-auto shadow-md z-10">
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

          {/* Always render panels */}
          <div className="pt-5">
            <TabsPanels>
              <div className="flex justify-center">
                {showPlayer && (
                  <RetroAudioPlayer onClose={() => setShowPlayer(false)} />
                )}
              </div>
              <TabsContent>
                {/* 🔊 Insert here — music player just below the tabs */}
                <Skills />
                {/* 👇 Inline player positioned below the tabs */}
              </TabsContent>
              <TabsContent className="mb-10">
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
          </div>
        </Tabs>
      </div>

      <div className="md:mt-0">
        <TerminalFooter />
      </div>
    </div>
  );
}

export default App;
