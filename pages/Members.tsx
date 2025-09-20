import React, { useState, useMemo } from 'react';
import { MOCK_MEMBERS } from '../constants';
import type { Member } from '../types';

// Component for Board Members with more details
const BoardMemberCard: React.FC<{ member: Member }> = ({ member }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative">
            <img className="w-full h-64 object-cover" src={member.imageUrl} alt={member.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.media}</p>
            </div>
        </div>
        <div className="p-4 bg-gray-50">
            <p className="text-brand-blue font-semibold">{member.position}</p>
        </div>
    </div>
);

// Component for General Members (slightly refined from original)
const GeneralMemberCard: React.FC<{ member: Member }> = ({ member }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform transform hover:scale-105 duration-300">
        <img className="w-full h-56 object-cover" src={member.imageUrl} alt={member.name} />
        <div className="p-4">
            <h3 className="text-lg font-bold text-brand-dark">{member.name}</h3>
            <p className="text-sm text-brand-green">{member.media}</p>
        </div>
    </div>
);


const Members: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const boardPositions = ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara'];
    const boardMembers = MOCK_MEMBERS.filter(m => boardPositions.includes(m.position));
    const generalMembers = MOCK_MEMBERS.filter(m => !boardPositions.includes(m.position));

    const filteredGeneralMembers = useMemo(() => {
        if (!searchTerm) {
            return generalMembers;
        }
        return generalMembers.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.media.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, generalMembers]);

    return (
        <div className="bg-brand-light">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-[1100px]">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold font-serif text-brand-dark">Direktori Anggota</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Mengenal para jurnalis profesional yang menjadi pilar PWMOI DPD Banyuwangi.
                    </p>
                </div>

                {/* Board Members Section */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-serif text-brand-dark">Pengurus Inti</h2>
                        <p className="mt-2 text-gray-600">Tim yang mengarahkan dan menggerakkan organisasi.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {boardMembers.map(member => (
                            <BoardMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>

                {/* All Members Directory Section */}
                <section>
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold font-serif text-brand-dark">Seluruh Anggota</h2>
                        <p className="mt-2 text-gray-600">Jelajahi direktori lengkap jurnalis kami.</p>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="mb-8 max-w-lg mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Cari nama atau media..."
                                className="w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                                aria-label="Cari anggota"
                            />
                            <svg className="w-6 h-6 text-gray-400 absolute top-1/2 right-5 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>
                    
                    {/* Members Grid */}
                    {filteredGeneralMembers.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredGeneralMembers.map(member => (
                                <GeneralMemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-brand-dark">Tidak Ditemukan</h3>
                            <p className="text-gray-500 mt-2">Anggota dengan nama atau media tersebut tidak ditemukan.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Members;