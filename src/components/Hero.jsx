import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(59,130,246,0.25),rgba(14,165,233,0.12)_40%,transparent_70%)]" />

      {/* Spline 3D scene */}
      <div className="relative z-10 h-[60vh] sm:h-[70vh] lg:h-[75vh]">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Configure 3D like Google, but for your product
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70">
              A futuristic, minimal WebGL experience to showcase variants, materials, and interactions. Seamlessly embed, customize, and measure engagement.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 pointer-events-auto">
              <a href="#try" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-semibold px-5 py-3 shadow-[0_10px_30px_rgba(34,211,238,0.35)] hover:brightness-110 transition">
                Try live configurator
              </a>
              <a href="#docs" className="inline-flex items-center justify-center rounded-xl border border-white/15 text-white px-5 py-3 hover:bg-white/5 transition">
                Read the docs
              </a>
            </div>

            {/* Trusted by */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
              <div className="h-10 rounded bg-white/5" />
              <div className="h-10 rounded bg-white/5" />
              <div className="h-10 rounded bg-white/5" />
              <div className="h-10 rounded bg-white/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Top gradient veil to enhance contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
    </section>
  )
}

export default Hero
