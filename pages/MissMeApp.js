import React, { useState } from "react";
import { motion } from "framer-motion";

const loveQuotes = [
  "I would rather spend one lifetime with you than face all the ages of this world alone.",
  "Whatever our souls are made of, yours and mine are the same.",
  "You are my sun, my moon, and all of my stars.",
  "In your smile, I see something more beautiful than the stars.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "If I know what love is, it is because of you.",
  "You have bewitched me, body and soul, and I love, I love, I love you.",
  "I wish you to know that you have been the last dream of my soul.",
  "Every love story is beautiful, but ours is my favorite.",
  "My heart is, and always will be, yours."
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200 p-6 relative">
      <audio id="bg-music" src="/love.mp3" loop></audio>
      <button
        onClick={() => {
          const audio = document.getElementById("bg-music");
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }}
        className="absolute top-4 right-4 text-pink-600 hover:text-pink-800 text-2xl"
        aria-label="Toggle Music"
      >
        ❤️
      </button>

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
              alt="Saturn and their girlfriend"
              className="rounded-2xl w-full object-contain object-center"
              style={{ maxHeight: '500px' }}
            />
            <p className="mt-4 text-lg italic font-serif text-pink-600">
              {quote}
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <button
                className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
                onClick={handleCycleClick}
              >
                click again if you miss me extra
              </button>
              <a
                href="/"
                className="px-4 py-2 border border-pink-500 text-pink-500 rounded-xl hover:bg-pink-100"
              >
                go home
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
