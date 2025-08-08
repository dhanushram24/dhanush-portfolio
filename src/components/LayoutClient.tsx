'use client';

import Navigation from './Navigation';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
