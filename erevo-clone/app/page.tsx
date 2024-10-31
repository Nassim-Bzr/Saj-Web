// app

"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import Navbar from "./components/navbar";
import Testimonials from "./components/Testimonials";
import Trainings from "./components/Trainings";
import Home from "./components/home";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from "./components/footer";

export default function Page() {
  useEffect(() => {
    // Ajoute le script du chatbot une fois le composant monté
    const script = document.createElement("script");
    script.src = "https://cdn.chatsimple.ai/chat-bot-loader.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyage du script si nécessaire
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <chat-bot platform_id="909e3b89-45ce-4bef-89b3-adede8f2b19d" 
            user_id="4a6ed246-8bed-477d-9fe6-6036f3084060" 
            chatbot_id="441096f8-51ef-4eac-b5b5-7a188a5af4e3">
            <a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">chatsimple</a>
          </chat-bot>
          `,
        }}
      />
    </>
  );
}
