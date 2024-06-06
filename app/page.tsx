import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background text-slate-100">
      <h2 className="text-2xl tracking-widest uppercase  font-light">
        Select a difficulty below
      </h2>

      {/* Options */}
      <ul className="w-3/4  space-y-3 my-auto max-w-xl  flex flex-col mx-auto text-slate-400">
        <Link href={"/difficulty/easy"}>
          <li className="p-4 px-2 uppercase tracking-widest  text-green/50 rounded-full border border-green/50 hover:border-[#48A9A6] flex items-center justify-center cursor-pointer hover:text-[#48A9A6]">
            Easy
          </li>
        </Link>
        <Link href={"/difficulty/medium"}>
          <li className="p-4 px-2 uppercase tracking-widest text-yellow/50 rounded-full border border-yellow/50 hover:border-[#D4B483] flex items-center justify-center cursor-pointer hover:text-[#D4B483]">
            Medium
          </li>
        </Link>
        <Link href={"/difficulty/hard"}>
          <li className="p-4 px-2 uppercase tracking-widest text-red/50 rounded-full border border-red/50 hover:border-[#C1666B] flex items-center justify-center cursor-pointer hover:text-[#C1666B]">
            Hard
          </li>
        </Link>
      </ul>
    </main>
  );
}
