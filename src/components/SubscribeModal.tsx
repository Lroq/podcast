import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const platforms = [
    {
      name: "Spotify",
  icon: <img src="assets/spotify.png" alt="Spotify" style={{ width: '48px', height: '48px' }} />, 
      url: "https://open.spotify.com/genre/0JQ5DArNBzkmxXHCqFLx2J",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "Apple Podcasts",
  icon: <img src="assets/apple.png" alt="Apple Podcasts" style={{ width: '48px', height: '48px' }} />, 
      url: "https://www.apple.com/fr/apple-podcasts/",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      name: "Stitcher",
  icon: <img src="assets/stitcher.png" alt="Stitcher" style={{ width: '48px', height: '48px' }} />, 
      url: "https://www.stitcher.com/",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            S'abonner au Podcast
          </h3>
          <p className="text-gray-400">
            Choisissez votre plateforme préférée
          </p>
        </div>

        {/* Platforms */}
        <div className="space-y-3">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${platform.color} text-white p-4 rounded-xl flex items-center justify-between transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{platform.icon}</span>
                <span className="font-semibold">{platform.name}</span>
              </div>
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
          <h4 className="text-lg font-semibold text-white mb-2">Newsletter</h4>
          <p className="text-gray-300 text-sm mb-4">
            Recevez nos derniers épisodes directement dans votre boîte mail
          </p>
          <div className="flex space-x-2">
            <input 
              type="email" 
              placeholder="votre@email.com"
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors duration-200"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;