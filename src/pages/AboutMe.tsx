import { MapPin, GraduationCap, Mail, Facebook, Instagram } from 'lucide-react';
import profileImg from '../Images/profile.jpg';

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200">
        <div className="h-32 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>

        <div className="relative px-8 pb-8">
          <div className="flex flex-col md:flex-row gap-8 -mt-16">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Rho Jane C. Lazarraga"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-grow mt-6 md:mt-0">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Rho Jane C. Lazarraga
              </h1>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <GraduationCap className="text-pink-500" size={20} />
                  <span className="font-medium">BSIT - 3rd Year</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="text-purple-500" size={20} />
                  <span>Brgy. Tawan-Tawan Baguio District, Davao City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-pink-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></span>
              Connect With Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://web.facebook.com/rhojane.lazarraga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Facebook className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Facebook</p>
                  <p className="text-sm text-gray-600">@rhojane.lazarraga</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/hikarishyet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-rose-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Instagram</p>
                  <p className="text-sm text-gray-600">@hikarishyet</p>
                </div>
              </a>

              <a
                href="mailto:rhojane.lazarraga@hcdc.edu.ph"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-sm text-gray-600 break-all">rhojane.lazarraga@hcdc.edu.ph</p>
                </div>
              </a>
            </div>
          </div>
          

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl border-2 border-pink-100">
            <p className="text-gray-700 leading-relaxed text-center italic">
              "Passionate BSIT student exploring the world of technology and continuous learning"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
