import React, { useState } from "react";
import { motion } from "framer-motion";

const loveQuotes = [
  "I would rather spend one lifetime with you than face all the ages of this world alone.",
  "Whatever our souls are made of, yours and mine are the same.",
  "You are my sun, my moon, and all of my stars.",
  "In your smile, I see something more beautiful than the stars.",
  "I love you not only for what you are, but for what I am when I am with you."
];

const loveImages = Array.from({ length: 25 }, (_, i) => `/${i + 1}.jpg`);

export default function MissMeApp() {
  const [showContent, setShowContent] = useState(false);
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200 p-6">
      {/* Background music */}
      <audio autoPlay loop className="hidden">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      {!showContent ? (
        <button
          className="text-xl px-6 py-3 bg-pink-500 text-white rounded-xl shadow-md hover:shadow-lg transition hover:bg-pink-600"
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
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-4">
            <img
              src={image}
              alt="Saturn and Anki <3"
              className="rounded-2xl w-full max-h-[500px] object-contain mx-auto"
            />
            <p className="mt-4 text-lg italic font-serif text-pink-600">
              {quote}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
              onClick={handleCycleClick}
            >
              click again if you miss me extra
            </button>
            <button
              className="mt-2 px-4 py-2 bg-white border border-pink-500 text-pink-500 rounded-xl hover:bg-pink-100"
              onClick={() => setShowContent(false)}
            >
              go home
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
