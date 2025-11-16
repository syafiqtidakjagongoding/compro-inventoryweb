// AboutSection.jsx
import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '2020', title: 'Berdiri', description: 'MyGudang didirikan dengan visi memudahkan manajemen inventori untuk UMKM' },
    { year: '2021', title: '1000+ Pengguna', description: 'Mencapai 1000 pengguna aktif di tahun pertama' },
    { year: '2023', title: 'Ekspansi Fitur', description: 'Meluncurkan fitur multi-warehouse dan API integration' },
    { year: '2025', title: 'Market Leader', description: 'Menjadi platform inventori terpercaya dengan 10K+ pengguna' }
  ];

 

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tentang MyGudang</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Sejak 2020, kami berdedikasi menghadirkan solusi manajemen inventori terbaik untuk bisnis Indonesia
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Perjalanan Kami</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              MyGudang lahir dari pengalaman langsung menghadapi tantangan manajemen inventori di berbagai skala bisnis. 
              Sejak tahun 2020, kami memulai perjalanan dengan satu misi sederhana: membuat pengelolaan stok menjadi mudah, 
              efisien, dan terjangkau untuk semua ukuran bisnis.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dengan tim yang berpengalaman di bidang teknologi dan supply chain management, kami terus mengembangkan 
              platform yang tidak hanya powerful, tapi juga intuitif dan mudah digunakan.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Hari ini, MyGudang telah dipercaya oleh ribuan bisnis di seluruh Indonesia - dari toko retail kecil 
              hingga perusahaan distribusi besar. Kami bangga menjadi bagian dari kesuksesan mereka.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20">
              <div className="text-blue-400 text-4xl font-bold mb-2">5+</div>
              <div className="text-white font-semibold mb-1">Tahun Pengalaman</div>
              <div className="text-gray-400 text-sm">Mengembangkan solusi inventori terbaik</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-500/20">
              <div className="text-cyan-400 text-4xl font-bold mb-2">1000+</div>
              <div className="text-white font-semibold mb-1">Bisnis Terlayani</div>
              <div className="text-gray-400 text-sm">Di seluruh Indonesia</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <div className="text-purple-400 text-4xl font-bold mb-2">10+</div>
              <div className="text-white font-semibold mb-1">Tim Profesional</div>
              <div className="text-gray-400 text-sm">Developer, support, dan business analyst</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Milestone Kami</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                  <div className="text-white font-semibold mb-2">{milestone.title}</div>
                  <div className="text-gray-400 text-sm">{milestone.description}</div>
                </div>
                {idx < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}