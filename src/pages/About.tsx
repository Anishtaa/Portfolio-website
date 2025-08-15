import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Code, Database, BarChart3, Zap, Target, Lightbulb, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Javascript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Power BI', level: 85 },
    { name: 'SQL', level: 75 },
    { name: 'CSS', level: 90 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 80 },
  ];

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

  const skillCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about-section" className="section-transition">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-16 w-28 h-28 bg-lavender/8 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-48 right-24 w-20 h-20 bg-ultra-violet/6 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-1/3 w-16 h-16 bg-english-violet/5 rounded-full blur-xl"
        />

        {/* Abstract Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-14 h-14 border border-lavender/15 rounded-lg"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/4 w-10 h-10 border border-ultra-violet/12 rounded-full"
        />

        {/* Floating Lines */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-12 w-16 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent"
        />
        
        <motion.div
          animate={{
            y: [0, 35, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-12 w-12 h-px bg-gradient-to-r from-transparent via-ultra-violet/18 to-transparent"
        />

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/6 text-lavender/15"
        >
          <Code className="w-4 h-4" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 18, 0],
            opacity: [0.08, 0.25, 0.08],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/6 text-ultra-violet/12"
        >
          <Database className="w-3 h-3" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -12, 0],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/8 text-english-violet/10"
        >
          <BarChart3 className="w-2.5 h-2.5" />
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 left-1/5 w-2 h-2 bg-lavender/20 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 16, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 right-1/5 w-1.5 h-1.5 bg-ultra-violet/15 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 left-1/8 w-3 h-3 bg-english-violet/18 rounded-full"
        />

        {/* More Floating Elements */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 46,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/5 right-1/7 w-2 h-2 bg-lavender/22 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -18, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/5 left-1/7 w-1.5 h-1.5 bg-ultra-violet/16 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 28, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 right-1/8 w-2.5 h-2.5 bg-english-violet/14 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 24, 0],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 52,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 left-1/7 w-1.5 h-1.5 bg-lavender/20 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 54,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 right-1/7 w-2 h-2 bg-ultra-violet/18 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -16, 0],
            opacity: [0.12, 0.32, 0.12],
          }}
          transition={{
            duration: 56,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/7 w-1.5 h-1.5 bg-english-violet/12 rounded-full"
        />

        {/* Additional Tech Icons */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.08, 0.24, 0.08],
          }}
          transition={{
            duration: 58,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/7 text-lavender/8"
        >
          <Zap className="w-2 h-2" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 26, 0],
            opacity: [0.10, 0.28, 0.10],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/8 text-ultra-violet/10"
        >
          <Target className="w-1.5 h-1.5" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -24, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 62,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/7 text-english-violet/6"
        >
          <Lightbulb className="w-1 h-1" />
        </motion.div>

        {/* More Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 64,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/7 w-7 h-7 border border-lavender/12 rounded-lg"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.85, 1],
          }}
          transition={{
            duration: 66,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/7 w-5 h-5 border border-ultra-violet/10 rounded-full"
        />

        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 68,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/7 w-3 h-3 border border-english-violet/8 rounded-full"
        />

        {/* Additional Floating Lines */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.08, 0.25, 0.08],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/8 w-8 h-px bg-gradient-to-r from-transparent via-lavender/14 to-transparent"
        />
        
        <motion.div
          animate={{
            y: [0, 22, 0],
            opacity: [0.06, 0.20, 0.06],
          }}
          transition={{
            duration: 72,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/8 w-6 h-px bg-gradient-to-r from-transparent via-ultra-violet/12 to-transparent"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container-custom py-32 relative z-10"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Data-driven developer with a passion for creating elegant solutions and solving complex problems. 
            I combine technical expertise with analytical thinking to deliver impactful results.
          </p>
        </motion.section>

        {/* Bio Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a detail-oriented developer who thrives on turning data into actionable insights. 
                  With expertise in both frontend and backend technologies, I create seamless user experiences 
                  that drive business value.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My approach combines analytical thinking with creative problem-solving, ensuring that 
                  every solution is not only functional but also intuitive and scalable.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-lavender w-5 h-5" />
                  <span className="text-gray-300">anishtafernando13@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-lavender w-5 h-5" />
                  <span className="text-gray-300">+91 6382176771</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-lavender w-5 h-5" />
                  <span className="text-gray-300">Chennai, Tamilnadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-lavender to-ultra-violet h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </section>
  );
};

export default About;
