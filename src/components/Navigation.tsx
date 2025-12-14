import { User, MapPin, BookOpen, Award } from 'lucide-react';

type Page = 'about' | 'tour' | 'journal' | 'certifications';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'about' as Page, label: 'About Me', icon: User },
    { id: 'tour' as Page, label: 'Education Tour', icon: MapPin },
    { id: 'journal' as Page, label: 'Scanned Journal', icon: BookOpen },
    { id: 'certifications' as Page, label: 'Certifications', icon: Award },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-pink-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Rho Jane Lazarraga
          </h1>
          <div className="flex gap-2 flex-wrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-pink-100 hover:scale-105'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
