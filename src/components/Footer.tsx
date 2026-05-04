'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Award } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dhanushram24',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dhanush-ram-guttula-53b06b222/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:dhanushramguttula@gmail.com',
      label: 'Email'
    },
    {
      icon: Code,
      href: 'https://leetcode.com/Dhanush_Ram/',
      label: 'LeetCode'
    },
    {
      icon: Award,
      href: 'https://www.hackerrank.com/dhanushramguttu1',
      label: 'HackerRank'
    }
  ];

  return (
    <footer className="bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center font-bold text-black text-sm shadow-lg group-hover:scale-110 transition-transform">
                DR
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground group-hover:gold-text-gradient transition-all duration-300">
                Dhanush Ram
              </span>
            </Link>
            <div className="flex items-center space-x-2 text-foreground/60 font-medium">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-gold-500 fill-current" />
              <span>by Dhanush Ram</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 text-foreground/60 hover:text-gold-500 hover:bg-gold-500/10 border border-transparent hover:border-gold-500/30 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-foreground/40 text-sm font-medium">
            © {currentYear} Dhanush Ram. All rights reserved.
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1 gold-gradient w-full opacity-30"></div>
    </footer>
  );
};

export default Footer;
