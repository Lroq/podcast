import React from 'react';
import { Play, Download, Star } from 'lucide-react';
import SubscribeModal from './SubscribeModal';

const Hero = () => {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = React.useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-gray-900/85 to-blue-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Rating */}
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-300">4.8/5 • Plus de 10k abonnés</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent">
            Tech Talk
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Votre rendez-vous hebdomadaire avec l'innovation
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez les dernières tendances technologiques, rencontrez des entrepreneurs visionnaires 
            et explorez l'avenir du numérique avec nos experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Écouter maintenant</span>
            </button>
            
            <button 
              onClick={() => setIsSubscribeModalOpen(true)}
              className="group border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-3"
            >
              <Download className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>S'abonner</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">150+</div>
              <div className="text-gray-400 text-sm">Épisodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50k+</div>
              <div className="text-gray-400 text-sm">Téléchargements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.8★</div>
              <div className="text-gray-400 text-sm">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
      
      <SubscribeModal 
        isOpen={isSubscribeModalOpen} 
        onClose={() => setIsSubscribeModalOpen(false)} 
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;