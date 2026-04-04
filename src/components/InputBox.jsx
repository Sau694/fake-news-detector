import { useState } from "react";
import { checkNews } from "../services/api";

export default function InputBox({ setResult }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const res = await checkNews(text);

      console.log("Backend Response:", res.data); // 🔥 IMPORTANT DEBUG

      setResult(res.data);
    } catch (err) {
      console.log("API ERROR:", err.response || err.message);
      alert("Server Error - check console");
    }

    setLoading(false);
  };

  return (
    <div className="inputBox">
      <textarea
        className="textarea"
        placeholder="Paste news article here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn" onClick={handleCheck}>
        {loading ? "Analyzing..." : "Analyze News"}
      </button>
    </div>
  );
}


