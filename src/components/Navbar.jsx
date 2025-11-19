import React from 'react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.45)]" />
          <span className="text-white/90 font-semibold tracking-tight">WebGL Configurator</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#showcase" className="hover:text-white transition">Showcase</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#docs" className="hover:text-white transition">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex rounded-lg px-4 py-2 text-sm text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition">Sign in</button>
          <button className="inline-flex rounded-lg px-4 py-2 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 transition shadow">
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
