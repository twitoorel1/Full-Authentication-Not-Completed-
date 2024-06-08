"use client";
import React, { useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function BackToTop() {
  const screenUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const color: any = document.getElementsByClassName("scrollToTop")[0];
      if (color) {
        window.scrollY > 100 ? (color.style.display = "flex") : (color.style.display = "none");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollToTop" onClick={screenUp}>
      <span className="arrow">
        <ArrowCircleUpIcon />
        {/* <i className="ri-arrow-up-s-fill text-xl"></i> */}
      </span>
    </div>
  );
}
