import { useState } from 'react';
import { Play, Download, Calendar, Clock, X } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  image: string;
  video: string;
}

const Episodes = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const episodes: Episode[] = [
    {
      id: 1,
      title: "L'avenir de l'Intelligence Artificielle",
      description: "Une discussion approfondie sur les dernières avancées en IA avec des experts du domaine.",
      duration: "45:30",
      date: "15 Jan 2025",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      video: "https://www.youtube.com/watch?v=9TGlc0Fufgk&list=RD9TGlc0Fufgk&start_radio=1&pp=oAcB"
    },
    {
      id: 2,
      title: "Blockchain et Crypto : Révolution ou Bulle ?",
      description: "Analyse des tendances actuelles du marché des cryptomonnaies et de la technologie blockchain.",
      duration: "52:15",
      date: "08 Jan 2025",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      video: "https://www.youtube.com/watch?v=video2"
    },
    {
      id: 3,
      title: "Startup Nation : Success Stories",
      description: "Rencontre avec des entrepreneurs qui ont transformé leurs idées en entreprises prospères.",
      duration: "38:45",
      date: "01 Jan 2025",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      video: "https://www.youtube.com/watch?v=video3"
    },
    {
      id: 4,
      title: "Cybersécurité : Protéger le Futur",
      description: "Comment se prémunir contre les cyberattaques dans un monde de plus en plus connecté.",
      duration: "41:20",
      date: "25 Déc 2024",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      video: "https://www.youtube.com/watch?v=video4"
    }
  ];


  // Ouvre la popup avec la vidéo
  const handlePlay = (videoUrl: string, id: number) => {
    setCurrentVideo(videoUrl);
    setPlayingId(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentVideo(null);
    setPlayingId(null);
  };

  return (
    <section id="episodes" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Épisodes Récents
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez nos derniers épisodes et plongez dans l'univers fascinant de la technologie
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {episodes.map((episode, index) => (
            <div 
              key={episode.id}
              className="group bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl p-6 hover:from-gray-700/60 hover:to-gray-600/40 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm border border-gray-700/50"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Episode Image */}
                <div className="relative flex-shrink-0 w-full md:w-32 h-48 md:h-32 rounded-xl overflow-hidden">
                  <img 
                    src={episode.image} 
                    alt={episode.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  {/* Episode Number */}
                  <div className="absolute top-2 left-2 bg-purple-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                    #{episodes.length - index}
                  </div>
                </div>

                {/* Episode Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {episode.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{episode.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {episode.description}
                  </p>
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handlePlay(episode.video, episode.id)}
                      className="group/btn bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
                    >
                      <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">Écouter</span>
                    </button>
                    <button className="group/btn text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300">
                      <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span>Télécharger</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal vidéo */}
        {modalOpen && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative bg-gray-900 rounded-2xl shadow-lg max-w-2xl w-full p-4">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-white p-2 rounded-full transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={getYoutubeEmbedUrl(currentVideo)}
                  title="Lecture de l'épisode"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-80 rounded-xl border-0"
                />
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Voir tous les épisodes
          </button>
        </div>
      </div>
    </section>
  );

  // Fonction utilitaire pour transformer une URL YouTube en embed
  function getYoutubeEmbedUrl(url: string) {
    // Gère les liens classiques et les liens courts
    const reg = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(reg);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
    return url;
  }
};

export default Episodes;