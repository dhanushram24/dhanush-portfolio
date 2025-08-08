import { Github, Linkedin, Mail, Heart, Code, Award, Twitter } from 'lucide-react';

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
      href: 'https://www.linkedin.com/in/dhanush-ram-b29173231/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/dhanushram24',
      label: 'Twitter/X'
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
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Dhanush Ram</span>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Dhanush Ram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
