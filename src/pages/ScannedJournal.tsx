import { BookOpen, Image as ImageIcon } from 'lucide-react';

export default function ScannedJournal() {
  const journals = [
    { id: 1, label: "journal-page-1.jpg" },
    { id: 2, label: "journal-page-2.jpg" },
    { id: 3, label: "journal-page-3.jpg" },
    { id: 4, label: "journal-page-4.jpg" },
    { id: 5, label: "journal-page-5.jpg" },
    { id: 6, label: "journal-page-6.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Scanned Journal
          </h1>
          <div className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
        </div>
        <p className="text-xl text-gray-700 mt-6 flex items-center justify-center gap-2">
          <BookOpen className="text-pink-500" size={24} />
          <span>My Personal Reflections & Notes</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {journals.map((journal) => (
          <div
            key={journal.id}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <BookOpen size={20} />
                Journal Page {journal.id}
              </h3>
            </div>

            <div className="p-6">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-2 border-dashed border-pink-200 overflow-hidden">
                <div className="aspect-[3/4] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-lg font-medium mb-1">{journal.label}</p>
                    <p className="text-sm text-gray-400">Add your scanned journal page here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl border-2 border-pink-200 text-center">
        <p className="text-gray-700 italic flex items-center justify-center gap-2 flex-wrap">
          <ImageIcon className="text-purple-500" size={20} />
          To add your journal scans, replace the placeholder images in the
          <code className="bg-white px-2 py-1 rounded text-sm mx-2">public/images/journal</code>
          folder with your scanned pages using the filenames shown above.
        </p>
      </div>
    </div>
  );
}
