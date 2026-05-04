'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Filter } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 9,
      title: 'PrepWithDhanush',
      description: 'A comprehensive interview preparation platform with AI-driven mock interviews, resource tracking, and performance analytics.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      technologies: ['Next.js', 'TypeScript', 'AI/LLM', 'Tailwind'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/prepwithdhanush',
      live: 'https://prepwithdhanush.vercel.app',
      featured: true
    },
    {
      id: 10,
      title: 'DhanushTalks24',
      description: 'Modern real-time communication platform enabling seamless video discussions and community engagement.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/dhanushtalks24',
      live: 'https://dhanushtalks24.vercel.app',
      featured: true
    },
    {
      id: 11,
      title: 'AIWITHDHANUSH',
      description: 'Advanced AI assistant platform leveraging high-performance GPT models for rapid problem solving and automation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      technologies: ['React', 'OpenAI API', 'Framer Motion'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/AI-With-Dhanush',
      live: 'https://quick-gpt-chi-tan.vercel.app/',
      featured: true
    },
    {
      id: 1,
      title: 'Anime loop',
      description: 'An immersive anime-themed portfolio showcasing cutting-edge web animations and interactive UI elements. Features dynamic background effects and responsive design.',
      image: '/images/anime.jpg',
      technologies: ['TypeScript', 'Framer Motion', 'React'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/anime_loop',
      live: 'https://anime-loop-rho.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Spot The Job',
      description: 'A comprehensive job portal platform connecting professionals with leading companies. Features advanced filters and real-time tracking.',
      image: '/images/job.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/spot-the-job',
      live: 'https://spot-the-job.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Forbes BMI Calculator',
      description: 'Sophisticated health tracking application with personalized recommendations and interactive charts for progress visualization.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'Chart.js', 'Local Storage'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/forbes_bmi',
      live: 'https://dhanushram24.github.io/forbes_bmi',
      featured: false
    },
    {
      id: 4,
      title: 'Premium Calculator',
      description: 'Elegant calculator with advanced operations and memory functions. Features sleek glassmorphism and keyboard shortcuts.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/calculator',
      live: 'https://dhanushram24.github.io/calculator',
      featured: true
    },
    {
      id: 5,
      title: 'MERN E-Commerce',
      description: 'Full-featured store with secure authentication, cart management, and payment integration. Built with industrial standards.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['MongoDB', 'Express', 'React', 'Node'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/mern-ecommerce',
      live: 'https://mern-store-demo.herokuapp.com',
      featured: false
    },
    {
      id: 8,
      title: 'VChat - Real-time',
      description: 'Communication platform enabling seamless video calls and instant messaging using WebRTC for P2P connections.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      technologies: ['WebRTC', 'Socket.io', 'Node.js'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/Vchat',
      live: 'https://vchat-dhanush.herokuapp.com',
      featured: true
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Curated <span className="gold-text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            A showcase of architectural precision and aesthetic excellence in software engineering.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Sparkles className="text-gold-500 w-8 h-8" />
            <h2 className="text-3xl font-black tracking-tight uppercase">Featured Masterpieces</h2>
            <div className="h-px bg-gold-500/30 flex-1"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-[40px] bg-secondary/50 border border-border overflow-hidden hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white text-black rounded-full hover:bg-gold-500 transition-all duration-300 hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gold-500 text-black rounded-full hover:bg-gold-400 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 gold-gradient text-black text-xs font-black rounded-full shadow-lg uppercase tracking-widest">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-gold-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 font-medium mb-8 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-background border border-border text-foreground/70 text-xs font-bold rounded-full group-hover:border-gold-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Filter className="text-gold-500 w-6 h-6" />
              <h2 className="text-2xl font-black tracking-tight uppercase">Discover More</h2>
              <div className="h-px bg-gold-500/30 flex-1 md:w-32 md:flex-none"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-secondary/50 rounded-2xl border border-border">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all duration-300 ${filter === category.key
                    ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20'
                    : 'text-foreground/60 hover:text-foreground hover:bg-background'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-secondary/30 rounded-3xl border border-border overflow-hidden hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={project.github} target="_blank" className="p-2.5 bg-white text-black rounded-full hover:bg-gold-500 transition-colors">
                        <Github size={18} />
                      </a>
                      <a href={project.live} target="_blank" className="p-2.5 bg-gold-500 text-black rounded-full hover:bg-gold-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black mb-2 group-hover:text-gold-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm font-medium mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background text-foreground/50 text-[10px] font-black uppercase tracking-widest rounded-lg border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
