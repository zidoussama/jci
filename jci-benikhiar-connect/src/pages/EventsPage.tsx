import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const events = [
  {
    id: 1,
    title: { fr: 'Formation Leadership JCI', ar: 'تدريب القيادة JCI', en: 'JCI Leadership Training' },
    description: { fr: 'Une journée intensive de formation sur les compétences de leadership.', ar: 'يوم مكثف من التدريب على مهارات القيادة.', en: 'An intensive day of leadership skills training.' },
    date: '2026-02-15',
    time: '09:00',
    location: { fr: 'Centre Culturel Beni Khiar', ar: 'المركز الثقافي بني خيار', en: 'Beni Khiar Cultural Center' },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
    isUpcoming: true,
  },
  {
    id: 2,
    title: { fr: 'Nettoyage de Plage - Beni Khiar', ar: 'تنظيف شاطئ بني خيار', en: 'Beach Cleanup - Beni Khiar' },
    description: { fr: 'Rejoignez-nous pour nettoyer notre belle plage.', ar: 'انضم إلينا لتنظيف شاطئنا الجميل.', en: 'Join us to clean our beautiful beach.' },
    date: '2026-02-22',
    time: '08:00',
    location: { fr: 'Plage de Beni Khiar', ar: 'شاطئ بني خيار', en: 'Beni Khiar Beach' },
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600',
    isUpcoming: true,
  },
  {
    id: 3,
    title: { fr: 'Conférence Entrepreneuriat', ar: 'مؤتمر ريادة الأعمال', en: 'Entrepreneurship Conference' },
    description: { fr: 'Rencontrez des entrepreneurs inspirants et apprenez de leur expérience.', ar: 'قابل رواد أعمال ملهمين وتعلم من تجربتهم.', en: 'Meet inspiring entrepreneurs and learn from their experience.' },
    date: '2026-03-10',
    time: '14:00',
    location: { fr: 'Hôtel Nabeul', ar: 'فندق نابل', en: 'Nabeul Hotel' },
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600',
    isUpcoming: true,
  },
  {
    id: 4,
    title: { fr: 'Gala Annuel JCI 2025', ar: 'الحفل السنوي JCI 2025', en: 'JCI Annual Gala 2025' },
    description: { fr: 'Célébration des réalisations de l\'année écoulée.', ar: 'احتفال بإنجازات العام الماضي.', en: 'Celebration of the past year\'s achievements.' },
    date: '2025-12-20',
    time: '19:00',
    location: { fr: 'Palace Hammamet', ar: 'قصر الحمامات', en: 'Palace Hammamet' },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
    isUpcoming: false,
  },
  {
    id: 5,
    title: { fr: 'Journée Mondiale de l\'Enfance', ar: 'اليوم العالمي للطفولة', en: 'World Children\'s Day' },
    description: { fr: 'Activités ludiques et éducatives pour les enfants de la région.', ar: 'أنشطة ترفيهية وتعليمية لأطفال المنطقة.', en: 'Fun and educational activities for local children.' },
    date: '2025-11-20',
    time: '10:00',
    location: { fr: 'École Primaire Beni Khiar', ar: 'المدرسة الابتدائية بني خيار', en: 'Beni Khiar Primary School' },
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
    isUpcoming: false,
  },
];

const EventsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = events.filter(e => e.isUpcoming);
  const pastEvents = events.filter(e => !e.isUpcoming);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      language === 'ar' ? 'ar-TN' : language === 'fr' ? 'fr-TN' : 'en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );
  };

  const EventCard = ({ event }: { event: typeof events[0] }) => (
    <Card className="overflow-hidden group hover:shadow-xl transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title[language]}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {event.isUpcoming && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            {t('events', 'upcoming')}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
          {event.title[language]}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {event.description[language]}
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{event.location[language]}</span>
          </div>
        </div>
        {event.isUpcoming && (
          <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
            {t('events', 'details')}
          </Button>
        )}
      </CardContent>
    </Card>
  );

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
            {t('events', 'title')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t('events', 'subtitle')}
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
              <TabsTrigger value="upcoming" className="text-base">
                {t('events', 'upcoming')} ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="text-base">
                {t('events', 'past')} ({pastEvents.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              {upcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <EventCard event={event} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Calendar className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {language === 'ar' ? 'لا توجد فعاليات قادمة حاليًا' : language === 'fr' ? 'Aucun événement à venir pour le moment' : 'No upcoming events at the moment'}
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {pastEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event, index) => (
                    <div key={event.id} className="animate-fade-in opacity-80" style={{ animationDelay: `${index * 0.1}s` }}>
                      <EventCard event={event} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Calendar className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {language === 'ar' ? 'لا توجد فعاليات سابقة' : language === 'fr' ? 'Aucun événement passé' : 'No past events'}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
