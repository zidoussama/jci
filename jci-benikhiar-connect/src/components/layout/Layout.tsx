import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language, dir } = useLanguage();

  return (
    <div 
      className={cn(
        'min-h-screen flex flex-col',
        language === 'ar' && 'font-arabic'
      )}
      dir={dir}
    >
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
