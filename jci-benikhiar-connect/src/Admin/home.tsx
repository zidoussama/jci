import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Calendar,
  Image as ImageIcon,
  FileText,
  TrendingUp,
  Activity,
  Settings,
  Bell,
  Search,
  BarChart3,
  UserPlus,
  Mail,
  Heart,
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: string;
}

const StatCard = ({ title, value, description, icon, trend }: StatCardProps) => (
  <Card className="border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
          <div className="text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
        </div>

        <div className="shrink-0 rounded-xl bg-slate-100 p-2 text-slate-700">
          {icon}
        </div>
      </div>

      <CardDescription className="text-xs">{description}</CardDescription>

      {trend && (
        <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
          <TrendingUp className="h-3.5 w-3.5" />
          {trend}
        </div>
      )}
    </CardHeader>
  </Card>
);

export default function AdminHome() {
  const navigate = useNavigate();
  const [adminName] = useState('Admin JCI');

  const stats = [
    {
      title: 'Membres Total',
      value: '142',
      description: '+12 ce mois',
      icon: <Users className="h-5 w-5" />,
      trend: '+8.2%',
    },
    {
      title: 'Événements',
      value: '24',
      description: '8 à venir',
      icon: <Calendar className="h-5 w-5" />,
      trend: '+12.5%',
    },
    {
      title: 'Projets',
      value: '18',
      description: '5 en cours',
      icon: <Activity className="h-5 w-5" />,
      trend: '+4.1%',
    },
    {
      title: 'Nouveaux Inscrits',
      value: '32',
      description: 'Ce mois',
      icon: <UserPlus className="h-5 w-5" />,
      trend: '+18.2%',
    },
  ];

  const recentActivities = [
    { id: 1, type: 'member', message: 'Nouveau membre inscrit', user: 'Mohamed Ben Ali', time: 'Il y a 2 heures' },
    { id: 2, type: 'event', message: 'Événement créé', user: 'Formation Leadership', time: 'Il y a 4 heures' },
    { id: 3, type: 'project', message: 'Projet mis à jour', user: 'Nettoyage de plage', time: 'Il y a 6 heures' },
    { id: 4, type: 'member', message: 'Membre approuvé', user: 'Fatma Gharbi', time: 'Il y a 1 jour' },
  ];

  const quickActions = [
    { icon: <UserPlus className="h-5 w-5" />, label: 'Ajouter Membre', path: '/admin/members/add' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Créer Événement', path: '/admin/events/add' },
    { icon: <ImageIcon className="h-5 w-5" />, label: 'Gérer Galerie', path: '/admin/gallery' },
    { icon: <FileText className="h-5 w-5" />, label: 'Nouveau Article', path: '/admin/news/add' },
  ];

  const activityIcon = (type: string) => {
    if (type === 'member') return <Users className="h-4 w-4 text-blue-700" />;
    if (type === 'event') return <Calendar className="h-4 w-4 text-blue-700" />;
    return <Activity className="h-4 w-4 text-blue-700" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">
              J
            </div>
            <div className="leading-tight">
              <h1 className="text-sm font-semibold text-slate-900">JCI Admin</h1>
              <p className="text-xs text-slate-500">Dashboard</p>
            </div>
          </div>

          <div className="hidden md:block flex-1">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input type="search" placeholder="Rechercher..." className="pl-9 bg-white" />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-[11px] grid place-items-center">
                3
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-10 gap-2 px-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/api/placeholder/32/32" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium leading-none">{adminName}</p>
                    <p className="text-xs text-slate-500">Administrateur</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/admin/settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  Paramètres
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8 space-y-6">
        {/* Top section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Tableau de bord
            </h2>
            <p className="text-sm text-slate-600">
              Bienvenue, <span className="font-medium text-slate-900">{adminName}</span> — aperçu de la plateforme.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Statistiques
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
              <FileText className="h-4 w-4" />
              Rapport
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="border-slate-200/60">
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>Accédez rapidement aux fonctionnalités principales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => navigate(action.path)}
                  className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-100 transition-colors">
                      {action.icon}
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-blue-600 transition-colors">
                      Ouvrir
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-slate-900">{action.label}</p>
                    <p className="text-xs text-slate-500">Accès direct</p>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 lg:grid-cols-7">
          {/* Recent Activity */}
          <Card className="lg:col-span-4 border-slate-200/60">
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
              <CardDescription>Les dernières actions sur la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {recentActivities.map((activity, idx) => (
                  <li key={activity.id} className="relative">
                    <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3 hover:bg-slate-50 transition-colors">
                      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-blue-50">
                        {activityIcon(activity.type)}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-medium text-slate-900 truncate">{activity.message}</p>
                          <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
                        </div>
                        <p className="text-sm text-slate-600 truncate">{activity.user}</p>
                      </div>
                    </div>

                    {idx !== recentActivities.length - 1 && (
                      <span className="absolute left-[22px] top-[52px] h-4 w-px bg-slate-200" />
                    )}
                  </li>
                ))}
              </ol>

              <Button variant="ghost" className="w-full mt-4">
                Voir tout
              </Button>
            </CardContent>
          </Card>

          {/* Weekly Summary */}
          <Card className="lg:col-span-3 border-slate-200/60">
            <CardHeader>
              <CardTitle>Aperçu</CardTitle>
              <CardDescription>Résumé de cette semaine</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Nouveaux likes', value: '248', icon: <Heart className="h-4 w-4" />, bg: 'bg-emerald-50', fg: 'text-emerald-700' },
                { label: 'Messages', value: '47', icon: <Mail className="h-4 w-4" />, bg: 'bg-blue-50', fg: 'text-blue-700' },
                { label: 'Photos ajoutées', value: '156', icon: <ImageIcon className="h-4 w-4" />, bg: 'bg-purple-50', fg: 'text-purple-700' },
                { label: "Taux d'engagement", value: '92%', icon: <TrendingUp className="h-4 w-4" />, bg: 'bg-orange-50', fg: 'text-orange-700' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-xl border border-slate-100 p-4 ${item.bg}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-9 w-9 place-items-center rounded-full bg-white/70 ${item.fg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{item.label}</p>
                      <p className="text-2xl font-semibold tracking-tight text-slate-900">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}