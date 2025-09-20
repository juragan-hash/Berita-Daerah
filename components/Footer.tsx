import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={ariaLabel}
      className="text-gray-400 hover:text-white bg-gray-800 hover:bg-brand-blue rounded-full p-2 transition-all duration-300 transform hover:scale-110"
    >
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: About & Logo */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <Link to="/" className="flex items-center space-x-3 mb-4">
                            <svg className="h-10 w-10 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.78 6.36C19.53 6.11 19.2 6 18.86 6H11V5C11 3.9 10.1 3 9 3S7 3.9 7 5V6H5.14C4.8 6 4.47 6.11 4.22 6.36L2.36 8.22C2.11 8.47 2 8.8 2 9.14V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9.14C22 8.8 21.89 8.47 21.64 8.22L19.78 6.36ZM13.95 15.32L10.05 11.41L12.17 9.29L16.08 13.2L13.95 15.32Z" />
                                <path d="M9 8H15V16H9V8Z" opacity="0.4" />
                            </svg>
                            <span className="font-bold text-lg text-white">PWMOI BANYUWANGI</span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Wadah bagi para jurnalis media online di Banyuwangi untuk bersinergi, berkembang, dan menyajikan informasi yang akurat dan terpercaya.
                        </p>
                    </div>
                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-md font-semibold mb-4 tracking-wider uppercase">Tautan Cepat</h3>
                        <ul className="space-y-3">
                            <li><Link to="/tentang-kami" className="text-gray-400 hover:text-white transition-colors duration-300">Tentang Kami</Link></li>
                            <li><Link to="/berita" className="text-gray-400 hover:text-white transition-colors duration-300">Berita</Link></li>
                            <li><Link to="/anggota" className="text-gray-400 hover:text-white transition-colors duration-300">Anggota</Link></li>
                            <li><Link to="/kontak" className="text-gray-400 hover:text-white transition-colors duration-300">Kontak</Link></li>
                        </ul>
                    </div>
                    {/* Column 3: Contact Info */}
                     <div>
                        <h3 className="text-md font-semibold mb-4 tracking-wider uppercase">Hubungi Kami</h3>
                        <address className="not-italic text-sm text-gray-400 space-y-3">
                           <p>Jl. Jenderal Sudirman No. 1, Banyuwangi, Jawa Timur</p>
                           <p><a href="mailto:info@pwmoibanyuwangi.or.id" className="hover:text-white transition-colors">info@pwmoibanyuwangi.or.id</a></p>
                           <p><a href="tel:+62333123456" className="hover:text-white transition-colors">(0333) 123-456</a></p>
                        </address>
                    </div>
                    {/* Column 4: Newsletter & Social */}
                    <div>
                        <h3 className="text-md font-semibold mb-4 tracking-wider uppercase">Tetap Terhubung</h3>
                        <p className="text-gray-400 text-sm mb-4">Dapatkan berita dan update terbaru dari kami langsung di email Anda.</p>
                        <form action="#" method="POST">
                            <div className="flex items-center">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input 
                                    type="email" 
                                    id="email-address"
                                    name="email-address"
                                    autoComplete="email" 
                                    required 
                                    className="w-full bg-gray-800 border border-gray-600 rounded-l-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" 
                                    placeholder="Email Anda"
                                />
                                <button type="submit" className="bg-brand-blue hover:bg-blue-700 text-white p-2 rounded-r-md transition-colors">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div className="flex space-x-4 mt-6">
                            <SocialIcon href="#" aria-label="Facebook">
                               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                             <SocialIcon href="#" aria-label="Twitter">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#" aria-label="Instagram">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 4.573a4.125 4.125 0 11-5.832 5.832 4.125 4.125 0 015.832-5.832zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm5.853-10.8a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} PWMOI DPD Banyuwangi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;