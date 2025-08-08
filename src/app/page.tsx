'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center z-10 max-w-5xl mx-auto px-4"
        >
          {/* Profile Photo */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-600 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600">
              <Image
                src="/images/chintu.jpg"
                alt="Dhanush Ram"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I&#39;m{' '}
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent">
              Dhanush Ram
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Full Stack Developer & Software Engineer passionate about creating 
            innovative solutions and beautiful user experiences
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </Link>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in creating digital experiences that combine beautiful design with powerful functionality
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Full Stack Development',
                description: 'Building scalable web applications using modern technologies like React, Next.js, Node.js, and TypeScript'
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'Creating intuitive and beautiful user interfaces with attention to detail and user experience'
              },
              {
                icon: Rocket,
                title: 'Performance Optimization',
                description: 'Optimizing applications for speed, scalability, and best practices in web development'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&#39;s create something amazing together. I&apos;m always excited to take on new challenges.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
