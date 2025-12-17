'use client'
import { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";


export default function Home() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  // const ai = new GoogleGenAI({});
  const ai = new GoogleGenAI({ apiKey: "AIzaSyAb1I_s0_akBY8PpOlGZg_EqyAThHPDnbw" });


  // useEffect(() => {
    
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (!message) return;
    setloading(true);
    const funtion = async () => {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
      });
      console.log(response.text);
      setData(response.text);
      
    //   const data = await response.json();
    // setData(data.reply);
    setloading(false);
    }
    
    funtion();
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white-50 font-sans dark:bg-black">
      {loading ? <p>Loading...</p> : <p>{data}</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Enter your message" />
        <button>Send</button>
      </form>
    </div>
  );
}
