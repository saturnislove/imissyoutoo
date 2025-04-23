import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const loveQuotes = [
  "I would rather spend one lifetime with you than face all the ages of this world alone.",
  "Whatever our souls are made of, yours and mine are the same.",
  "You are my sun, my moon, and all of my stars.",
  "In your smile, I see something more beautiful than the stars.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "Every love story is beautiful, but ours is my favorite.",
  "If I know what love is, it is because of you.",
  "I fell in love with you because of the million things you never knew you were doing.",
  "You are the poem I never knew how to write and this life is the story I’ve always wanted to tell.",
  "I choose you. And I’ll choose you, over and over and over. Without pause, without doubt, in a heartbeat."
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

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-4 relative">
      <audio ref={audioRef} src="/love.mp3" loop />
      
      {/* Music toggle */}
      <button 
        className="absolute top-4 right-4 text-2xl hover:scale-110 transition"
        onClick={toggleMusic}
        aria-label="Toggle music"
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
          <div className="max-w-md bg-white rounded-2xl shadow-xl p-4">
            <img 
              src={image} 
              alt="Saturn and their girlfriend" 
              className="rounded-2xl w-full h-80 object-cover object-center"
            />
            <p className="mt-4 text-lg italic font-serif text-pink-700">
              {quote}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
              onClick={handleCycleClick}
            >
              click again if you miss me extra
            </button>
            <div className="mt-4">
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
