import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const TerminalFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-green-400 font-mono text-[10px] md:text-sm px-4 shadow-inner z-5 py-6 md:py-10">
      <div className="max-w-screen-lg px-4">
        <p>
          rubait@portfolio:~${" "}
          <span className="text-white">echo "thanks for dropping by"</span>
        </p>
        <p>`{">"}` built using react + tailwind + typescript + shadcn</p>
        <div className="mt-2 flex gap-4 text-white justify-between md:justify-start">
          <a
            href="https://github.com/thinkGrow"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-green-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/rubaut-reshed/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-green-300" />
          </a>
          <a href="mailto:rubaitreshad@email.com">
            <FaEnvelope className="hover:text-green-300" />
          </a>
          <a
            href="https://wa.me/8801741515595"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="hover:text-green-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;
