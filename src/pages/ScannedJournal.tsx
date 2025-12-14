import { BookOpen, Image as ImageIcon, X } from 'lucide-react';
import { useState } from 'react';

export default function ScannedJournal() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const journals = [
    { id: 1, label: 'journal-page-1.jpg' },
    { id: 2, label: 'journal-page-2.jpg' },
    { id: 3, label: 'journal-page-3.jpg' },
    { id: 4, label: 'journal-page-4.jpg' },
    { id: 5, label: 'journal-page-5.jpg' },
    { id: 6, label: 'journal-page-6.jpg' },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Scanned Journal
          </h1>
          <p className="text-xl text-gray-700 flex justify-center gap-2">
            <BookOpen className="text-pink-500" />
            My Personal Reflections & Notes
          </p>
        </div>

        {/* JOURNAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {journals.map((journal) => {
            const imagePath = new URL(
              `../images/${journal.label}`,
              import.meta.url
            ).href;

            return (
              <div
                key={journal.id}
                className="bg-white/90 rounded-2xl shadow-xl border-2 border-pink-200 hover:shadow-2xl transition"
              >
                <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-4">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <BookOpen size={20} />
                    Journal Page {journal.id}
                  </h3>
                </div>

                <div className="p-6">
                  <img
                    src={imagePath}
                    alt={`Journal Page ${journal.id}`}
                    onClick={() => setSelectedImage(imagePath)}
                    className="cursor-pointer w-full aspect-[3/4] object-cover rounded-xl border-2 border-pink-200 shadow-md hover:scale-105 transition-transform"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Click image to view full size
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white hover:text-pink-400"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage}
              alt="Full journal page"
              className="w-full max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
