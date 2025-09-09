import React from 'react';
import { Play, Pause, Download, Calendar, Clock, Mic, Users, Star } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Episodes from './components/Episodes';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Episodes />
      <About />
      <Footer />
    </div>
  );
}

export default App;