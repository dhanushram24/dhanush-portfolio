'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Animated Portfolio Website',
      description: 'A dynamic HTML/CSS/JavaScript portfolio featuring smooth animations, typed text effects, and responsive design. Built with custom CSS animations and Typed.js for interactive text display.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Typed.js', 'BoxIcons'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/portfolio',
      live: 'https://dhanushram24.github.io/portfolio',
      featured: true
    },
    {
      id: 2,
      title: 'Next.js Modern Portfolio',
      description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion animations with dark/light theme support and real certifications.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/nextjs-portfolio',
      live: 'https://dhanushram-portfolio.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Calculator Application',
      description: 'A responsive calculator app with modern UI design and full arithmetic functionality. Features clean interface with smooth button interactions.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/calculator',
      live: 'https://dhanushram24.github.io/calculator',
      featured: true
    },
    {
      id: 4,
      title: 'MERN Stack E-Commerce',
      description: 'Full-stack e-commerce application built during Ethnus internship. Features user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/mern-ecommerce',
      live: 'https://mern-store-demo.herokuapp.com',
      featured: false
    },
    {
      id: 5,
      title: 'Todo List Manager',
      description: 'A feature-rich todo application with local storage persistence, task categories, and priority levels. Built with vanilla JavaScript for optimal performance.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/todo-app',
      live: 'https://dhanushram24.github.io/todo-app',
      featured: false
    },
    {
      id: 6,
      title: 'Business Landing Page',
      description: 'A modern, responsive landing page for businesses with smooth scrolling, contact forms, and optimized performance. Features contemporary design with CSS Grid and Flexbox.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Flexbox'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/landing-page',
      live: 'https://dhanushram24.github.io/landing-page',
      featured: false
    },
    {
      id: 7,
      title: 'VChat - Chat Application',
      description: 'A real-time chat application enabling seamless communication between users. Features include video/audio calls, chat messaging, and room-based conversations.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['WebRTC', 'Socket.io', 'Node.js', 'JavaScript', 'HTML5'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/Vchat',
      live: 'https://vchat-dhanush.herokuapp.com',
      featured: true
    },
    {
      id: 8,
      title: 'Spot The Job - Job Portal',
      description: 'A comprehensive job portal platform connecting job seekers with employers. Features job listings, application tracking, profile management, and advanced search filters.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Material-UI'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/spot-the-job',
      live: 'https://spot-the-job.vercel.app',
      featured: true
    },
    {
      id: 9,
      title: 'Anime Loop - Streaming Platform',
      description: 'An anime streaming website with extensive anime catalog, user favorites, watchlists, and responsive design. Features anime search, categories, and user recommendations.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['React', 'API Integration', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/anime_loop',
      live: 'https://anime-loop.netlify.app',
      featured: false
    },
    {
      id: 10,
      title: 'Forbes BMI Calculator',
      description: 'A professional BMI (Body Mass Index) calculator with health recommendations and fitness tracking. Features include BMI calculation, health insights, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Local Storage'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/forbes_bmi',
      live: 'https://dhanushram24.github.io/forbes_bmi',
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            All Projects
          </motion.h2>
          
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  filter === category.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
