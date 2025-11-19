import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} WebGL Configurator. All rights reserved.</p>
          <div className="flex gap-3 text-xs text-white/50">
            <a href="#privacy" className="hover:text-white/80 transition">Privacy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white/80 transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
