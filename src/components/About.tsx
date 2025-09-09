import React from 'react';
import { Users, Mic, Award, Globe } from 'lucide-react';

const About = () => {
  const hosts = [
    {
      name: "Sarah Martin",
      role: "Animatrice principale",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Journaliste tech avec 10 ans d'expérience dans l'innovation."
    },
    {
      name: "Alexandre Durand",
      role: "Expert Tech",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Ingénieur en IA et entrepreneur dans la tech depuis 15 ans."
    }
  ];

  const stats = [
    { icon: Users, value: "50k+", label: "Auditeurs mensuels" },
    { icon: Mic, value: "150+", label: "Épisodes publiés" },
    { icon: Award, value: "4.8★", label: "Note moyenne" },
    { icon: Globe, value: "25+", label: "Pays d'écoute" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À Propos de Tech Talk
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Depuis 3 ans, nous explorons l'univers fascinant de la technologie à travers des interviews 
            exclusives, des analyses approfondies et des discussions passionnantes avec les acteurs 
            qui façonnent notre avenir numérique.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hosts */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Nos Animateurs</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {hosts.map((host, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-purple-500/30 group-hover:ring-purple-400/50 transition-all duration-300">
                    <img 
                      src={host.image} 
                      alt={host.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {host.role}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {host.name}
                </h4>
                <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">
                  {host.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Démocratiser la compréhension des technologies émergentes et inspirer la prochaine 
              génération d'innovateurs. Chaque semaine, nous décryptons les tendances, analysons 
              les opportunités et donnons la parole aux visionnaires qui construisent le monde de demain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;