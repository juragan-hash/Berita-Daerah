import React, { useState } from 'react';

// New Component for FAQ Item
const FaqItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-5 text-left font-semibold"
            >
                <span>{title}</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 pr-4 text-gray-600">
                    {children}
                </div>
            </div>
        </div>
    );
};


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        console.log('Form data submitted:', formData);
        
        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Revert to idle after 5 seconds to allow another submission
            setTimeout(() => setFormState('idle'), 5000); 
        }, 1500);
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-brand-dark text-white">
                <img 
                    src="https://picsum.photos/seed/contact-hero/1600/500" 
                    alt="Kontak PWMOI Banyuwangi"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative container mx-auto py-20 px-4 sm:px-6 lg:px-8 max-w-[1100px] text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif">Hubungi Kami</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Punya pertanyaan, saran, atau ingin berkolaborasi? Kami siap mendengarkan Anda.
                    </p>
                </div>
            </div>

            {/* Main Contact Section */}
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    {/* Contact Form */}
                    <div className="p-8 md:p-12">
                         <h2 className="text-3xl font-bold font-serif text-brand-dark mb-6">Kirim Pesan</h2>
                         {formState === 'success' ? (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg flex items-start space-x-4" role="alert">
                                <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <div>
                                    <p className="font-bold">Pesan Terkirim!</p>
                                    <p>Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.</p>
                                </div>
                            </div>
                         ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <label htmlFor="name" className="sr-only">Nama Lengkap</label>
                                    <svg className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="Nama Lengkap" className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                                </div>
                                <div className="relative">
                                    <label htmlFor="email" className="sr-only">Alamat Email</label>
                                     <svg className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="Alamat Email" className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                                </div>
                                <div className="relative">
                                    <label htmlFor="subject" className="sr-only">Subjek Pesan</label>
                                    <svg className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                                    <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} placeholder="Subjek Pesan" className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Pesan Anda</label>
                                    <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="Tuliskan pesan Anda di sini..." className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                                </div>
                                <div>
                                    <button type="submit" disabled={formState === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed">
                                        {formState === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                    
                    {/* Contact Info */}
                    <div className="bg-gray-100 p-8 md:p-12 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4">Informasi Kontak</h3>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-start space-x-4">
                                    <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span>Jl. Jenderal Sudirman No. 1, Banyuwangi, Jawa Timur</span>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <a href="mailto:info@pwmoibanyuwangi.or.id" className="hover:text-brand-blue">info@pwmoibanyuwangi.or.id</a>
                                </div>
                                <div className="flex items-start space-x-4">
                                     <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <a href="tel:+62333123456" className="hover:text-brand-blue">(0333) 123-456</a>
                                </div>
                            </div>
                        </div>
                        
                         <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-brand-dark mb-4">Lokasi Sekretariat</h3>
                            <div className="h-64 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63184.1481105943!2d114.32145388481446!3d-8.200192537248065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15b617006b093%3A0x4027a76e352bd80!2sBanyuwangi%2C%2Banyuwangi%20Sub-District%2C%20Banyuwangi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1690184852315!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokasi Sekretariat PWMOI Banyuwangi"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-serif text-brand-dark">Pertanyaan Umum (FAQ)</h2>
                        <p className="mt-2 text-gray-600">Temukan jawaban cepat untuk pertanyaan yang sering diajukan.</p>
                    </div>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <FaqItem title="Bagaimana cara menjadi anggota PWMOI Banyuwangi?">
                           Untuk menjadi anggota, Anda harus merupakan jurnalis aktif di sebuah media online yang beroperasi di wilayah Banyuwangi. Silakan hubungi kami melalui formulir ini dengan subjek "Pendaftaran Anggota" untuk informasi lebih lanjut mengenai persyaratan dan proses pendaftaran.
                        </FaqItem>
                        <FaqItem title="Apakah ada biaya untuk bergabung?">
                            Terdapat iuran keanggotaan tahunan yang digunakan untuk mendukung kegiatan organisasi, seperti pelatihan, seminar, dan advokasi. Detail mengenai besaran iuran akan diinformasikan saat proses pendaftaran.
                        </FaqItem>
                        <FaqItem title="Bagaimana cara mengajukan kemitraan atau kerjasama?">
                            Kami sangat terbuka untuk kolaborasi dengan berbagai pihak, baik pemerintah, BUMN, swasta, maupun komunitas. Silakan kirimkan proposal atau ajakan kerjasama Anda melalui email ke info@pwmoibanyuwangi.or.id atau gunakan formulir kontak di halaman ini.
                        </FaqItem>
                         <FaqItem title="Kegiatan apa saja yang rutin diadakan oleh PWMOI?">
                            Kami rutin mengadakan berbagai kegiatan untuk meningkatkan kompetensi anggota, seperti pelatihan jurnalistik, workshop fotografi/videografi, seminar tentang isu-isu terkini, serta kegiatan sosial dan audiensi dengan para pemangku kebijakan.
                        </FaqItem>
                    </div>
                 </div>
            </div>

        </div>
    );
};

export default Contact;