"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibir o widget quando rolar 400px para baixo
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!siteConfig.whatsappHref) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-110 transition-transform duration-300 drop-shadow-xl"
        aria-label="Fale conosco no WhatsApp"
      >
        <img 
          src="/images/brand/widget_whatsapp.png" 
          alt="Agendar via WhatsApp"
          className="w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] object-contain"
        />
      </a>
    </div>
  );
}
