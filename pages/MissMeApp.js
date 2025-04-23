import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const loveQuotes = [
  "I would rather spend one lifetime with you than face all the ages of this world alone.",
  "Whatever our souls are made of, yours and mine are the same.",
  "You are my sun, my moon, and all of my stars.",
  "In your smile, I see something more beautiful than the stars.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "Every moment with you is a dream I don’t want to wake up from.",
  "When I’m with you, time stands still and everything feels right.",
  "You are the missing piece I never knew I needed.",
  "I fall in love with you more deeply every single day.",
  "Being with you feels like home."
];

const loveImages = Array.from({ length: 25 }, (_, i) => `/pictures/${i + 1}.jpg`);

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
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-pink-100 p-4">
      {/* Music player top right */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <FaHeart className="text-pink-500" />
        <audio controls src="/love.mp3" className="w-32" />
      </div>

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
          <div className="max-w-md bg-white rounded-2xl shadow-xl p-4">
            <img
              src={image}
              alt="Saturn and their girlfriend"
              className="rounded-2xl w-full h-80 object-cover object-center"
            />
            <p className="mt-4 text-lg italic font-serif text-pink-700">
              {quote}
            </p>
            <div className="mt-4 flex flex-col gap-2 items-center">
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
