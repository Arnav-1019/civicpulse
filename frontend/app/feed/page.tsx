'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Article {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export default function SocialRadarFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTag, setActiveTag] = useState<string>('all');

  // Strict Social Cause Queries for GNews API
  const queries: Record<string, string> = {
    all: '(environment OR NGO OR youth volunteer OR cleanliness OR Swachh Bharat OR child education) AND India',
    cleanliness: '(cleanliness OR Swachh Bharat OR waste management OR river cleanup) AND India',
    education: '(child education OR NGO school OR digital literacy OR youth mentorship) AND India',
    safety: '(public safety OR street lighting OR urban infrastructure OR civic action) AND India',
  };

  const fetchSocialNews = async (tagKey: string) => {
    setLoading(true);
    const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
    const query = encodeURIComponent(queries[tagKey] || queries.all);

    if (!apiKey) {
      // Fallback Data if API Key is not added yet
      setArticles([
        {
          title: "National River Sanitation & Youth Volunteer Campaign 2026",
          description: "Thousands of college students across multiple states join hands to test water quality, reduce single-use plastic, and restore local riverbanks.",
          url: "https://www.ndtv.com",
          publishedAt: new Date().toISOString(),
          source: { name: "NDTV Social Impact" }
        },
        {
          title: "Digital Literacy NGO Drive Reaches 100+ Rural School Centers",
          description: "Tech student volunteers partner with local NGOs to set up refurbished computer labs and teach coding basics to underprivileged children.",
          url: "https://timesofindia.indiatimes.com",
          publishedAt: new Date().toISOString(),
          source: { name: "Times of India" }
        }
      ]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=10&apikey=${apiKey}`
      );
      const data = await res.json();
      if (data.articles) {
        setArticles(data.articles);
      }
    } catch (err) {
      console.error("Failed to fetch live social news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocialNews(activeTag);
  }, [activeTag]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
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
            <Link href="/feed" className="text-teal-400 font-bold">Social Radar</Link>
            <Link 
              href="/report" 
              className="bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-full shadow-md text-xs"
            >
              + Report Issue
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Social Feed */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full flex-grow">
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Automated Daily Live Feed
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-3">
            National & State <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Social Cause Radar</span>
          </h1>
          <p className="mt-3 text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Real-time coverage strictly filtered for environment, youth volunteering, child welfare, and civic initiatives. Click any card to read full stories on original news portals.
          </p>

          {/* Social Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { label: 'All Social Causes', key: 'all' },
              { label: 'Cleanliness & River Care', key: 'cleanliness' },
              { label: 'Child & Youth Education', key: 'education' },
              { label: 'Civic & Public Safety', key: 'safety' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTag(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTag === tab.key
                    ? 'bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Articles Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm mt-4">Fetching live social cause headlines...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-teal-500/50 transition-all backdrop-blur-md shadow-xl hover:shadow-teal-500/10 relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-semibold">
                    Social Impact
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.source.name} • {new Date(item.publishedAt).toLocaleDateString()}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {item.title}
                </h2>

                <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-6 flex justify-between items-center text-xs font-semibold text-slate-400 pt-4 border-t border-slate-800/80">
                  <span className="text-slate-500">📍 Live Verified Article</span>
                  <span className="text-teal-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Full News ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-6 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} InAmigos Foundation Partnership — CivicPulse Project.
      </footer>
    </div>
  );
}
