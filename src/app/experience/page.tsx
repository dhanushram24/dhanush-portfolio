'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Paramantra',
      location: 'Bangalore, India',
      period: 'Feb 2026 - Present',
      description: [
        'Working as a Full Stack Developer on enterprise CRM and ERP solutions',
        'Architecting and implementing high-performance web features using modern stacks',
        'Optimizing database queries and backend logic for large-scale data processing',
        'Collaborating with product teams to deliver premium user experiences'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'SQL Server', 'REST APIs']
    },
    {
      title: 'Software Development Engineer',
      company: 'Elanco Animal Health',
      location: 'Bangalore, India',
      period: '2024 - 2025',
      description: [
        'Developing and maintaining enterprise-level web applications using React and .NET technologies',
        'Working on animal health software solutions that impact global veterinary care',
        'Collaborating with international teams to deliver scalable software solutions',
        'Implementing best practices in code quality, testing, and deployment'
      ],
      technologies: ['React', 'TypeScript', 'PYTHON', 'Azure']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Forbes Advisor',
      location: 'Chennai, India',
      period: '2023 - 2024',
      description: [
        'Built responsive web applications using React, Node.js, and MongoDB',
        'Developed RESTful APIs and integrated third-party services',
        'Participated in agile development processes and code reviews',
        'Contributed to improving application performance and user experience'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Express.js']
    },
    {
      title: 'Web Development Intern',
      company: 'Ethnus',
      location: 'Chennai, India',
      period: '2022 - 2023',
      description: [
        'Created responsive websites using HTML, CSS, JavaScript, and React',
        'Learned modern web development practices and version control with Git',
        'Assisted senior developers in debugging and testing applications',
        'Gained experience in project management and client communication'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'Bootstrap']
    }
  ];

  const certifications = [
    {
      name: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
      issuer: 'Microsoft',
      year: '2025',
      credentialId: 'MSFT-AI-2025'
    },
    {
      name: 'Ethics in the Age of Generative AI',
      issuer: 'LinkedIn',
      year: '2025',
      credentialId: 'LNKD-ETHICS-2025'
    },
    {
      name: 'Generative AI: The Evolution of Thoughtful Online Search',
      issuer: 'LinkedIn',
      year: '2025',
      credentialId: 'LNKD-SEARCH-2025'
    },
    {
      name: 'Learning Microsoft 365 Copilot for Work',
      issuer: 'LinkedIn',
      year: '2025',
      credentialId: 'LNKD-M365-2025'
    },
    {
      name: 'Streamlining Your Work with Microsoft Copilot',
      issuer: 'LinkedIn',
      year: '2025',
      credentialId: 'LNKD-COPILOT-2025'
    },
    {
      name: 'What Is Generative AI?',
      issuer: 'LinkedIn',
      year: '2025',
      credentialId: 'LNKD-GENAI-2025'
    },
    {
      name: 'LLM Fine Tuning on OpenAI',
      issuer: 'Udemy',
      year: '2025',
      credentialId: 'UDEMY-LLM-2025'
    },
    {
      name: 'Terraform for AWS - Beginner to Expert',
      issuer: 'Udemy',
      year: '2025',
      credentialId: 'UDEMY-TERRAFORM-2025'
    },
    {
      name: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'IBM',
      year: '2025',
      credentialId: 'DG7IRJ5UCZV'
    },
    {
      name: 'Introduction to Software Engineering',
      issuer: 'IBM',
      year: '2024',
      credentialId: 'SICPD7LK5NVD'
    },
    {
      name: 'Introduction to .NET Core',
      issuer: 'Board Infinity',
      year: '2024',
      credentialId: 'DRMZUWXR3DVB'
    },
    {
      name: 'Introduction to Generative AI',
      issuer: 'Google Cloud Training Online',
      year: '2024',
      credentialId: '9ESSVZ5GYZ6B'
    },
    {
      name: 'Introduction to Large Language Models',
      issuer: 'Google Cloud Training Online',
      year: '2024',
      credentialId: '65HFV56HDXD9D'
    },
    {
      name: 'Digital Garage Certificate',
      issuer: 'Google',
      year: '2023',
      credentialId: 'GOOGLE-DG-2023'
    },
    {
      name: 'Fundamentals of Digital Marketing',
      issuer: 'Digital Scholar',
      year: '2023',
      credentialId: '191236671925I7'
    }
  ];

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
            Professional <span className="gold-text-gradient">Journey</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            Building the future through code, one project at a time.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <section className="mb-32">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 gold-gradient opacity-20 rounded-full"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-20 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 gold-gradient rounded-full border-4 border-background z-10 shadow-lg shadow-gold-500/20"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group p-8 rounded-[32px] bg-secondary/50 border border-border hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full gold-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex flex-col mb-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-black text-foreground group-hover:text-gold-500 transition-colors">
                          {exp.title}
                        </h3>
                        <Briefcase className="w-6 h-6 text-gold-500/50" />
                      </div>
                      <p className="text-gold-600 dark:text-gold-400 font-bold text-lg">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm font-bold text-foreground/50 mb-6">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-background rounded-full border border-border">
                        <Calendar className="w-4 h-4 text-gold-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-background rounded-full border border-border">
                        <MapPin className="w-4 h-4 text-gold-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-foreground/70 font-medium leading-relaxed flex items-start">
                          <span className="w-2 h-2 gold-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 bg-foreground text-background font-black text-xs rounded-full hover:bg-gold-500 hover:text-black transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Certifications & <span className="gold-text-gradient">Badges</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl bg-secondary/30 border border-border hover:border-gold-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/5 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl gold-gradient shadow-lg">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    href="#"
                    className="p-2 rounded-full hover:bg-gold-500/10 text-foreground/40 hover:text-gold-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                <h3 className="text-lg font-black text-foreground group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors mb-2 line-clamp-2">
                  {cert.name}
                </h3>

                <div className="mt-auto pt-4 flex flex-col gap-1">
                  <p className="text-gold-600 dark:text-gold-400 font-bold text-sm">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center text-xs font-bold text-foreground/40">
                    <span>{cert.year}</span>
                    <span className="uppercase tracking-widest">ID: {cert.credentialId}</span>
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
