import { useState } from 'react';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import EducationTour from './pages/EducationTour';
import ScannedJournal from './pages/ScannedJournal';
import Certifications from './pages/Certifications';

type Page = 'about' | 'tour' | 'journal' | 'certifications';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutMe />;
      case 'tour':
        return <EducationTour />;
      case 'journal':
        return <ScannedJournal />;
      case 'certifications':
        return <Certifications />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
