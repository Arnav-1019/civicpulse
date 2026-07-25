'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReportPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Lighting & Night Safety',
    description: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden flex flex-col justify-between">
      
      {/* 📸 TRANSLUCENT MULTI-PHOTO BACKDROP COLLAGE */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 grid grid-cols-2 md:grid-cols-4 gap-2 p-2 filter blur-[1px]">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop"
          alt="Happy Children"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop"
          alt="Community Work"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600&auto=format&fit=crop"
          alt="Children Smiling"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop"
          alt="Helping Elderly"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=600&auto=format&fit=crop"
          alt="Volunteers Group"
          className="w-full h-full object-cover rounded-lg hidden md:block"
        />
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop"
          alt="Child Education Support"
          className="w-full h-full object-cover rounded-lg hidden md:block"
        />
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
          alt="Community Social Work"
          className="w-full h-full object-cover rounded-lg hidden md:block"
        />
        <img
          src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=600&auto=format&fit=crop"
          alt="Teamwork Volunteering"
          className="w-full h-full object-cover rounded-lg hidden md:block"
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950"></div>

      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl"></div>
      </div>

      {/* HEADER NAVIGATION */}
      <header className="relative z-20 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-600 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg shadow-teal-500/20">
              IP
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-teal-400 bg-clip-text text-transparent">
              CivicPulse
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link href="/issues" className="hover:text-teal-400 transition-colors">Live Feed</Link>
            <Link 
              href="/report" 
              className="bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-full shadow-md text-xs"
            >
              + Report Issue
            </Link>
          </nav>
        </div>
      </header>

      {/* REPORT FORM SECTION */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-12 w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
            Report a Local Issue
          </h1>
          <p className="mt-2 text-slate-300 text-sm md:text-base">
            Publish an issue to the community grid so local volunteers and NGOs can fix it.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-teal-500/30">
                ✓
              </div>
              <h2 className="text-2xl font-bold text-white">Issue Published to Grid!</h2>
              <p className="text-slate-400 text-sm">Local volunteers and partners will review this shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-400 font-semibold text-sm transition-colors cursor-pointer"
              >
                Report Another Issue
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Issue Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Unlit Alley Near Campus Gate (Unsafe at Night)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500 transition-colors"
                >
                  <option>Lighting & Night Safety</option>
                  <option>Pothole & Road Repair</option>
                  <option>Sanitation & Cleanliness</option>
                  <option>Park & Public Space Maintenance</option>
                  <option>Child & Senior Support Initiative</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Detailed Description & Required Skills
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Explain what needs fixing and specify what resources are needed (e.g., 2 LED floodlights, 1 student electrician, 2 painters)..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Location / Ward Landmark
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Ward 12, Raj Nagar Main Gate"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-teal-500/20 text-base cursor-pointer"
              >
                Submit Issue to Grid
              </button>
            </form>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-slate-500 text-xs backdrop-blur-md">
        © {new Date().getFullYear()} InAmigos Foundation Partnership — CivicPulse Project.
      </footer>
    </div>
  );
}