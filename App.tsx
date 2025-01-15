import React from 'react';
import { MessageSquare, Github, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white">
      <header className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Echo RP
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#join" className="hover:text-purple-400 transition-colors">Join Us</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Welcome to Echo RP
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience roleplay like never before in our immersive FiveM community. 
            Join a world where your story matters.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://discord.gg/echorp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Join Discord
            </a>
            <a 
              href="#features"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              <Heart className="w-5 h-5" />
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Why Choose Echo RP?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all">
              <h4 className="text-2xl font-semibold mb-4 text-purple-400">Immersive Experience</h4>
              <p className="text-gray-300">Custom scripts and mechanics that create a truly unique and engaging roleplay environment.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all">
              <h4 className="text-2xl font-semibold mb-4 text-purple-400">Active Community</h4>
              <p className="text-gray-300">Join our thriving community of dedicated roleplayers and make lasting connections.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all">
              <h4 className="text-2xl font-semibold mb-4 text-purple-400">Regular Updates</h4>
              <p className="text-gray-300">Constant improvements and new content to keep the experience fresh and exciting.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About Echo RP
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Echo RP is a premier FiveM roleplay community dedicated to providing the most immersive and 
              enjoyable RP experience possible. Our server features custom scripts, unique jobs, and a 
              dedicated staff team to ensure the best possible environment for our players.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <h4 className="text-4xl font-bold text-purple-400 mb-2">500+</h4>
                <p className="text-gray-400">Active Players</p>
              </div>
              <div className="p-6">
                <h4 className="text-4xl font-bold text-purple-400 mb-2">50+</h4>
                <p className="text-gray-400">Custom Jobs</p>
              </div>
              <div className="p-6">
                <h4 className="text-4xl font-bold text-purple-400 mb-2">24/7</h4>
                <p className="text-gray-400">Server Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="py-20 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Ready to Join?
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our Discord server to get started. Our friendly community will help you get set up and 
            begin your journey in Echo RP.
          </p>
          <a 
            href="https://discord.gg/echorp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] px-12 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            <MessageSquare className="w-6 h-6" />
            Join Our Discord
          </a>
        </div>
      </section>

      <footer className="bg-black/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                Echo RP
              </h4>
              <p className="text-gray-400">Where Your Story Comes Alive</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://discord.gg/echorp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#5865F2] transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/echorp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Echo RP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;