"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    const resumeBlurElement = document.getElementById("resume-blur");
    resumeBlurElement.classList.add("animate");

    setTimeout(() => {
      setShowResume(true);
    }, 600);
  };

  const handleModalClose = () => {
    setShowResume(false);

    const resumeBlurElement = document.getElementById("resume-blur");
    resumeBlurElement.classList.remove("animate");
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">

        {/* Left Side: Avatar + Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 place-self-start text-left"
        >
          <motion.div
            animate={{
              y: [0, -20, 0], // Smooth floating animation
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] object-cover"
              width={300}
              height={300}
            />
          </motion.div>

          {/* Buttons Below Avatar */}
          <div className="mt-4">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Middle Section: Resume (Blur + Click Effect) */}
        <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="col-span-1 place-self-center cursor-pointer"
  id="resume-blur"
  onClick={handleResumeClick}
>
  <div
    className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] bg-cover bg-center bg-no-repeat opacity-95 rounded-full relative -top-8"
    style={{
      backgroundImage: `url('/images/ResumePreview.png')`,
      WebkitMask: `radial-gradient(circle, rgba(255, 255, 255, 1) 40%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 1) 100%)`,
      mask: `radial-gradient(circle, rgba(255, 255, 255, 1) 40%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 1) 100%)`,
      filter: `blur(2px)`
    }}
  />
</motion.div>



        {/* Right Side: Animated Titles + Name */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 place-self-start text-right"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi! I&apos;m Melanth{" "}
            </span>
          </h1>
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Data Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white text-3xl font-bold"
            />
          </motion.div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
        </div>
      </div>

      {/* Modal for Full Resume */}
      {showResume && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={handleModalClose}
        >
          <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="/EngineeringResumes.pdf"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
