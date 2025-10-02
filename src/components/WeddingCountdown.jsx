import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Calendar, MapPin, Sparkles, Star } from "lucide-react";

import topleft from "../assets/tl.svg";
import topright from "../assets/tr.svg";
import bottomright from "../assets/br.svg";
import bottomleft from "../assets/bl.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import midt from "../assets/mid_t.svg";
import midb from "../assets/mid_b.svg";

export default function WeddingCountdown() {
    const [moveUp, setMoveUp] = useState(false);
    const [showFireworks, setShowFireworks] = useState(true);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [pulseHeart, setPulseHeart] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMoveUp(true), 4000);
        const fireworksTimer = setTimeout(() => setShowFireworks(false), 8000);
        const heartTimer = setInterval(() => setPulseHeart(prev => !prev), 2000);

        const weddingDate = new Date("2025-10-31T11:00:00");
        const interval = setInterval(() => {
            const now = new Date();
            const diff = weddingDate - now;
            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearTimeout(fireworksTimer);
            clearInterval(interval);
            clearInterval(heartTimer);
        };
    }, []);

    return (
        <div className="h-[100vh] bg-gradient-to-br from-[#4b0012] via-[#e53429] to-[#4b0012] py-6 sm:py-10 px-3 sm:px-4 overflow-hidden relative flex flex-col">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`bg-particle-${i}`}
                        className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-30"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: -10,
                        }}
                        animate={{
                            y: window.innerHeight + 10,
                            x: Math.random() * window.innerWidth,
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Corners */}
            <motion.img
                src={topleft}
                alt="mandala"
                className="absolute top-3 left-3 max-h-40 sm:max-h-60 opacity-80"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
                src={topright}
                alt="mandala"
                className="absolute top-3 right-3 max-h-40 sm:max-h-60 opacity-80"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
                src={bottomleft}
                alt="mandala"
                className="absolute bottom-3 left-3 max-h-40 sm:max-h-60 opacity-80"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
                src={bottomright}
                alt="mandala"
                className="absolute bottom-3 right-3 max-h-40 sm:max-h-60 opacity-80"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <img src={left} alt="mandala" className="absolute top-1/2 -translate-y-1/2 min-h-50 opacity-80" style={{ left: "-3.75rem" }} />
            <img src={right} alt="mandala" className="absolute top-1/2 -translate-y-1/2 min-h-50 opacity-80" style={{ right: "-3.75rem" }} />
            <img src={midt} alt="mandala top" className="absolute -top-5 left-1/2 -translate-x-1/2 max-h-40 sm:max-h-60 opacity-80" />
            <img src={midb} alt="mandala bottom" className="absolute -bottom-5 left-1/2 -translate-x-1/2 max-h-40 sm:max-h-60 opacity-80" />

            {/* Enhanced Fireworks */}
            {showFireworks && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Main central firework burst */}
                    <div>
                        {/* Rocket trail with sparkles */}
                        <motion.div
                            initial={{ bottom: 0, left: '50%', opacity: 1 }}
                            animate={{
                                bottom: ["0%", "60%"],
                                opacity: [1, 0.8, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                            className="absolute w-3 h-24 rounded-full"
                            style={{
                                background: 'linear-gradient(to top, #FFD700, #FFF9C4, transparent)',
                                boxShadow: '0 0 30px rgba(255,215,0,1), 0 0 60px rgba(255,215,0,0.8)',
                                filter: 'blur(0.5px)',
                            }}
                        >
                            {/* Trailing sparkles */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={`trail-spark-${i}`}
                                    className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                                    initial={{ x: 0, y: 0 }}
                                    animate={{
                                        x: (Math.random() - 0.5) * 20,
                                        y: Math.random() * 30,
                                        opacity: [1, 0],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5 + i * 0.1,
                                        repeat: 2,
                                    }}
                                    style={{
                                        boxShadow: '0 0 10px rgba(255,255,255,0.9)',
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Multi-layered explosion */}
                        {/* Inner bright core */}
                        <motion.div
                            initial={{ bottom: "60%", left: '50%', opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0.9, 0],
                                scale: [0, 4, 3.5, 0],
                            }}
                            transition={{
                                duration: 1.2,
                                delay: 2,
                                ease: "easeOut",
                            }}
                            className="absolute w-8 h-8 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, white, #FFD700, transparent)',
                                boxShadow: '0 0 100px 50px rgba(255,215,0,1), 0 0 150px 75px rgba(255,255,255,0.8)',
                                filter: 'blur(1px)',
                            }}
                        />

                        {/* Main explosion particles with glitter effect */}
                        {[...Array(40)].map((_, p) => {
                            const angle = (p * 9) * (Math.PI / 180);
                            const distance = 120 + Math.random() * 80;
                            const endX = Math.cos(angle) * distance;
                            const endY = Math.sin(angle) * distance;
                            const sparkleDelay = Math.random() * 0.3;
                            const isGlitter = Math.random() > 0.5;

                            return (
                                <React.Fragment key={`big-${p}`}>
                                    {/* Main particle */}
                                    <motion.div
                                        initial={{ bottom: "60%", left: '50%', opacity: 0 }}
                                        animate={{
                                            x: [0, endX * 0.5, endX],
                                            y: [0, endY * 0.5 - 20, endY + 50],
                                            opacity: [0, 1, 0.8, 1, 0.6, 0.9, 0.4, 0.7, 0],
                                            scale: [0, 1.5, 1, 1.3, 0.8, 1.1, 0.5, 0.7, 0],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            delay: 2 + sparkleDelay,
                                            ease: "easeOut",
                                        }}
                                        className="absolute rounded-full"
                                        style={{
                                            width: isGlitter ? '2px' : '4px',
                                            height: isGlitter ? '2px' : '4px',
                                            background: isGlitter
                                                ? 'radial-gradient(circle, white, #FFD700)'
                                                : 'radial-gradient(circle, #FFD700, #FFA500)',
                                            boxShadow: `0 0 ${isGlitter ? '15px' : '25px'} ${isGlitter ? '5px' : '10px'} rgba(255,215,0,0.9), 0 0 40px 15px rgba(255,255,255,0.6)`,
                                            filter: 'brightness(1.8)',
                                        }}
                                    />

                                    {/* Glitter trail */}
                                    {isGlitter && [...Array(3)].map((_, g) => (
                                        <motion.div
                                            key={`glitter-${p}-${g}`}
                                            initial={{ bottom: "60%", left: '50%', opacity: 0 }}
                                            animate={{
                                                x: [0, endX * (0.3 + g * 0.2)],
                                                y: [0, endY * (0.3 + g * 0.2) + 30],
                                                opacity: [0, 0.8, 0],
                                                scale: [0, 0.5, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                delay: 2.2 + sparkleDelay + g * 0.1,
                                                ease: "easeOut",
                                            }}
                                            className="absolute w-0.5 h-0.5 bg-white rounded-full"
                                            style={{
                                                boxShadow: '0 0 8px 2px rgba(255,255,255,0.9)',
                                            }}
                                        />
                                    ))}
                                </React.Fragment>
                            );
                        })}

                        {/* Sparkle ring expansion */}
                        <motion.div
                            initial={{ bottom: "60%", left: '50%', opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 8, 12],
                            }}
                            transition={{
                                duration: 2,
                                delay: 2,
                                ease: "easeOut",
                            }}
                            className="absolute w-20 h-20 rounded-full border-2 border-yellow-300"
                            style={{
                                boxShadow: '0 0 50px 20px rgba(255,215,0,0.5), inset 0 0 50px 20px rgba(255,215,0,0.3)',
                                filter: 'blur(1px)',
                            }}
                        />
                    </div>

                    {/* Multiple smaller fireworks with enhanced effects */}
                    {[15, 25, 40, 60, 75, 85].map((xPos, i) => {
                        const delay = 1 + i * 0.6;
                        const yPos = 40 + Math.random() * 30;
                        const colors = ['#FFD700', '#FFA500', '#FF69B4', '#FFD700', '#FFF9C4', '#FFEB3B'];
                        const color = colors[i];

                        return (
                            <div key={`small-${i}`}>
                                {/* Small rocket with glow */}
                                <motion.div
                                    initial={{ bottom: 0, left: `${xPos}%`, opacity: 1 }}
                                    animate={{
                                        bottom: ["0%", `${yPos}%`],
                                        opacity: [1, 0.7, 0]
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: delay,
                                        ease: "easeOut",
                                    }}
                                    className="absolute w-2 h-16 rounded-full"
                                    style={{
                                        background: `linear-gradient(to top, ${color}, transparent)`,
                                        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
                                    }}
                                />

                                {/* Burst particles with varied sizes */}
                                {[...Array(20)].map((_, p) => {
                                    const angle = (p * 18) * (Math.PI / 180);
                                    const distance = 40 + Math.random() * 35;
                                    const endX = Math.cos(angle) * distance;
                                    const endY = Math.sin(angle) * distance;
                                    const size = 1 + Math.random() * 2;

                                    return (
                                        <motion.div
                                            key={`small-${i}-${p}`}
                                            initial={{ bottom: `${yPos}%`, left: `${xPos}%`, opacity: 0 }}
                                            animate={{
                                                x: [0, endX * 0.6, endX],
                                                y: [0, endY * 0.6 - 10, endY + 25],
                                                opacity: [0, 1, 0.7, 0.9, 0.5, 0.8, 0],
                                                scale: [0, 1.2, 0.8, 1, 0.5, 0.7, 0],
                                            }}
                                            transition={{
                                                duration: 1.8,
                                                delay: delay + 1.2 + Math.random() * 0.3,
                                                ease: "easeOut",
                                            }}
                                            className="absolute rounded-full"
                                            style={{
                                                width: `${size}px`,
                                                height: `${size}px`,
                                                background: `radial-gradient(circle, white, ${color})`,
                                                boxShadow: `0 0 ${15 * size}px ${5 * size}px ${color}, 0 0 ${25 * size}px ${10 * size}px rgba(255,255,255,0.5)`,
                                                filter: 'brightness(1.5)',
                                            }}
                                        />
                                    );
                                })}

                                {/* Flash effect */}
                                <motion.div
                                    initial={{ bottom: `${yPos}%`, left: `${xPos}%`, opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: [0, 0.9, 0.6, 0],
                                        scale: [0, 2.5, 2, 0],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: delay + 1.2,
                                        ease: "easeOut",
                                    }}
                                    className="absolute w-12 h-12 rounded-full"
                                    style={{
                                        background: `radial-gradient(circle, white, ${color}, transparent)`,
                                        boxShadow: `0 0 60px 30px ${color}`,
                                        filter: 'blur(2px)',
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Content */}
            <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden mt-4">
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 1.3, y: 100 }}
                    animate={{
                        opacity: 1,
                        scale: moveUp ? 0.95 : 1,
                        y: moveUp ? -120 : 0,
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center flex-grow text-center px-4"
                >
                    <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;700&family=Tangerine:wght@400;700&display=swap');
                        
                        @keyframes shimmer {
                            0% { background-position: -1000px 0; }
                            100% { background-position: 1000px 0; }
                        }
                        
                        @keyframes pulse-glow {
                            0%, 100% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); }
                            50% { filter: drop-shadow(0 0 40px rgba(255, 215, 0, 1)); }
                        }
                        
                        .shimmer-text {
                            background: linear-gradient(90deg,
                                #ffd700 0%,
                                #ffed4e 20%,
                                #fff9c4 35%,
                                #ffffff 50%,
                                #fff9c4 65%,
                                #ffed4e 80%,
                                #ffd700 100%
                            );
                            background-size: 1000px 100%;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: shimmer 3s linear infinite;
                            filter: drop-shadow(0 2px 8px rgba(255, 215, 0, 0.5));
                        }
                        
                        .elegant-text {
                            color: #FFD700;
                            text-shadow: 
                                0 2px 4px rgba(0,0,0,0.3),
                                0 4px 8px rgba(255,215,0,0.3),
                                0 0 20px rgba(255,215,0,0.5);
                            animation: pulse-glow 3s ease-in-out infinite;
                        }
                        
                        .timer-box {
                            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
                            box-shadow: 
                                0 10px 30px rgba(255, 215, 0, 0.4),
                                inset 0 2px 5px rgba(255, 255, 255, 0.5),
                                inset 0 -2px 5px rgba(0, 0, 0, 0.2);
                            transform-style: preserve-3d;
                            position: relative;
                        }
                        
                        .timer-box::before {
                            content: '';
                            position: absolute;
                            inset: -2px;
                            background: linear-gradient(45deg, #FFD700, #FFF9C4, #FFD700);
                            border-radius: inherit;
                            z-index: -1;
                            opacity: 0.7;
                            animation: shimmer 3s linear infinite;
                        }
                    `}</style>

                    {/* Initial stacked layout */}
                    {!moveUp && (
                        <>
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="shimmer-text text-5xl p-5 sm:text-6xl md:text-8xl font-bold drop-shadow-2xl mb-4"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                Sriharshini
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.3 }}
                                className="my-6 flex items-center justify-center gap-4"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <Star className="w-8 h-8 text-yellow-400" />
                                </motion.div>

                                <div className="flex items-center gap-3">
                                    <svg width="80" height="2" viewBox="0 0 100 2" fill="none">
                                        <path d="M0 1 H100" stroke="url(#gradient)" strokeWidth="2" />
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stopColor="#FFD700" />
                                                <stop offset="50%" stopColor="#FFF9C4" />
                                                <stop offset="100%" stopColor="#FFD700" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className="text-3xl sm:text-4xl md:text-5xl elegant-text font-bold" style={{ fontFamily: "'Tangerine', cursive" }}>
                                        Weds
                                    </span>
                                    <svg width="80" height="2" viewBox="0 0 100 2" fill="none">
                                        <path d="M0 1 H100" stroke="url(#gradient2)" strokeWidth="2" />
                                        <defs>
                                            <linearGradient id="gradient2">
                                                <stop offset="0%" stopColor="#FFD700" />
                                                <stop offset="50%" stopColor="#FFF9C4" />
                                                <stop offset="100%" stopColor="#FFD700" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <Star className="w-8 h-8 text-yellow-400" />
                                </motion.div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1.5 }}
                                className="shimmer-text text-5xl p-5 sm:text-6xl md:text-8xl font-bold drop-shadow-2xl mt-4"
                                style={{ fontFamily: "'Great Vibes', cursive" }}
                            >
                                Srinivasa Jagannath
                            </motion.h1>
                        </>
                    )}

                    {/* After moveUp → enhanced layout */}
                    {moveUp && (
                        <>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 mt-20">
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="shimmer-text text-4xl p-5 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
                                    style={{ fontFamily: "'Great Vibes', cursive" }}
                                >
                                    Sriharshini
                                </motion.h1>

                                <span
                                    className="text-2xl sm:text-3xl md:text-4xl elegant-text font-bold flex items-center gap-3"
                                    style={{ fontFamily: "'Tangerine', cursive" }}
                                >
                                    {/* Shared gradients (hidden SVG defs) */}
                        
                                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
                                    {/* Text */}
                                    Weds
                                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
                                </span>

                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="shimmer-text text-4xl p-5 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
                                    style={{ fontFamily: "'Great Vibes', cursive" }}
                                >
                                    Srinivasa Jagannath
                                </motion.h1>
                            </div>

                            {/* We are tying the knot with icon */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="mb-8 flex items-center gap-3"
                            >
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
                                <p
                                    className="elegant-text text-2xl sm:text-3xl md:text-4xl font-semibold italic"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    We are tying the knot
                                </p>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
                            </motion.div>

                            {/* Enhanced Countdown */}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 2, delay: 1 }}
                                className="mb-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6"
                            >
                                {[
                                    { label: "Days", value: timeLeft.days, icon: "📅" },
                                    { label: "Hours", value: timeLeft.hours, icon: "⏰" },
                                    { label: "Minutes", value: timeLeft.minutes, icon: "⏱️" },
                                    { label: "Seconds", value: timeLeft.seconds, icon: "⏳" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2 + i * 0.8 }}
                                        whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                                        className="timer-box relative p-4 sm:p-6 rounded-2xl min-w-[100px] sm:min-w-[120px] transform transition-all duration-300 hover:shadow-2xl"
                                    >
                                        <motion.p
                                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                            animate={{ scale: [1, 1.02, 1] }}
                                            transition={{ duration: 6, repeat: Infinity, delay: i * 0.25 }}
                                        >
                                            {String(item.value).padStart(2, '0')}
                                        </motion.p>
                                        <span className="text-sm sm:text-base md:text-lg font-semibold text-white/90 uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {item.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>


                            {/* Save the Date with enhanced styling */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 2 }}
                                className="text-center space-y-6"
                            >
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <Calendar className="w-7 h-7 text-yellow-400" />
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl elegant-text font-bold" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                                        Save the Date
                                    </h3>
                                    <Calendar className="w-7 h-7 text-yellow-400" />
                                </div>

                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent p-4 rounded-xl backdrop-blur-sm"
                                >
                                    <p className="text-3xl sm:text-4xl md:text-5xl elegant-text font-bold mb-3" style={{ fontFamily: "'Tangerine', cursive" }}>
                                        31st October 2025
                                    </p>
                                </motion.div>

                                <div className="flex items-center justify-center gap-3">
                                    <MapPin className="w-6 h-6 text-yellow-400" />
                                    <p className="text-xl sm:text-2xl md:text-3xl elegant-text font-semibold" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                        Sai Gardens, Mallapur, Hyderabad
                                    </p>
                                    <MapPin className="w-6 h-6 text-yellow-400" />
                                </div>

                                {/* Decorative bottom element */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5 }}
                                    className="mt-8 flex items-center justify-center gap-4"
                                >
                                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-400"></div>
                                    {/* <Heart className="w-6 h-6 text-red-400" fill="currentColor" /> */}
                                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-400"></div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}

                </motion.div>
            </div>
        </div>
    );
}