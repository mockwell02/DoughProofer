import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { proofers } from './data/proofers';
import { ProoferCard } from './components/ProoferCard';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Home = () => (
  <>
    <Helmet>
      <title>Best Dough Proofers | Expert Reviews & Ratings</title>
      <meta name="description" content="Compare the top dough proofers with our comprehensive reviews and ratings. Find the perfect proofing solution for your bread making needs." />
    </Helmet>
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Dough Proofers On The Market</h1>
        <p className="text-lg text-gray-600">Compare the top dough proofers with detailed reviews, ratings, and expert recommendations to find the perfect match for your baking needs.</p>
      </div>
      {proofers.map(proofer => (
        <ProoferCard key={proofer.id} proofer={proofer} />
      ))}
    </div>
  </>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link to="/" className="text-3xl font-bold text-gray-900">
                Dough Proofer Directory
              </Link>
              <Link 
                to="/about" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Info className="w-5 h-5" />
                <span>About Us</span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}