import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search, Filter, Code, Database, BarChart3, Zap, Target, Lightbulb, Sparkles } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects: React.FC = () => {
  const [projects] = useState(projectsData.projects);
  const [filteredProjects, setFilteredProjects] = useState(projectsData.projects);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = projectsData.categories;

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [projects, selectedCategory, searchTerm]);

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

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: index * 0.1 }}
      variants={itemVariants}
      className="glass-effect rounded-2xl overflow-hidden card-hover group"
    >
      <div className="relative h-48 bg-gradient-to-br from-eerie-black to-english-violet overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          {project.featured && (
            <span className="bg-lavender text-black px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-english-violet text-white px-3 py-1 rounded-full text-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-white/20 font-bold">P</div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lavender transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="bg-english-violet/20 text-lavender px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-lavender transition-colors"
          >
            <Github size={18} />
            <span className="text-sm">Code</span>
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-lavender transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects-section" className="section-transition overflow-visible">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-28 left-20 w-24 h-24 bg-lavender/7 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 45, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-52 right-28 w-18 h-18 bg-ultra-violet/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-36 left-1/4 w-14 h-14 bg-english-violet/4 rounded-full blur-xl"
        />

        {/* Abstract Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-12 h-12 border border-lavender/12 rounded-lg"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.85, 1],
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/3 w-8 h-8 border border-ultra-violet/10 rounded-full"
        />

        {/* Floating Lines */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-16 w-14 h-px bg-gradient-to-r from-transparent via-lavender/18 to-transparent"
        />
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.12, 0.35, 0.12],
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-16 w-10 h-px bg-gradient-to-r from-transparent via-ultra-violet/15 to-transparent"
        />

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/5 text-lavender/12"
        >
          <Code className="w-3 h-3" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 16, 0],
            opacity: [0.06, 0.20, 0.06],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/5 text-ultra-violet/10"
        >
          <Database className="w-2.5 h-2.5" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -10, 0],
            opacity: [0.10, 0.25, 0.10],
          }}
          transition={{
            duration: 31,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/6 text-english-violet/8"
        >
          <BarChart3 className="w-2 h-2" />
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 left-1/4 w-1.5 h-1.5 bg-lavender/18 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 14, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 33,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 right-1/4 w-1 h-1 bg-ultra-violet/12 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 18, 0],
            opacity: [0.08, 0.30, 0.08],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 left-1/6 w-2.5 h-2.5 bg-english-violet/15 rounded-full"
        />

        {/* More Floating Elements */}
        <motion.div
          animate={{
            y: [0, -26, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/5 right-1/6 w-2 h-2 bg-lavender/20 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 44,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/5 left-1/6 w-1.5 h-1.5 bg-ultra-violet/14 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 46,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 right-1/7 w-2.5 h-2.5 bg-english-violet/12 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 28, 0],
            y: [0, -16, 0],
          }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 left-1/7 w-1.5 h-1.5 bg-lavender/18 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, -22, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 right-1/7 w-2 h-2 bg-ultra-violet/16 rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -18, 0],
            opacity: [0.10, 0.28, 0.10],
          }}
          transition={{
            duration: 52,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/7 w-1.5 h-1.5 bg-english-violet/10 rounded-full"
        />

        {/* Additional Tech Icons */}
        <motion.div
          animate={{
            y: [0, 32, 0],
            opacity: [0.06, 0.22, 0.06],
          }}
          transition={{
            duration: 54,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/7 text-lavender/6"
        >
          <Zap className="w-2 h-2" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 30, 0],
            opacity: [0.08, 0.26, 0.08],
          }}
          transition={{
            duration: 56,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/8 text-ultra-violet/8"
        >
          <Target className="w-1.5 h-1.5" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -26, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 58,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/7 text-english-violet/4"
        >
          <Lightbulb className="w-1 h-1" />
        </motion.div>

        {/* More Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/6 w-6 h-6 border border-lavender/10 rounded-lg"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.88, 1],
          }}
          transition={{
            duration: 62,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/6 w-4 h-4 border border-ultra-violet/8 rounded-full"
        />

        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 64,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/7 w-3 h-3 border border-english-violet/6 rounded-full"
        />

        {/* Additional Floating Lines */}
        <motion.div
          animate={{
            y: [0, -17, 0],
            opacity: [0.06, 0.22, 0.06],
          }}
          transition={{
            duration: 66,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/7 w-7 h-px bg-gradient-to-r from-transparent via-lavender/12 to-transparent"
        />
        
        <motion.div
          animate={{
            y: [0, 24, 0],
            opacity: [0.05, 0.18, 0.05],
          }}
          transition={{
            duration: 68,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/7 w-5 h-px bg-gradient-to-r from-transparent via-ultra-violet/10 to-transparent"
        />

        {/* More Floating Particles */}
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 left-1/5 w-10 h-10 bg-lavender/3 rounded-full blur-lg"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 72,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-48 right-1/5 w-8 h-8 bg-ultra-violet/2 rounded-full blur-lg"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="container-custom py-32 pb-48 relative z-10"
      >
        {/* Header */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants} 
          className="text-center mb-20 pb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-16 leading-tight pb-8">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my work showcasing my skills in development, data analysis, and problem-solving.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants} 
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-lavender mb-2">{projects.length}</div>
              <div className="text-gray-300">Total Projects</div>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-lavender mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-300">Featured</div>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-lavender mb-2">{categories.length}</div>
              <div className="text-gray-300">Categories</div>
            </div>
          </div>
        </motion.section>

        {/* Filters */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants} 
          className="mb-12"
        >
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-eerie-black border border-english-violet rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lavender"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-eerie-black border border-english-violet rounded-lg text-white focus:outline-none focus:border-lavender"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants}
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-600 mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </motion.section>
      </motion.div>
    </section>
  );
};

export default Projects;
