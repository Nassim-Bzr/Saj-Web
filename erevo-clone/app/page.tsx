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
 
    </>
  );
}
