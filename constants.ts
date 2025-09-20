
import type { NavLink, NewsArticle, Member, StrategicPartner } from './types';

export const NAVIGATION_LINKS: NavLink[] = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Berita', path: '/berita' },
  { name: 'Anggota', path: '/anggota' },
  { name: 'Kontak', path: '/kontak' },
];

export const MOCK_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'PWMOI Banyuwangi Gelar Pelatihan Jurnalistik Digital',
    excerpt: 'Dalam upaya meningkatkan kompetensi wartawan di era digital, PWMOI DPD Banyuwangi menyelenggarakan pelatihan jurnalistik...',
    author: 'Andi Pratama',
    date: '15 Juli 2024',
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
    category: 'Pelatihan'
  },
  {
    id: 2,
    title: 'Audiensi dengan Pemkab Banyuwangi, PWMOI Sampaikan Aspirasi',
    excerpt: 'Perwakilan PWMOI DPD Banyuwangi bertemu dengan Bupati untuk membahas sinergi antara media online dan pemerintah daerah.',
    author: 'Siti Aminah',
    date: '12 Juli 2024',
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
    category: 'Kegiatan'
  },
  {
    id: 3,
    title: 'Menelisik Potensi Wisata Tersembunyi di Banyuwangi',
    excerpt: 'Anggota PWMOI melakukan liputan khusus untuk menggali dan mempromosikan destinasi wisata baru yang belum banyak dikenal.',
    author: 'Budi Santoso',
    date: '10 Juli 2024',
    imageUrl: 'https://picsum.photos/seed/news3/600/400',
    category: 'Liputan'
  },
   {
    id: 4,
    title: 'Kemerdekaan Pers di Era Digital: Tantangan dan Harapan',
    excerpt: 'Sebuah seminar yang diinisiasi oleh PWMOI Banyuwangi membahas tentang bagaimana menjaga independensi media di tengah arus informasi.',
    author: 'Rina Wijaya',
    date: '05 Juli 2024',
    imageUrl: 'https://picsum.photos/seed/news4/600/400',
    category: 'Seminar'
  },
   {
    id: 5,
    title: 'Bakti Sosial PWMOI: Berbagi dengan Sesama di Bulan Kemanusiaan',
    excerpt: 'Sebagai bentuk kepedulian sosial, para jurnalis yang tergabung dalam PWMOI mengadakan kegiatan bakti sosial di panti asuhan.',
    author: 'Dewi Lestari',
    date: '02 Juli 2024',
    imageUrl: 'https://picsum.photos/seed/news5/600/400',
    category: 'Sosial'
  },
   {
    id: 6,
    title: 'Workshop Fotografi Jurnalistik untuk Anggota Baru',
    excerpt: 'Meningkatkan skill visual, PWMOI Banyuwangi mengadakan workshop fotografi yang dibimbing oleh fotografer profesional.',
    author: 'Eko Nugroho',
    date: '28 Juni 2024',
    imageUrl: 'https://picsum.photos/seed/news6/600/400',
    category: 'Pelatihan'
  },
];

export const MOCK_MEMBERS: Member[] = [
  { id: 1, name: 'Ahmad Subarjo', media: 'Banyuwangi Terkini', imageUrl: 'https://picsum.photos/seed/member1/400/400', position: 'Ketua' },
  { id: 2, name: 'Citra Dewi', media: 'Jendela Timur', imageUrl: 'https://picsum.photos/seed/member2/400/400', position: 'Wakil Ketua' },
  { id: 3, name: 'Doni Firmansyah', media: 'Suara Blambangan', imageUrl: 'https://picsum.photos/seed/member3/400/400', position: 'Sekretaris' },
  { id: 4, name: 'Eliza Putri', media: 'Fakta Banyuwangi', imageUrl: 'https://picsum.photos/seed/member4/400/400', position: 'Bendahara' },
  { id: 5, name: 'Fajar Hidayat', media: 'Portal Osing', imageUrl: 'https://picsum.photos/seed/member5/400/400', position: 'Anggota' },
  { id: 6, name: 'Gita Permata', media: 'Info Genteng', imageUrl: 'https://picsum.photos/seed/member6/400/400', position: 'Anggota' },
  { id: 7, name: 'Hadi Kusuma', media: 'Warta Banyuwangi', imageUrl: 'https://picsum.photos/seed/member7/400/400', position: 'Anggota' },
  { id: 8, name: 'Indah Sari', media: 'Kabar Ijen', imageUrl: 'https://picsum.photos/seed/member8/400/400', position: 'Anggota' },
];

export const MOCK_STRATEGIC_PARTNERS: StrategicPartner[] = [
    { id: 1, name: 'Pemerintah Kabupaten Banyuwangi', logoUrl: 'https://i.ibb.co/b3yV3k7/logo-pemkab-bwi.png', category: 'Pemerintahan' },
    { id: 2, name: 'Bank Jatim Cabang Banyuwangi', logoUrl: 'https://i.ibb.co/yQn7sZ6/logo-bank-jatim.png', category: 'BUMN' },
    { id: 3, name: 'Telkom Indonesia Banyuwangi', logoUrl: 'https://i.ibb.co/6y1Cg2g/logo-telkom.png', category: 'BUMN' },
    { id: 4, name: 'Java Sunrise Hotel', logoUrl: 'https://i.ibb.co/3kM2B2F/logo-javasunrise.png', category: 'Swasta' },
    { id: 5, name: 'PLN UP3 Banyuwangi', logoUrl: 'https://i.ibb.co/3c8p23z/logo-pln.png', category: 'BUMN' },
    { id: 6, name: 'Dinas Kominfo Banyuwangi', logoUrl: 'https://i.ibb.co/VMy1wmm/logo-kominfo-bwi.png', category: 'Pemerintahan' },
];
