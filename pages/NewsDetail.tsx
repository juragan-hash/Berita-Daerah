import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_NEWS_ARTICLES, MOCK_MEMBERS } from '../constants';
import type { NewsArticle } from '../types';

const AdPlaceholder: React.FC<{ className?: string, title: string }> = ({ className, title }) => (
    <div className={`flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg ${className}`}>
        {title}
    </div>
);

const SocialShareButton: React.FC<{ network: string, children: React.ReactNode }> = ({ network, children }) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    
    let shareUrl = '';
    switch(network) {
        case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
        case 'twitter': shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`; break;
        case 'whatsapp': shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`; break;
        case 'linkedin': shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`; break;
    }

    return (
        <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-blue transition-colors duration-300">
            {children}
        </a>
    )
}

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const article = MOCK_NEWS_ARTICLES.find(a => a.id === Number(id));
    const authorDetails = MOCK_MEMBERS.find(m => m.name === article?.author);
    const relatedArticles = MOCK_NEWS_ARTICLES.filter(a => a.category === article?.category && a.id !== article?.id).slice(0, 2);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        useEffect(() => {
            navigate('/berita');
        },[navigate]);
        return null; // or a loading spinner, or a not-found component
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Main Content */}
                    <main className="lg:col-span-2">
                        <article>
                            {/* Breadcrumbs */}
                            <nav className="text-sm mb-4 text-gray-500">
                                <Link to="/" className="hover:underline">Beranda</Link>
                                <span className="mx-2">&gt;</span>
                                <Link to="/berita" className="hover:underline">Berita</Link>
                            </nav>

                            {/* Header */}
                            <header className="mb-6">
                                <span className="text-brand-blue font-bold uppercase tracking-wider">{article.category}</span>
                                <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-brand-dark my-3">{article.title}</h1>
                                <div className="flex items-center text-sm text-gray-600">
                                    {authorDetails && <img src={authorDetails.imageUrl} alt={authorDetails.name} className="w-8 h-8 rounded-full mr-3" />}
                                    <span>Oleh <strong className="text-brand-dark">{article.author}</strong></span>
                                    <span className="mx-2">&bull;</span>
                                    <span>{article.date}</span>
                                </div>
                            </header>

                             {/* Social Share */}
                            <div className="flex items-center space-x-4 border-y py-3 my-6">
                               <span className="font-semibold text-gray-700">Bagikan:</span>
                               <SocialShareButton network="facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></SocialShareButton>
                               <SocialShareButton network="twitter"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.217 3.797 4.649-.65.177-1.339.23-2.03.173.599 1.939 2.343 3.338 4.418 3.374-1.749 1.378-3.926 2.158-6.117 2.158-.466 0-.922-.027-1.372-.081 2.189 1.408 4.793 2.229 7.622 2.229 9.141 0 14.307-7.721 13.995-14.646.957-.689 1.78-1.56 2.433-2.525z"/></svg></SocialShareButton>
                               <SocialShareButton network="whatsapp"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></SocialShareButton>
                               <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="ml-auto flex items-center space-x-2 text-sm text-gray-600 hover:text-brand-dark p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                  <span>Salin Tautan</span>
                               </button>
                            </div>


                            {/* Featured Image */}
                            <figure className="my-8">
                                <img className="w-full h-auto rounded-lg shadow-lg" src={article.imageUrl} alt={article.title} />
                                <figcaption className="text-center text-sm text-gray-500 mt-2">Sebuah ilustrasi untuk berita yang sedang dibahas.</figcaption>
                            </figure>

                            {/* Article Body */}
                            <div className="prose prose-lg max-w-none text-brand-dark">
                                <p className="lead">{article.excerpt}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                
                                <blockquote>
                                    "Ini adalah kutipan penting yang menekankan poin utama dari artikel. Kutipan ini memberikan penekanan visual dan memecah alur teks."
                                </blockquote>

                                <h3>Sub-judul untuk Bagian Selanjutnya</h3>
                                <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.</p>
                            </div>

                            {/* Tags */}
                            <div className="mt-8 pt-6 border-t">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-semibold">Tags:</span>
                                    {['Jurnalistik', 'Banyuwangi', 'PWMOI', article.category].map(tag => (
                                        <span key={tag} className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{`#${tag}`}</span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Author Box */}
                            {authorDetails && (
                                <div className="mt-8 p-6 bg-gray-50 rounded-lg flex items-start space-x-6">
                                    <img src={authorDetails.imageUrl} alt={authorDetails.name} className="w-20 h-20 rounded-full object-cover"/>
                                    <div>
                                        <p className="text-sm text-gray-500">Ditulis oleh</p>
                                        <h4 className="text-xl font-bold text-brand-dark">{authorDetails.name}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{authorDetails.media}</p>
                                        <p className="text-sm text-gray-600 mt-2">Jurnalis senior dengan fokus pada isu-isu pemerintahan dan pembangunan daerah di Banyuwangi.</p>
                                    </div>
                                </div>
                            )}

                        </article>

                        {/* Related Articles */}
                        {relatedArticles.length > 0 && (
                            <section className="mt-12">
                                <h2 className="text-2xl font-bold font-serif mb-6">Berita Terkait</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {relatedArticles.map(related => (
                                        <div key={related.id} className="bg-white rounded-lg overflow-hidden flex flex-col">
                                            <Link to={`/berita/${related.id}`} className="block">
                                                <img className="w-full h-48 object-cover" src={related.imageUrl} alt={related.title} />
                                            </Link>
                                            <div className="p-4 flex flex-col flex-grow">
                                                <span className="text-xs text-brand-blue font-semibold">{related.category}</span>
                                                <h3 className="font-serif font-bold text-md mt-1 mb-1 flex-grow">
                                                    <Link to={`/berita/${related.id}`} className="hover:text-brand-blue transition-colors duration-300">
                                                        {related.title}
                                                    </Link>
                                                </h3>
                                                <p className="text-xs text-gray-500 mt-2">{related.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                           
                            {/* Ad Slot 1 */}
                            <AdPlaceholder className="h-64" title="Iklan (300x250)" />

                            {/* Popular News */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold font-serif mb-4">Berita Terpopuler</h3>
                                <ul className="space-y-4">
                                    {MOCK_NEWS_ARTICLES.slice(0, 5).map((pop, index) => (
                                        <li key={pop.id} className="flex items-start space-x-3 pb-4 border-b last:border-b-0">
                                            <span className="text-2xl font-bold font-serif text-gray-300">{`0${index + 1}`}</span>
                                            <div>
                                                <Link to={`/berita/${pop.id}`} className="font-semibold text-brand-dark hover:text-brand-blue leading-tight transition-colors">
                                                    {pop.title}
                                                </Link>
                                                <p className="text-xs text-gray-500 mt-1">{pop.category}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                             {/* Ad Slot 2 */}
                            <AdPlaceholder className="h-96" title="Iklan (300x600)" />


                            {/* Newsletter */}
                             <div className="bg-brand-dark text-white p-6 rounded-lg">
                                <h3 className="text-xl font-bold font-serif mb-3">Langganan Berita</h3>
                                <p className="text-sm text-gray-300 mb-4">Dapatkan update terbaru langsung ke inbox Anda.</p>
                                <form action="#" className="flex">
                                     <input type="email" placeholder="Email Anda" className="w-full bg-gray-800 border-gray-600 rounded-l-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                                     <button type="submit" className="bg-brand-blue hover:bg-blue-700 text-white p-2 rounded-r-md transition-colors">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                     </button>
                                </form>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;