import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', category: 'events', title: { fr: 'Gala Annuel 2025', ar: 'الحفل السنوي 2025', en: '2025 Annual Gala' } },
  { id: 2, src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800', category: 'projects', title: { fr: 'Nettoyage de Plage', ar: 'تنظيف الشاطئ', en: 'Beach Cleanup' } },
  { id: 3, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800', category: 'team', title: { fr: 'Réunion d\'équipe', ar: 'اجتماع الفريق', en: 'Team Meeting' } },
  { id: 4, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800', category: 'training', title: { fr: 'Formation Leadership', ar: 'تدريب القيادة', en: 'Leadership Training' } },
  { id: 5, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800', category: 'projects', title: { fr: 'Plantation d\'arbres', ar: 'غرس الأشجار', en: 'Tree Planting' } },
  { id: 6, src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800', category: 'events', title: { fr: 'Conférence', ar: 'مؤتمر', en: 'Conference' } },
  { id: 7, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800', category: 'projects', title: { fr: 'Éducation pour Tous', ar: 'التعليم للجميع', en: 'Education for All' } },
  { id: 8, src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', category: 'team', title: { fr: 'Photo de groupe', ar: 'صورة جماعية', en: 'Group Photo' } },
  { id: 9, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800', category: 'events', title: { fr: 'Cérémonie', ar: 'حفل', en: 'Ceremony' } },
  { id: 10, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800', category: 'projects', title: { fr: 'Journée Enfance', ar: 'يوم الطفولة', en: 'Children\'s Day' } },
  { id: 11, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', category: 'team', title: { fr: 'Brainstorming', ar: 'عصف ذهني', en: 'Brainstorming' } },
  { id: 12, src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800', category: 'projects', title: { fr: 'Visite solidaire', ar: 'زيارة تضامنية', en: 'Solidarity Visit' } },
];

const categories = [
  { key: 'all', label: { fr: 'Toutes', ar: 'الكل', en: 'All' } },
  { key: 'events', label: { fr: 'Événements', ar: 'الفعاليات', en: 'Events' } },
  { key: 'projects', label: { fr: 'Projets', ar: 'المشاريع', en: 'Projects' } },
  { key: 'team', label: { fr: 'Équipe', ar: 'الفريق', en: 'Team' } },
  { key: 'training', label: { fr: 'Formation', ar: 'التدريب', en: 'Training' } },
];

const GalleryPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary to-jci-blue-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('gallery', 'title')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t('gallery', 'subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.key)}
                className={cn(
                  'rounded-full',
                  activeCategory === category.key && 'bg-primary text-primary-foreground'
                )}
              >
                {category.label[language]}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end">
                  <p className="text-white font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    {image.title[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.title[language]}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
            {selectedImage.title[language]}
          </p>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
