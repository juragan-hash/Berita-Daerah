import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Members from './pages/Members';
import Contact from './pages/Contact';
import NewsDetail from './pages/NewsDetail'; // Import baru

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-light text-brand-dark min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/berita" element={<News />} />
            <Route path="/berita/:id" element={<NewsDetail />} /> {/* Rute baru ditambahkan */}
            <Route path="/anggota" element={<Members />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;