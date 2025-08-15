import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Anishtaa', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://in.linkedin.com/in/anishta-fernando-704642255', color: 'hover:text-blue-400' },
  ];

  return (
    <section id="contact-section" className="section-transition">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container-custom py-32"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Form - Full Width (Slightly Bigger) */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="glass-effect p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Send a Message</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2"
              >
                <CheckCircle className="text-green-400 w-4 h-4" />
                <span className="text-green-400 text-sm">Message sent successfully!</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2"
              >
                <AlertCircle className="text-red-400 w-4 h-4" />
                <span className="text-red-400 text-sm">Failed to send message. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-eerie-black border border-english-violet rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lavender text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-eerie-black border border-english-violet rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lavender text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-eerie-black border border-english-violet rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lavender text-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-eerie-black border border-english-violet rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lavender resize-none text-sm"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center gap-2 py-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info and Social Links - Parallel (Larger) */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-lavender w-6 h-6" />
                  <span className="text-gray-300">anishtafernando13@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-lavender w-6 h-6" />
                  <span className="text-gray-300">+91 6382176771</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-lavender w-6 h-6" />
                  <span className="text-gray-300">Chennai, Tamilnadu, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Follow Me</h2>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-eerie-black border border-english-violet rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 hover:border-lavender ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
