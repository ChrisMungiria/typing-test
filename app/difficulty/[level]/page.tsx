"use client";

import { useEffect, useRef, useState } from "react";

const paragraph =
  "Sunlight filtered through the dense forest canopy, casting dappled shadows on the mossy ground. Birds chirped melodiously, while a gentle breeze rustled the leaves. Nearby, a babbling brook provided tranquil background music.";

const DifficultyLevel = ({ params }: { params: { level: string } }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const charRefs = useRef<HTMLSpanElement[]>([]);

  const [charIndex, setCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const [correctWrong, setCorrectWrong] = useState<string[]>([]);

  useEffect(() => {
    inputRef.current?.focus();
    setCorrectWrong(Array(charRefs.current.length).fill(""));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const characters = charRefs.current;
    let currentChar = charRefs.current[charIndex];
    let typedChar = e.target.value.slice(-1);

    if (charIndex < characters.length) {
      if (!isTyping) {
        setIsTyping(true);
      }

      if (typedChar === currentChar.textContent) {
        setCharIndex(charIndex + 1);
        setCorrectWrong((prevCorrectWrong) => [
          ...prevCorrectWrong.slice(0, charIndex),
          "correct",
        ]);
      } else {
        setCharIndex(charIndex + 1);
        // Add a mistake state here
        setCorrectWrong((prevCorrectWrong) => [
          ...prevCorrectWrong.slice(0, charIndex),
          "wrong",
        ]);
      }
      if (charIndex === characters.length - 1) {
        setIsTyping(false);
        // paragraph complete
      }
    } else {
      setIsTyping(false);
    }
  };
  return (
    <>
      <h1 className="text-2xl tracking-widest uppercase  font-light">
        {params.level}
      </h1>

      {/* Timer */}
      <p className="text-7xl my-3 font-light tracking-wide">00:00</p>

      {/* Paragraph */}
      <div className="select-none text-center cursor-text">
        <input
          type="text"
          ref={inputRef}
          className="opacity-0 z-[-999] absolute"
          onChange={handleChange}
        />
        {paragraph.split("").map((char, index) => (
          <span
            className={`text-slate-500 ${
              index === charIndex ? "bg-slate-100/50" : ""
            } 
              ${correctWrong[index] === "correct" ? "text-[#48A9A6]" : ""}
              ${correctWrong[index] === "wrong" ? "text-[#C1666B]" : ""}  
     `}
            key={index}
            ref={(e: any) => (charRefs.current[index] = e)}
          >
            {char}
          </span>
        ))}
      </div>
    </>
  );
};

export default DifficultyLevel;
