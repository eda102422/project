import { Award, Image as ImageIcon } from 'lucide-react';
import certificateImg from '../Images/certificate.jpg';

export default function Certifications() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Certifications
          </h1>
          <div className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
        </div>
        <p className="text-xl text-gray-700 mt-6 flex items-center justify-center gap-2">
          <Award className="text-pink-500" size={24} />
          <span>My Achievements & Credentials</span>
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200">
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
            <Award size={28} />
            Education Tour Certificate
          </h2>
        </div>

        <div className="p-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-dashed border-pink-200 overflow-hidden">
            <div className="aspect-[4/3] flex items-center justify-center p-8">
              <a
                href={certificateImg}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={certificateImg}
                  alt="Education Tour Certificate"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain rounded-md shadow-md"
                />
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl border-2 border-pink-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Award className="text-purple-500" size={24} />
              About This Certificate
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This certificate recognizes my participation and completion of the Education Tour
              to Cebu and Bohol from November 19-22, 2025. During this tour, I gained valuable
              insights into the IT industry, met inspiring professionals, and experienced the
              rich culture of the Visayas region. The tour included company visits to WorldTech
              Information Solutions Inc., Rivan IT Cebu, CIT-University, and Mata Technologies,
              Inc., along with cultural immersion activities.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
