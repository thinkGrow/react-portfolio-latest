import { notesData } from "../../data/notesData";

const Note = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-10 font-mono bg-[#fefefe] text-black">
      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tight border-b-4 border-black pb-2">
        notes
      </h1>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {notesData.map((note) => (
          <div
            key={note.title}
            className="relative bg-[#1c1c1c] text-green-300 border-2 border-black rounded-xl p-6 shadow-[6px_6px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#000] transition-transform duration-150"
          >
            <div className="flex flex-col items-center text-center">
              <h2 className="text-xl font-bold mb-3 underline decoration-green-400">
                {note.title}
              </h2>
              <a
                href={note.file}
                download
                className="bg-green-400 text-black px-4 py-2 rounded-md border border-black shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform"
              >
                ↓ download pdf
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Terminal-style footer */}
      <div className="mt-12 border-t-2 border-black pt-4 text-sm text-gray-700">
        rubait@portfolio:~$ echo "knowledge is power"
      </div>
    </div>
  );
};

export default Note;
