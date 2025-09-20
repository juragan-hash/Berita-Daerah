import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS_ARTICLES, MOCK_STRATEGIC_PARTNERS, MOCK_MEMBERS } from '../constants';
import type { NewsArticle, Member } from '../types';

const HeroSection: React.FC = () => (
    <div className="bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center max-w-[1100px]">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-brand-dark mb-4">
                Wadah Jurnalis Media Online Profesional Banyuwangi
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Bersinergi, Berkembang, dan Menyajikan Informasi Terpercaya untuk Kemajuan Daerah.
            </p>
            <Link 
                to="/tentang-kami" 
                className="bg-brand-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
                Selengkapnya
            </Link>
        </div>
    </div>
);

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
        <Link to={`/berita/${article.id}`} className="block">
            <img className="w-full h-56 object-cover" src={article.imageUrl} alt={article.title} />
        </Link>
        <div className="p-6 flex flex-col flex-grow">
            <span className="text-sm text-brand-blue font-semibold">{article.category}</span>
            <h3 className="font-serif font-bold text-xl mt-2 mb-2 flex-grow">
                <Link to={`/berita/${article.id}`} className="hover:text-brand-blue transition-colors duration-300">
                    {article.title}
                </Link>
            </h3>
            <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
            <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500">
                <span>By {article.author}</span> &bull; <span>{article.date}</span>
            </div>
        </div>
    </div>
);

const LatestNews: React.FC = () => (
    <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-serif text-brand-dark">Berita Terbaru</h2>
                <p className="mt-2 text-gray-600">Ikuti perkembangan dan kegiatan terbaru kami.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_NEWS_ARTICLES.slice(0, 3).map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/berita" className="text-brand-green hover:underline font-semibold text-lg">
                    Lihat Semua Berita &rarr;
                </Link>
            </div>
        </div>
    </div>
);

const CollaborationSpotlight: React.FC = () => (
    <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <span className="text-brand-blue font-semibold">Kolaborasi Berdampak</span>
                    <h2 className="text-3xl font-bold font-serif text-brand-dark mt-2 mb-4">Sinergi Membangun Daerah</h2>
                    <p className="text-gray-600 mb-6">
                        Kami percaya bahwa kolaborasi adalah kunci. Bersama pemerintah daerah, BUMN, dan sektor swasta, kami aktif mendorong transparansi informasi dan mendukung program-program pembangunan untuk kemajuan Banyuwangi.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 bg-green-100 text-brand-green rounded-full flex items-center justify-center mr-4">✓</div>
                            <span className="text-gray-700">Publikasi program pemerintah yang transparan dan akurat.</span>
                        </li>
                        <li className="flex items-start">
                             <div className="flex-shrink-0 h-6 w-6 bg-green-100 text-brand-green rounded-full flex items-center justify-center mr-4">✓</div>
                            <span className="text-gray-700">Promosi potensi pariwisata dan UMKM lokal.</span>
                        </li>
                        <li className="flex items-start">
                             <div className="flex-shrink-0 h-6 w-6 bg-green-100 text-brand-green rounded-full flex items-center justify-center mr-4">✓</div>
                            <span className="text-gray-700">Penyelenggaraan seminar dan pelatihan untuk publik.</span>
                        </li>
                    </ul>
                     <Link to="/kontak" className="mt-8 inline-block bg-brand-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                        Jajaki Kemitraan
                    </Link>
                </div>
                <div className="order-1 md:order-2">
                    <img src="https://picsum.photos/seed/collaboration/800/600" alt="Kolaborasi PWMOI Banyuwangi" className="rounded-lg shadow-xl w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
);

const FeaturedJournalists: React.FC = () => (
    <div className="bg-brand-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-serif text-brand-dark">Jurnalis Unggulan Kami</h2>
                <p className="mt-2 text-gray-600">Berkenalan dengan beberapa pilar di balik berita terpercaya.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {MOCK_MEMBERS.slice(0, 4).map((member: Member) => (
                    <div key={member.id} className="text-center">
                        <img className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow-md" src={member.imageUrl} alt={member.name} />
                        <h3 className="text-lg font-bold text-brand-dark">{member.name}</h3>
                        <p className="text-gray-600">{member.media}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/anggota" className="text-brand-blue hover:underline font-semibold text-lg">
                    Lihat Direktori Lengkap &rarr;
                </Link>
            </div>
        </div>
    </div>
);


const PartnersSection: React.FC = () => (
    <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
            <h2 className="text-center text-2xl font-bold text-brand-dark mb-10">
                Dipercaya oleh Mitra Strategis
            </h2>
            <div className="scroller" data-animated="true">
                <div className="scroller__inner">
                    {[...MOCK_STRATEGIC_PARTNERS, ...MOCK_STRATEGIC_PARTNERS].map((partner, index) => (
                        <div key={`${partner.id}-${index}`} title={partner.name} className="flex-shrink-0">
                            <img 
                                src={partner.logoUrl} 
                                alt={partner.name} 
                                className="h-12 md:h-16 object-contain" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const CallToAction: React.FC = () => (
    <div className="bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center max-w-[1100px]">
            <h2 className="text-3xl font-bold font-serif text-white mb-4">Mari Berkolaborasi!</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Apakah Anda seorang jurnalis yang ingin bergabung atau perwakilan institusi yang ingin bersinergi? Kami membuka pintu untuk Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link 
                    to="/kontak" 
                    className="bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
                >
                    Gabung Sebagai Jurnalis
                </Link>
                 <Link 
                    to="/kontak" 
                    className="bg-brand-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
                >
                    Jadilah Mitra Kami
                </Link>
            </div>
        </div>
    </div>
);


const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <LatestNews />
            <CollaborationSpotlight />
            <FeaturedJournalists />
            <PartnersSection />
            <CallToAction />
        </div>
    );
};

export default Home;