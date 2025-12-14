import { Calendar, MapPin, X } from 'lucide-react';
import { useState } from 'react';

interface Activity {
  place: string;
  description: string;
  image: string;
}

interface DayCardProps {
  day: number;
  title: string;
  date: string;
  activities: Activity[];
}

export default function DayCard({ day, title, date, activities }: DayCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 border-pink-200">
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Day {day}</h2>
              <h3 className="text-xl text-white/90">{title}</h3>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Calendar className="text-white" size={20} />
              <span className="text-white font-medium">{date}</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-5 border border-pink-100"
            >
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="text-pink-500 mt-1" size={20} />
                <h4 className="text-xl font-semibold text-gray-800">
                  {activity.place}
                </h4>
              </div>

              <p className="text-gray-700 mb-4 ml-8">
                {activity.description}
              </p>

              {/* CLICKABLE IMAGE */}
              <div className="ml-8">
                <img
                  src={activity.image}
                  alt={activity.place}
                  onClick={() => setSelectedImage(activity.image)}
                  className="cursor-pointer w-full max-h-80 object-cover rounded-xl border-2 border-pink-200 shadow-md hover:scale-105 transition-transform"
                />
                <p className="text-xs text-gray-500 mt-1 text-center">
                  Click image to view full size
                </p>
              </div>
            </div>
          ))}
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
              alt="Full view"
              className="w-full max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
