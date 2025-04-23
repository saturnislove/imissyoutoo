import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const loveQuotes = [
  "I would rather spend one lifetime with you than face all the ages of this world alone.",
  "Whatever our souls are made of, yours and mine are the same.",
  "You are my sun, my moon, and all of my stars.",
  "In your smile, I see something more beautiful than the stars.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "You have bewitched me, body and soul, and I love you.",
  "If I had a flower for every time I thought of you, I could walk in my garden forever.",
  "My love for you is a journey, starting at forever and ending at never.",
  "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect, and I loved you even more.",
  "You're nothing short of my everything."
];


const loveImages = Array.from({ length: 25 }, (_, i) => `/${i + 1}.jpg`);

export default function MissMeApp() {
  const [showContent, setShowContent] = useState(false);
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    return loveQuotes[randomIndex];
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * loveImages.length);
    return loveImages[randomIndex];
  };

  const handleInitialClick = () => {
    setQuote(getRandomQuote());
    setImage(getRandomImage());
    setShowContent(true);
  };

  const handleCycleClick = () => {
    setQuote(getRandomQuote());
    setImage(getRandomImage());
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-4 relative">
      {/* 🎵 Music Player Button */}
      <audio ref={audioRef} src="/love.mp3" loop />
      <button
        className="absolute top-4 right-4 bg-white text-pink-500 border border-pink-400 rounded-full px-3 py-1 text-sm shadow hover:bg-pink-50"
        onClick={toggleAudio}
      >
        {isPlaying ? "pause music" : "play music"}
      </button>

      {!showContent ? (
        <button
          className="text-xl px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          onClick={handleInitialClick}
        >
          click this if you ever miss me
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="max-w-md bg-white rounded-2xl shadow-xl p-4">
            <img
              src={image}
              alt="Saturn and Anki <3"
              className="rounded-2xl w-full object-cover object-center"
              style={{ maxHeight: "500px" }}
            />
            <p className="mt-4 text-lg italic font-serif text-pink-700">{quote}</p>

            <div className="flex flex-col gap-2 mt-4">
              <button
                className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
                onClick={handleCycleClick}
              >
                click again if you miss me extra
              </button>
              <Link href="/">
                <button className="px-4 py-2 bg-white text-pink-500 border border-pink-500 rounded-xl hover:bg-pink-50">
                  go home
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
