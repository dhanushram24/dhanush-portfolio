'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette, Rocket, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen transition-colors duration-300 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center z-10 max-w-5xl mx-auto px-4"
        >
          {/* Profile Photo with Glow */}
          <motion.div
            variants={fadeInUp}
            className="mb-10 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 gold-gradient rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-background shadow-2xl">
                <Image
                  src="/images/chintu.jpg"
                  alt="Dhanush Ram"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            Hi, I&#39;m{' '}
            <span className="gold-text-gradient">
              Dhanush Ram
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl mx-auto font-medium"
          >
            Full Stack Developer & Software Engineer passionate about crafting
            <span className="text-foreground font-semibold"> premium digital experiences </span>
            with precision and purpose.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/projects"
              className="group relative px-8 py-4 bg-foreground text-background rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-gold-500/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ExternalLink size={18} />
              </span>
              <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 group-hover:text-black"></div>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gold-500/50 text-foreground rounded-full font-bold hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-6 h-6 mx-auto text-gold-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              What I <span className="gold-text-gradient">Deliver</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
              I specialize in creating digital solutions that combine architectural excellence with stunning aesthetics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Full Stack Development',
                description: 'Building robust, scalable architectures using Next.js, Node.js, and TypeScript with a focus on clean code.'
              },
              {
                icon: Palette,
                title: 'Premium UI/UX',
                description: 'Designing high-end interfaces that prioritize user intuition, performance, and modern aesthetics.'
              },
              {
                icon: Rocket,
                title: 'Performance & SEO',
                description: 'Engineered for speed. I ensure every line of code contributes to a lightning-fast, discoverable experience.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-background border border-border hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-2xl mb-6 shadow-lg transform group-hover:rotate-6 transition-transform">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-[0.03]"></div>
        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[40px] bg-foreground text-background shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>

            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">
              Let&#39;s Build Something <span className="text-gold-500">Legendary</span>.
            </h2>
            <p className="text-xl md:text-2xl text-background/70 mb-12 max-w-2xl mx-auto font-medium">
              Currently open to new opportunities and ambitious projects.
              Let&apos;s turn your vision into reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold-500 text-black rounded-full hover:bg-gold-400 transition-all duration-300 font-black text-xl shadow-xl hover:scale-110 active:scale-95"
            >
              Start Project <Rocket className="w-6 h-6 animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
