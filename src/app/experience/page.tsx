'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Elanco Animal Health',
      location: 'Bangalore, India',
      period: '2024 - Present',
      description: [
        'Developing and maintaining enterprise-level web applications using React and .NET technologies',
        'Working on animal health software solutions that impact global veterinary care',
        'Collaborating with international teams to deliver scalable software solutions',
        'Implementing best practices in code quality, testing, and deployment'
      ],
      technologies: ['React', 'TypeScript', '.NET', 'C#', 'SQL Server', 'Azure']
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
            Professional Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey as a developer, from frontend enthusiast to full-stack engineer
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Work Experience
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <Briefcase className="w-6 h-6 text-gray-400 mt-1" />
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
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
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Certifications
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {cert.year}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
