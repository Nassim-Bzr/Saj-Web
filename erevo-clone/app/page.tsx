// app

"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import Navbar from "./components/navbar";
import Testimonials from "./components/Testimonials";
import Home from "./components/home";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from "./components/footer";

export default function Page() {


  return (
    <>
      <Navbar/>
      <Home />
      <Footer />
 
    </>
  );
}
