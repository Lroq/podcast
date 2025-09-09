
import { Mic, Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Tech Talk</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Votre rendez-vous hebdomadaire avec l'innovation technologique. 
              Découvrez, apprenez et inspirez-vous avec nos experts.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/techtalk" className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/c/TechTalk" className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:contact@techtalk.com" className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#episodes" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Tous les épisodes
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  À propos
                </a>
              </li>
              <li>
                <a href="mailto:contact@techtalk.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://www.getrevue.co/profile/techtalk" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">S'abonner</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://open.spotify.com/genre/0JQ5DArNBzkmxXHCqFLx2J" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/fr/apple-podcasts/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a href="https://www.stitcher.com/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Stitcher
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Tech Talk. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;