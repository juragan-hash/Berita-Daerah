import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS_ARTICLES } from '../constants';
import type { NewsArticle } from '../types';

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

const FeaturedArticle: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:order-2">
                 <img className="w-full h-64 md:h-full object-cover" src={article.imageUrl} alt={article.title} />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center md:order-1">
                <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-2">Unggulan</span>
                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">{article.title}</h2>
                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                 <div className="text-xs text-gray-500 mb-6">
                    <span>By {article.author}</span> &bull; <span>{article.date}</span>
                </div>
                <Link to={`/berita/${article.id}`} className="self-start bg-brand-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Baca Selengkapnya
                </Link>
            </div>
        </div>
    </div>
);


const News: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

    const featuredArticle = MOCK_NEWS_ARTICLES[0];
    const otherArticles = MOCK_NEWS_ARTICLES.slice(1);

    const categories = useMemo(() => {
        const allCategories = MOCK_NEWS_ARTICLES.map(article => article.category);
        return ['Semua', ...new Set(allCategories)];
    }, []);

    const filteredArticles = useMemo(() => {
        if (selectedCategory === 'Semua') {
            return otherArticles;
        }
        return otherArticles.filter(article => article.category === selectedCategory);
    }, [selectedCategory]);


    return (
        <div className="bg-gray-50">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-serif text-brand-dark">Berita & Kegiatan</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Kumpulan berita, liputan, dan informasi kegiatan dari PWMOI DPD Banyuwangi.
                    </p>
                </div>

                {featuredArticle && <FeaturedArticle article={featuredArticle} />}

                <div className="mb-12">
                     <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-brand-blue text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map(article => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
                 {filteredArticles.length === 0 && (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-12 bg-white rounded-lg shadow-md">
                        <p className="text-gray-500">Tidak ada berita dalam kategori ini.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;