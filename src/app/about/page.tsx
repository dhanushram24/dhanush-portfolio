'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 82 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 78 },
    { name: 'Java', level: 80 },
    { name: 'C/C++', level: 75 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'Bootstrap', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'MySQL', level: 78 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Azure', level: 70 },
    { name: 'Docker', level: 68 }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Vellore Institute of Technology, Vellore',
      year: '2020 - 2024',
      description: 'Graduated with distinction in Computer Science and Engineering. Focused on software development, data structures, algorithms, web technologies, and modern programming practices.'
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'Sri Chaitanya College, Vijayawada',
      year: '2018 - 2020',
      description: 'Completed intermediate education with Mathematics, Physics, and Chemistry (MPC) stream with excellent academic performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am a passionate Full Stack Developer with 2+ years of experience in creating 
                innovative web applications and software solutions. I specialize in modern JavaScript 
                frameworks, backend development, and creating seamless user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I have hands-on experience with React, Next.js, Node.js, and various databases. 
                I love solving complex problems and am always eager to learn new technologies 
                and contribute to meaningful projects.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Available for new opportunities</span>
                </div>
              </div>
              
              <a 
                href="/Dhanush_Ram_G_Resume.pdf" 
                download="Dhanush_Ram_G_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/chintu.jpg"
                      alt="Dhanush Ram"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2+</span>
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the technologies I work with regularly
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
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
              Education
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.school}
                  </p>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
