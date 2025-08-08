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
      title: 'Anime loop',
      description: 'An immersive anime-themed portfolio showcasing cutting-edge web animations and interactive UI elements. Features dynamic background effects, smooth scroll animations, typewriter text effects, and responsive design optimized for all devices.',
      image: '/images/anime.jpg',
      technologies: ['TypeScript'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/anime_loop',
      live: 'https://anime-loop-rho.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Spot The Job',
      description: 'A comprehensive job portal platform connecting talented professionals with leading companies. Features advanced job search filters, real-time application tracking, company profiles, and intuitive user dashboard for seamless job hunting experience.',
      image: '/images/job.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/spot-the-job',
      live: 'https://spot-the-job.vercel.app',
      featured: true
    },
     {
      id: 3,
      title: 'Forbes BMI Calculator',
      description: 'A sophisticated health tracking application that calculates Body Mass Index with personalized health recommendations. Includes interactive charts, progress visualization, health category analysis, and data persistence for long-term health monitoring.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Local Storage'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/forbes_bmi',
      live: 'https://dhanushram24.github.io/forbes_bmi',
      featured: false
    },
    {
      id: 4,
      title: 'Calculator Application',
      description: 'An elegant and powerful calculator application with advanced mathematical operations and memory functions. Features a sleek glassmorphism design, keyboard shortcuts, calculation history, and responsive layout for desktop and mobile devices.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/calculator',
      live: 'https://dhanushram24.github.io/calculator',
      featured: true
    },
    {
      id: 5,
      title: 'MERN Stack E-Commerce',
      description: 'A full-featured e-commerce platform built during my Ethnus internship. Includes secure user authentication, product catalog management, shopping cart functionality, order processing, payment gateway integration, and admin dashboard for complete store management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/mern-ecommerce',
      live: 'https://mern-store-demo.herokuapp.com',
      featured: false
    },
    {
      id: 6,
      title: 'Todo List Manager',
      description: 'A feature-rich task management application designed for maximum productivity. Includes task categorization, priority levels, due date reminders, progress tracking, local storage persistence, and drag-and-drop functionality for efficient task organization.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/todo-app',
      live: 'https://dhanushram24.github.io/todo-app',
      featured: false
    },
    {
      id: 7,
      title: 'Business Landing Page',
      description: 'A conversion-optimized business landing page with modern design principles and high-performance architecture. Features smooth scroll animations, interactive contact forms, testimonial sections, service showcases, and mobile-first responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Flexbox'],
      category: 'frontend',
      github: 'https://github.com/dhanushram24/landing-page',
      live: 'https://dhanushram24.github.io/landing-page',
      featured: false
    },
    {
      id: 8,
      title: 'VChat - Chat Application',
      description: 'A real-time communication platform enabling seamless video calls, voice chats, and instant messaging. Built with WebRTC for peer-to-peer connections, featuring room creation, screen sharing, file transfer, and cross-platform compatibility.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=entropy',
      technologies: ['WebRTC', 'Socket.io', 'Node.js', 'JavaScript', 'HTML5'],
      category: 'fullstack',
      github: 'https://github.com/dhanushram24/Vchat',
      live: 'https://vchat-dhanush.herokuapp.com',
      featured: true
    },
    {
      id: 9,
      title: 'Forbes BMI Calculator',
      description: 'A comprehensive health assessment tool providing detailed BMI calculations with personalized recommendations. Features health category classifications, ideal weight suggestions, interactive progress charts, and educational content about healthy living.',
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
                    className="object-contain"
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
                    className="object-contain"
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
