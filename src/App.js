import React, { useState } from "react";
import { motion } from "framer-motion";
import InputBox from "./components/InputBox";
import ResultBox from "./components/ResultBox";
import "./App.css";

function App() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState("");
 

  const checkNews = async () => {
    if (!news.trim()) {
      alert("Enter news!");
      return;
    }

    try {
      const response = await fetch("https://fake-news-backend.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: news })
      });

      const data = await response.json();
      console.log(data);

      setResult(data.result);
      

    } catch (error) {
      console.log(error);
      setResult("Server Error ❌");
      
    }
  };

  return (
    <div className="page">

      {/* FLOATING BACKGROUND IMAGES */}
      <div className="bg-layer">
        <img src="/news1.jpg"alt="news image1"className="float img1" />
        <img src="/news2.jpg"alt="news image2"className="float img2" />
        <img src="/news3.jpg"alt="news imag3"className="float img3" />
      </div>

      {/* HERO SECTION */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">
          Fake News <span>Detector</span>
        </h1>
        <p className="subtitle">
          AI-powered system that detects truth in seconds ⚡
        </p>
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        className="glass"
        whileHover={{ scale: 1.02 }}
      >
        <InputBox setResult={setResult} />
        <ResultBox result={result} />
      </motion.div>

    </div>
  );
}

export default App;
