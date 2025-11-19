import React from 'react'

const items = [
  {
    title: 'Real-time Materials',
    desc: 'Switch finishes, colors, and textures instantly with zero-code presets.',
  },
  {
    title: 'Analytics Ready',
    desc: 'Track interactions, hotspots, and conversions with built-in events.',
  },
  {
    title: 'Embeddable',
    desc: 'Drop into any site with a single script and secure tokens.',
  },
  {
    title: 'Enterprise-grade',
    desc: 'SSO, role-based access, and global edge delivery.',
  },
]

function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Why it feels like magic</h2>
          <p className="mt-3 text-white/70">Under the hood is a WebGL pipeline tuned for clarity, speed, and control.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7.5 transition">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
