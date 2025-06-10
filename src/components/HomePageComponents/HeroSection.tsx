"use client"

import { useRef } from "react"
import "@/app/globals.css";
import Lottie from "lottie-react"
import rotatingPlanetAnimation from "/public/lottie/rotating-planet.json"

export default function DigitalExportHero() {
  const lottieRef = useRef<any>(null)

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center py-20 px-4 overflow-hidden relative">
      <div className="container mx-auto max-w-[70em]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight">
                Digital Export
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
                With digital export, we help businesses sell more internationally through AI, cross-border eCommerce,
                international marketplaces, multilingual social selling, and local web marketing!
              </p>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            {/* Background decorative circles */}
            <div className="absolute inset-0">
              <img
                src="https://www.towebornottoweb.com/wp-content/uploads/2022/09/circle-1.png"
                alt=""
                width={400}
                height={400}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
              />
            </div>

            {/* Lottie Globe Animation */}
            <div className="relative w-[100vw] flex items-center justify-center">
              <Lottie
                lottieRef={lottieRef}
                animationData={rotatingPlanetAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "800px", height: "100%" }}
                className="drop-shadow-2xl"
              />
            </div>

            {/* Dotted path and airplane */}
            <div className="absolute inset-0 pointer-events-none top-[38em] left-[-51em]">
              <img
                src="https://www.towebornottoweb.com/wp-content/uploads/2022/09/path-1-e1663003230110.png"
                alt=""
                width={630}
                height={200}
                className="absolute bottom-1/4 left-1/4 opacity-80 animate-fade-in"
                style={{ animationDelay: "1.5s" }}
              />

              {/* Follow the plane text annotation */}
              <div
                className="absolute bottom-2/4 left-1/3 transform translate-x-[-93px] translate-y-[-115px] animate-fade-in"
                style={{ animationDelay: "2s" }}
              >
                <p className="follow text-[12px] text-red-400 leading-tight text-shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
                  Follow the plane
                  <br />
                  to see what we do
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-20 left-10 w-3 h-3 bg-slate-400 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/3 left-5 w-2 h-2 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .font-handwriting {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-weight: 400;
        }
      `}</style>
    </section>
  )
}
