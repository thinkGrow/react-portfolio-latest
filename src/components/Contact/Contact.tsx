import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#257656] text-white w-[90%] p-2 md:p-6 max-w-md mx-auto border-4 border-[#6ee7b7] 
    rounded-lg shadow-lg font-mono md:mb-40 sm:h-150 md:h-full">
      <h2 className="text-2xl mb-6 text-center flex justify-center items-center gap-2">
        <img src="/assets/scyther.gif" alt="logo" className="w-6 h-6" />
        contact
      </h2>

      <div className="flex flex-col gap-4 items-center text-[10px] md:text-lg">
        <a
          href="https://wa.me/8801741515595?text=Thank%20you%20for%20messaging%20me%2C%20I%20will%20get%20back%20to%20you%20as%20soon%20as%20I%20can%2C%20cheers."
          target="_blank"
          rel="noreferrer"
          className="w-full text-center bg-[#145a4d] hover:bg-[#1c6e5e] border-2 border-[#6ee7b7] px-4 py-2 flex justify-center items-center gap-2 transition text-md"
        >
          <FaWhatsapp /> Chat on WhatsApp <br /> (Most Available)
        </a>
        <a
          href="https://github.com/thinkGrow"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#145a4d] hover:bg-[#1c6e5e] border-2 border-[#6ee7b7] px-4 py-2 flex justify-center items-center gap-2 transition"
        >
          <FaGithub /> github.com/thinkGrow
        </a>
        <a
          href="https://www.linkedin.com/in/rubaut-reshed/"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#145a4d] hover:bg-[#1c6e5e] border-2 border-[#6ee7b7] px-4 py-2 flex justify-center items-center gap-2 transition"
        >
          <FaLinkedin /> linkedin.com/in/rubaut-reshed
        </a>
        <a
          href="mailto:rubaitreshad@email.com"
          className="w-full bg-[#145a4d] hover:bg-[#1c6e5e] border-2 border-[#6ee7b7] px-4 py-2 flex justify-center items-center gap-2 transition"
        >
          <FaEnvelope /> rubaitreshad@email.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
