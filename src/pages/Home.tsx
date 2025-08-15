import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Code, Database, BarChart3, Zap, Sparkles, Target, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home-section" className="section-transition relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-lavender/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-ultra-violet/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-english-violet/10 rounded-full blur-xl"
        />

        {/* Abstract Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-lavender/20 rounded-lg"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-ultra-violet/20 rounded-full"
        />

        {/* Floating Lines */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-10 w-20 h-px bg-gradient-to-r from-transparent via-lavender/30 to-transparent"
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-10 w-16 h-px bg-gradient-to-r from-transparent via-ultra-violet/30 to-transparent"
        />

        {/* Subtle Grid Pattern */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(188,126,222,0.1)_1px,transparent_0)] bg-[length:20px_20px]"
        />

        {/* Floating Dots */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-lavender/40 rounded-full"
        />
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-ultra-violet/40 rounded-full"
        />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-lavender/10 to-ultra-violet/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/2 w-32 h-32 bg-gradient-to-r from-ultra-violet/10 to-lavender/10 rounded-full blur-3xl"
        />

        {/* Additional Floating Elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-lavender/30 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/5 w-2.5 h-2.5 bg-ultra-violet/25 rounded-full"
        />

        {/* Additional Tech-themed Floating Elements */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 left-1/5 w-2 h-2 bg-lavender/25 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -12, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 right-1/4 w-1.5 h-1.5 bg-ultra-violet/30 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 22, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 left-1/8 w-3.5 h-3.5 bg-english-violet/20 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 31,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/8 w-2.5 h-2.5 bg-lavender/35 rounded-full"
        />

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/3 text-lavender/20"
        >
          <Code className="w-6 h-6" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/6 text-ultra-violet/20"
        >
          <Database className="w-5 h-5" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/6 text-english-violet/20"
        >
          <BarChart3 className="w-4 h-4" />
        </motion.div>

        {/* Additional Tech Icons */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 33,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 text-lavender/15"
        >
          <Zap className="w-3 h-3" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 18, 0],
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/5 text-ultra-violet/18"
        >
          <Target className="w-2.5 h-2.5" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 28, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 37,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/5 text-english-violet/12"
        >
          <Lightbulb className="w-2 h-2" />
        </motion.div>

        {/* More Floating Elements */}
        <motion.div
          animate={{
            y: [0, -22, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 39,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/5 right-1/4 w-2 h-2 bg-lavender/25 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -16, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 41,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/5 left-1/3 w-1.5 h-1.5 bg-ultra-violet/20 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 24, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 43,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 left-1/6 w-2.5 h-2.5 bg-english-violet/18 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 right-1/8 w-1.5 h-1.5 bg-lavender/22 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 47,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 right-1/6 w-2 h-2 bg-ultra-violet/16 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -14, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 49,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/8 w-1.5 h-1.5 bg-english-violet/14 rounded-full"
        />

        {/* Additional Tech Icons */}
        <motion.div
          animate={{
            y: [0, 26, 0],
            opacity: [0.06, 0.20, 0.06],
          }}
          transition={{
            duration: 51,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/5 text-lavender/10"
        >
          <Sparkles className="w-2 h-2" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 22, 0],
            opacity: [0.08, 0.24, 0.08],
          }}
          transition={{
            duration: 53,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/7 text-ultra-violet/12"
        >
          <Code className="w-1.5 h-1.5" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/7 text-english-violet/8"
        >
          <Database className="w-1 h-1" />
        </motion.div>

        {/* More Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 57,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/6 w-8 h-8 border border-lavender/15 rounded-full"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 59,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/6 w-6 h-6 border border-ultra-violet/12 rounded-lg"
        />

        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 61,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/8 w-4 h-4 border border-english-violet/10 rounded-full"
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="container-custom py-32 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Picture Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center lg:justify-center"
            >
              <div className="relative">
                {/* Oval Profile Picture - Reduced Size */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="w-64 h-80 md:w-72 md:h-88 rounded-[50%] border-4 border-lavender/30 overflow-hidden">
                    <img 
                      src="/pfp.jpeg" 
                      alt="ANISHTA M" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Rotating accent dot */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-lavender rounded-full"
                  />
                  
                  {/* Additional decorative elements around profile */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-ultra-violet/40 rounded-full"
                  />
                  
                  <motion.div
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -right-6 w-4 h-4 bg-english-violet/30 rounded-full"
                  />

                  {/* Additional tech-themed decorative elements */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 w-3 h-3 bg-lavender/50 rounded-full"
                  />

                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-8 w-2 h-2 bg-ultra-violet/40 rounded-full"
                  />

                  <motion.div
                    animate={{ 
                      x: [0, 6, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -right-8 w-2.5 h-2.5 bg-english-violet/35 rounded-full"
                  />
                </motion.div>

                {/* Floating skill indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-8 -left-8 glass-effect px-3 py-2 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-lavender" />
                    <span className="text-xs text-gray-300">React</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute -bottom-8 -right-8 glass-effect px-3 py-2 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-ultra-violet" />
                    <span className="text-xs text-gray-300">Python</span>
                  </div>
                </motion.div>

                {/* Additional tech skill indicators */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute top-1/3 -left-12 glass-effect px-3 py-2 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-english-violet" />
                    <span className="text-xs text-gray-300">Analytics</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute bottom-1/3 -right-12 glass-effect px-3 py-2 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-lavender" />
                    <span className="text-xs text-gray-300">Power BI</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                ANISHTA M
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-6 font-light whitespace-nowrap"
              >
                Data-Driven Developer | Problem Solver | Detail-Oriented
              </motion.p>

              {/* Description with animated elements */}
              <div className="relative mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="text-lg text-gray-400 leading-relaxed max-w-lg lg:max-w-none"
                >
                  I transform complex data into actionable insights and build elegant solutions 
                  that drive business value. Let's create something amazing together.
                </motion.p>
                
                {/* Animated elements near description */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 text-lavender/40"
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-2 -left-6 text-ultra-violet/30"
                >
                  <Target className="w-4 h-4" />
                </motion.div>
                
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                    opacity: [0.25, 0.55, 0.25],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 -right-8 text-english-violet/35"
                >
                  <Lightbulb className="w-3 h-3" />
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <button
                  onClick={() => {
                    const projectsSection = document.getElementById('projects-section');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="button-primary flex items-center justify-center gap-2 group"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    const aboutSection = document.getElementById('about-section');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="button-secondary flex items-center justify-center gap-2 group"
                >
                  About Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex justify-center lg:justify-start gap-6"
              >
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Anishtaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-eerie-black border border-english-violet rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-lavender transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://in.linkedin.com/in/anishta-fernando-704642255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-eerie-black border border-english-violet rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-lavender transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-eerie-black border border-english-violet rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-lavender transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Bottom Center */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="absolute bottom-8 left-0 right-0 z-20"
          >
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-gray-400"
              >
                <span className="text-sm">Scroll to explore</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
    </section>
  );
};

export default Home;
