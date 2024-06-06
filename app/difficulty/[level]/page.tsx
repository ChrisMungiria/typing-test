import React from "react";

const DifficultyLevel = async ({ params }: { params: { level: string } }) => {
  // const words = await fetch(`https://.../${params.level}`).then((res) => res.json());
  const words = [
    "bicycle",
    "elephant",
    "balloon",
    "theater",
    "adventure",
    "mystery",
    "diamond",
    "courage",
    "kitchen",
    "journal",
    "whisper",
    "library",
    "lantern",
    "festival",
    "journey",
    "capture",
    "garden",
    "pattern",
    "tractor",
    "blanket",
  ];
  return (
    <>
      <h1 className="text-2xl tracking-widest uppercase  font-light">
        {params.level}
      </h1>

      {/* Timer */}
      <p className="text-7xl my-3 font-light tracking-wide">00:00</p>

      {/* Words */}

      <div className="w-11/12 max-w-3xl flex flex-wrap items-center justify-center gap-2 text-[#5E6572]">
        {words.map((word, index) => (
          <p
            key={index}
            className="text-center rexrlg
          "
          >
            {word}
          </p>
        ))}
      </div>
    </>
  );
};

export default DifficultyLevel;
