import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_MEMBERS } from '../constants';

const AboutHero: React.FC = () => (
    <div className="relative bg-brand-dark text-white">
        <img 
            src="https://picsum.photos/seed/about-hero/1600/600" 
            alt="Tim PWMOI Banyuwangi sedang berdiskusi"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative container mx-auto py-24 px-4 sm:px-6 lg:px-8 max-w-[1100px] text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif">Mengenal PWMOI Banyuwangi</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Organisasi profesional yang menjadi rumah bagi jurnalis media online untuk bertumbuh, bersinergi, dan menjaga integritas pers di Banyuwangi.
            </p>
        </div>
    </div>
);

const TimelineItem: React.FC<{ year: string; title: string; children: React.ReactNode; isLeft?: boolean }> = ({ year, title, children, isLeft }) => (
    <div className={`flex ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full`}>
        <div className="hidden md:flex w-5/12"></div>
        <div className="relative hidden md:flex w-2/12 justify-center">
            <div className="h-full w-1 bg-gray-200 absolute"></div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white inline-flex items-center justify-center relative z-10 font-bold">{year.substring(2)}</div>
        </div>
        <div className="w-full md:w-5/12">
             <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-brand-blue">
                <p className="font-bold text-brand-blue text-sm mb-1">{year}</p>
                <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{children}</p>
            </div>
        </div>
    </div>
);


const HistoryTimeline: React.FC = () => (
    <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-serif text-brand-dark">Perjalanan Kami</h2>
                <p className="mt-2 text-gray-600">Menandai tonggak sejarah dalam membangun komunitas pers yang solid.</p>
            </div>
            <div className="relative flex flex-col space-y-8">
                <TimelineItem year="2021" title="Pembentukan Awal">
                    PWMOI DPD Banyuwangi resmi dibentuk sebagai wadah bagi jurnalis media online di tengah pesatnya perkembangan media digital.
                </TimelineItem>
                <TimelineItem year="2022" title="Rapat Kerja & Program Perdana" isLeft>
                    Menyelenggarakan Rapat Kerja pertama untuk merumuskan program-program strategis, termasuk pelatihan dan advokasi anggota.
                </TimelineItem>
                <TimelineItem year="2023" title="Peluncuran Website Resmi">
                    Meluncurkan platform digital pwmoibanyuwangi.or.id sebagai pusat informasi dan etalase karya jurnalistik anggota.
                </TimelineItem>
                <TimelineItem year="2024" title="Kolaborasi Strategis" isLeft>
                    Menjalin kemitraan strategis dengan pemerintah daerah dan berbagai institusi untuk mendukung program pembangunan dan transparansi.
                </TimelineItem>
            </div>
        </div>
    </div>
);


const CoreValues: React.FC = () => {
    const values = [
        { 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.984z" /></svg>,
            title: 'Integritas',
            description: 'Menjunjung tinggi kebenaran, akurasi, dan kode etik jurnalistik sebagai landasan utama dalam setiap karya.'
        },
        { 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            title: 'Profesionalisme',
            description: 'Terus meningkatkan kompetensi, wawasan, dan kualitas diri untuk menghasilkan produk jurnalistik yang unggul.'
        },
        { 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: 'Kolaborasi',
            description: 'Membangun sinergi yang kuat antar anggota dan mitra strategis untuk memberikan dampak positif yang lebih luas.'
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-serif text-brand-dark">Nilai-Nilai Inti Kami</h2>
                    <p className="mt-2 text-gray-600">Prinsip yang menjadi pemandu langkah kami.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map(value => (
                        <div key={value.title} className="text-center p-6">
                            <div className="flex items-center justify-center h-20 w-20 mx-auto bg-blue-100 text-brand-blue rounded-full mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const MemberCard: React.FC<{ member: typeof MOCK_MEMBERS[0] }> = ({ member }) => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
        <img className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200" src={member.imageUrl} alt={member.name} />
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-brand-blue font-semibold">{member.position}</p>
        <p className="text-gray-600">{member.media}</p>
    </div>
);

const OrgStructure: React.FC = () => {
    const boardMembers = MOCK_MEMBERS.filter(m => ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara'].includes(m.position));
    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-serif text-brand-dark">Struktur Organisasi</h2>
                    <p className="mt-2 text-gray-600">Pengurus inti yang menggerakkan roda PWMOI DPD Banyuwangi.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {boardMembers.map(member => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const JoinCta: React.FC = () => (
    <div className="bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center max-w-[1100px]">
            <h2 className="text-3xl font-bold font-serif text-white mb-4">Bergabunglah Dengan Kami</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Jadilah bagian dari komunitas jurnalis profesional yang berdedikasi untuk menyajikan informasi berkualitas dan membangun masa depan media yang lebih baik di Banyuwangi.
            </p>
            <Link 
                to="/kontak" 
                className="bg-brand-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
                Hubungi & Gabung
            </Link>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <div className="bg-white">
            <AboutHero />
            <HistoryTimeline />
            <div className="bg-brand-light rounded-lg my-20 container mx-auto p-12 max-w-[1100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold font-serif text-brand-blue mb-3">Visi Kami</h3>
                        <p className="text-gray-700">
                            Menjadi organisasi pers yang profesional, modern, dan berintegritas, serta menjadi pilar utama dalam menyajikan informasi yang berkualitas bagi masyarakat Banyuwangi dan sekitarnya.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-serif text-brand-green mb-3">Misi Kami</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Meningkatkan kompetensi dan profesionalisme anggota melalui pelatihan dan sertifikasi.</li>
                            <li>Menjunjung tinggi kode etik jurnalistik dalam setiap karya.</li>
                            <li>Membangun sinergi yang konstruktif dengan pemerintah, swasta, dan masyarakat.</li>
                            <li>Mendorong lahirnya karya-karya jurnalistik yang inovatif dan berdampak.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <CoreValues />
            <OrgStructure />
            <JoinCta />
        </div>
    );
};

export default About;
