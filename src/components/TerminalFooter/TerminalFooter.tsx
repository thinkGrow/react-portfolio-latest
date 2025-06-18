import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TerminalFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-green-400 font-mono text-sm px-4 py-3 shadow-inner z-50">
      <div className="max-w-screen-lg px-4">
        <p>
          rubait@portfolio:~${" "}
          <span className="text-white">echo "thanks for scrolling"</span>
        </p>
        <p>
          `{'>'}`  built with <span className="text-red-400">♥</span> using react + vite + tailwind
        </p>
        <div className="mt-2 flex gap-4 text-white">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-green-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-green-300" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="hover:text-green-300" />
          </a>
        </div>
        <p className="animate-pulse mt-1">▍</p>
      </div>
    </footer>
  );
};

export default TerminalFooter;
