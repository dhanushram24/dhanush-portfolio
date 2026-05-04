'use client';

import React from 'react';
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
    <div className="min-h-screen transition-colors duration-300 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                About <span className="gold-text-gradient">Me</span>
              </h1>
              <div className="space-y-6 text-lg text-foreground/70 font-medium leading-relaxed">
                <p>
                  I am a passionate <span className="text-foreground font-bold">Full Stack Developer</span> with 2+ years of experience in crafting high-performance web applications. I specialize in building scalable systems and intuitive user interfaces.
                </p>
                <p>
                  With a strong foundation in Computer Science from <span className="text-gold-600 dark:text-gold-400 font-bold">VIT Vellore</span>, I combine technical rigor with a key eye for design. I love solving complex architectural challenges and stay at the forefront of emerging technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-foreground/60 font-semibold bg-secondary/50 px-4 py-2 rounded-full border border-border">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 font-semibold bg-secondary/50 px-4 py-2 rounded-full border border-border">
                  <Calendar className="w-5 h-5 text-gold-500" />
                  <span>Available for Projects</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12"
              >
                <a
                  href="/Dhanush_Ram_G_Resume.pdf"
                  download="Dhanush_Ram_G_Resume.pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold shadow-xl hover:shadow-gold-500/20 transition-all duration-300 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto group">
                <div className="absolute -inset-4 gold-gradient rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition duration-1000"></div>
                <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-2xl">
                  <Image
                    src="/images/chintu.jpg"
                    alt="Dhanush Ram"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-28 h-28 gold-gradient rounded-2xl flex flex-col items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-black font-black text-3xl">2+</span>
                  <span className="text-black font-bold text-xs uppercase tracking-widest">Years Exp</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Technical <span className="gold-text-gradient">Arsenal</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
              A comprehensive suite of tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-gold-500 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-black text-gold-600 dark:text-gold-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="gold-gradient h-full rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Academic <span className="gold-text-gradient">Foundation</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl bg-secondary/50 border border-border hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-foreground group-hover:text-gold-500 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-gold-600 dark:text-gold-400 font-bold text-lg">
                      {edu.school}
                    </p>
                  </div>
                  <div className="px-4 py-1 rounded-full bg-foreground text-background font-black text-sm whitespace-nowrap">
                    {edu.year}
                  </div>
                </div>
                <p className="text-foreground/60 leading-relaxed font-medium text-lg">
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
