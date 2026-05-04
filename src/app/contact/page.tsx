'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Code, Award, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(result.message || 'Message sent successfully! I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Message sending error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');
      setTimeout(() => setSubmitStatus('idle'), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhanushramguttula@gmail.com',
      href: 'mailto:dhanushramguttula@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/dhanushram24' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhanush-ram-b29173231/' },
    { icon: Code, label: 'LeetCode', href: 'https://leetcode.com/Dhanush_Ram/' },
    { icon: Award, label: 'HackerRank', href: 'https://www.hackerrank.com/dhanushramguttu1' }
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
            Initiate <span className="gold-text-gradient">Contact</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            Have a project in mind or just want to connect? Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 group"
          >
            <div className="bg-secondary/50 p-8 md:p-12 rounded-[40px] border border-border group-hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-5 rounded-full blur-3xl"></div>

              <h2 className="text-3xl font-black mb-8 tracking-tight">Send a <span className="text-gold-500">Message</span></h2>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mb-8 p-4 rounded-2xl flex items-center gap-3 border ${submitStatus === 'success'
                      ? 'bg-gold-500/10 border-gold-500/20 text-gold-600 dark:text-gold-400'
                      : 'bg-red-500/10 border-red-500/20 text-red-500'
                      }`}
                  >
                    {submitStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <p className="font-bold text-sm">{statusMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-foreground/40 ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-gold-500 outline-none transition-all font-bold placeholder:text-foreground/20"
                      placeholder="Dhanush Ram"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-foreground/40 ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-gold-500 outline-none transition-all font-bold placeholder:text-foreground/20"
                      placeholder="dhanush@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="subject" className="text-sm font-black uppercase tracking-widest text-foreground/40 ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-gold-500 outline-none transition-all font-bold placeholder:text-foreground/20"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-foreground/40 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-gold-500 outline-none transition-all font-bold placeholder:text-foreground/20 resize-none"
                    placeholder="Tell me about your vision..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-gradient text-black font-black py-5 rounded-2xl shadow-xl shadow-gold-500/20 flex items-center justify-center gap-3 disabled:opacity-50 group/btn overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="text-lg">Send Message</span>
                      <Send size={20} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-300" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-black tracking-tight">Direct <span className="text-gold-500">Channels</span></h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group p-6 rounded-3xl bg-secondary/30 border border-border hover:border-gold-500/30 transition-all duration-300">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                          <Icon className="w-7 h-7 text-black" />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="text-xl font-bold hover:text-gold-500 transition-colors">{info.value}</a>
                          ) : (
                            <p className="text-xl font-bold">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-widest text-foreground/40">Digital Footprint</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ y: -5, scale: 1.1 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all duration-300 shadow-lg"
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="relative p-10 rounded-[40px] bg-gold-500 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-2xl font-black text-black mb-4">Urgent Matters?</h3>
              <p className="text-black/80 font-bold leading-relaxed">
                I typically respond within 12 hours. For immediate technical consultations, please reach out via LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
