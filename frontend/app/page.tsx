'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white relative overflow-hidden">
      
      {/* 📸 DIRECT VISIBLE BACKDROP IMAGE WITH GRADIENT OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1920&auto=format&fit=crop"
          alt="Indian Social Work Volunteers Backdrop"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
      </div>

      {/* Dynamic Ambient Blur Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-600 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg shadow-teal-500/20">
              IP
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-teal-400 bg-clip-text text-transparent">
              InAmigos Pulse
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition-colors">About Us</a>
            <a href="#impact" className="hover:text-teal-400 transition-colors">Our Impact</a>
            <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
            <a href="#civicpulse" className="hover:text-teal-400 transition-colors">CivicPulse Tool</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </nav>

          <a 
            href="#civicpulse" 
            className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-teal-500/25 transition-all text-sm"
          >
            Launch CivicPulse
          </a>
        </div>
      </header>

      {/* Main Page Body */}
      <main className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="py-24 text-center flex flex-col items-center justify-center min-h-[85vh]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-medium mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Empowering Youth & Neighborhood Transformation
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight drop-shadow-md">
            Grassroots Action Meets <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">Digital Innovation</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed drop-shadow">
            Connecting citizens, non-profits, and youth volunteers to bring smiles, support children, and resolve hyper-local urban challenges together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link 
              href="/report" 
              className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:scale-105 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-teal-500/20 transition-all text-base"
            >
              Explore CivicPulse App
            </Link>
            <a 
              href="#about" 
              className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all text-base backdrop-blur-md"
            >
              Our Mission
            </a>
          </div>
        </section>

        {/* PHOTO GALLERY GRID */}
        <section id="impact" className="py-12 border-t border-slate-800/60">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold tracking-widest text-teal-400 uppercase">Youth & Child Welfare</h2>
            <h3 className="text-3xl font-extrabold text-white mt-1">Moments of Joy & Community Action</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop"
                alt="Happy Children"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs text-teal-400 font-semibold">Youth Empowerment</span>
                <h4 className="text-lg font-bold text-white">Nurturing Bright Futures</h4>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
                alt="NGO Volunteers Working"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs text-teal-400 font-semibold">Community Support</span>
                <h4 className="text-lg font-bold text-white">Volunteers in Action</h4>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop"
                alt="Children Smiling"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs text-teal-400 font-semibold">Grassroots Welfare</span>
                <h4 className="text-lg font-bold text-white">Transforming Neighborhoods</h4>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section id="about" className="py-20 border-t border-slate-800/60">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-teal-400 uppercase">About InAmigos Foundation Partnership</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Driven by Purpose, Powered by Community</h3>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We are dedicated to fostering social innovation and empowering youth to take ownership of local infrastructure, education, and environmental challenges. By combining digital organization tools with hands-on social work, we ensure no community report goes unaddressed.
              </p>
              <div className="mt-6 space-y-3">
                {['100% Transparent Citizen Issue Tracking', 'Youth-Driven Skill Volunteering Initiatives', 'Micro-Funded Hyper-Local Resolution'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-bold">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative p-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=800&auto=format&fit=crop"
                  alt="NGO Community Drive"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
                
                <div className="absolute inset-0 p-6 grid grid-cols-2 gap-4 items-center justify-center">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md text-center">
                    <div className="text-3xl font-extrabold text-teal-400">50+</div>
                    <div className="text-xs text-slate-300 mt-1 uppercase font-semibold">Urban Spots Fixed</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md text-center">
                    <div className="text-3xl font-extrabold text-emerald-400">1.2k+</div>
                    <div className="text-xs text-slate-300 mt-1 uppercase font-semibold">Active Volunteers</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md text-center">
                    <div className="text-3xl font-extrabold text-blue-400">100%</div>
                    <div className="text-xs text-slate-300 mt-1 uppercase font-semibold">Open Source Tech</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md text-center">
                    <div className="text-3xl font-extrabold text-purple-400">₹0</div>
                    <div className="text-xs text-slate-300 mt-1 uppercase font-semibold">Admin Overhead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-teal-400 uppercase">Core Services & Operations</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-2">How We Transform Communities</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Civic Issue Reporting", desc: "Allows citizens to log localized urban issues with geolocation and media proof instantly.", bg: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop" },
              { title: "Skill-Based Volunteering", desc: "Organizes student groups and local youth teams to fix physical defects using specialized talents.", bg: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=600&auto=format&fit=crop" },
              { title: "Micro-Funding Pledges", desc: "Facilitates transparent small-scale crowd pledges to directly procure required repair materials.", bg: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop" }
            ].map((service, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-xl bg-slate-900">
                <div className="relative h-44 w-full">
                  <img src={service.bg} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-700 flex items-center justify-center text-teal-400 font-bold text-sm shadow-md backdrop-blur-md">
                    0{idx + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CIVICPULSE BANNER */}
        <section id="civicpulse" className="py-20 border-t border-slate-800/60">
          <div className="relative p-10 md:p-16 rounded-3xl border border-teal-500/30 shadow-2xl overflow-hidden bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop"
              alt="Community Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                Flagship Tech Feature
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
                CivicPulse: Hyper-Local Action Engine
              </h3>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                Access our real-time geospatial reporting platform. Report potholes, street issues, and sanitation problems, track nearby unresolved incidents, or pledge micro-funds directly.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/report" 
                  className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  Submit Civic Issue
                </Link>
                <Link 
                  href="/issues" 
                  className="bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all backdrop-blur-md"
                >
                  View Nearby Issues
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT US SECTION */}
        <section id="contact" className="py-20 border-t border-slate-800/60">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-teal-400 uppercase">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Connect With Our Team</h3>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Have questions regarding volunteering, platform partnerships, or community sponsorship? Drop us a message!
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 text-lg">✉</div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Demo Email Address</div>
                    <div className="text-slate-200 font-semibold">contact@inamigos-civicpulse.org</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 text-lg">📍</div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Headquarters</div>
                    <div className="text-slate-200 font-semibold">InAmigos Foundation Hub, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-xl backdrop-blur-md">
              {formSubmitted ? (
                <div className="p-8 text-center bg-teal-500/10 border border-teal-500/30 rounded-xl">
                  <h4 className="text-2xl font-bold text-teal-300">Message Received!</h4>
                  <p className="text-slate-400 mt-2 text-sm">Thank you for reaching out to InAmigos CivicPulse. We will reply shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="demo@inamigos.org"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Message</label>
                    <textarea 
                      rows={4}
                      required 
                      placeholder="How would you like to collaborate?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-bold transition-all shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} InAmigos Foundation Partnership — CivicPulse Project.</p>
      </footer>
    </div>
  );
}
