import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'

const Demo = () => {
	 const [activeDemo, setActiveDemo] = useState('dashboard');
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">

      <section id="demo" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Lihat MyGudang Beraksi</h2>
            <p className="text-gray-400 text-lg">Jelajahi interface dan fitur-fitur unggulan kami</p>
          </div>

          {/* Demo Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveDemo('dashboard')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeDemo === 'dashboard'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-900 text-gray-400 hover:bg-slate-800'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveDemo('inventory')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeDemo === 'inventory'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-900 text-gray-400 hover:bg-slate-800'
              }`}
            >
              Manajemen Stok
            </button>
            <button
              onClick={() => setActiveDemo('video')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeDemo === 'video'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-900 text-gray-400 hover:bg-slate-800'
              }`}
            >
              Video Demo
            </button>
          </div>

          {/* Demo Content */}
          <div className="bg-slate-900 rounded-xl border border-blue-500/20 overflow-hidden" id='demo'>
            {activeDemo === 'dashboard' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Dashboard Analytics</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-lg border border-blue-500/30">
                    <div className="text-gray-400 text-sm mb-2">Total Produk</div>
                    <div className="text-3xl font-bold text-white mb-1">1,247</div>
                    <div className="text-green-400 text-sm">+12% dari bulan lalu</div>
                  </div>
                  <div className="bg-linear-to-br from-cyan-500/20 to-cyan-600/20 p-6 rounded-lg border border-cyan-500/30">
                    <div className="text-gray-400 text-sm mb-2">Stok Tersedia</div>
                    <div className="text-3xl font-bold text-white mb-1">24,589</div>
                    <div className="text-green-400 text-sm">+8% dari bulan lalu</div>
                  </div>
                  <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-lg border border-purple-500/30">
                    <div className="text-gray-400 text-sm mb-2">Stok Menipis</div>
                    <div className="text-3xl font-bold text-white mb-1">23</div>
                    <div className="text-yellow-400 text-sm">Perlu restock</div>
                  </div>
                  <div className="bg-linear-to-br from-pink-500/20 to-pink-600/20 p-6 rounded-lg border border-pink-500/30">
                    <div className="text-gray-400 text-sm mb-2">Nilai Inventori</div>
                    <div className="text-3xl font-bold text-white mb-1">Rp 2.4M</div>
                    <div className="text-green-400 text-sm">+15% dari bulan lalu</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                  <h4 className="text-white font-semibold mb-4">Trend Stok Bulanan</h4>
                  <div className="h-64 flex items-end justify-around gap-2">
                    {[65, 78, 52, 85, 70, 90, 75, 88, 95, 82, 70, 92].map((height, idx) => (
                      <div key={idx} className="flex-1 bg-linear-to-t from-blue-500 to-cyan-400 rounded-t opacity-80 hover:opacity-100 transition" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                  <div className="flex justify-around mt-4 text-gray-400 text-xs">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'].map((month, idx) => (
                      <span key={idx}>{month}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'inventory' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Daftar Produk</h3>
                </div>
                

                {/* Product Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-500/20">
                        <th className="text-left text-gray-400 py-3 px-4">Kode</th>
                        <th className="text-left text-gray-400 py-3 px-4">Nama Produk</th>
                        <th className="text-left text-gray-400 py-3 px-4">Kategori</th>
                        <th className="text-left text-gray-400 py-3 px-4">Stok</th>
                        <th className="text-left text-gray-400 py-3 px-4">Harga</th>
                        <th className="text-left text-gray-400 py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { code: 'PRD-001', name: 'Laptop Dell XPS 15', category: 'Elektronik', stock: 45, price: 'Rp 18.500.000', status: 'Tersedia' },
                        { code: 'PRD-002', name: 'Mouse Wireless Logitech', category: 'Aksesoris', stock: 120, price: 'Rp 350.000', status: 'Tersedia' },
                        { code: 'PRD-003', name: 'Monitor LG 27"', category: 'Elektronik', stock: 8, price: 'Rp 3.200.000', status: 'Stok Rendah' },
                        { code: 'PRD-004', name: 'Keyboard Mechanical', category: 'Aksesoris', stock: 67, price: 'Rp 850.000', status: 'Tersedia' },
                        { code: 'PRD-005', name: 'Webcam HD Pro', category: 'Elektronik', stock: 2, price: 'Rp 1.200.000', status: 'Stok Rendah' },
                      ].map((product, idx) => (
                        <tr key={idx} className="border-b border-slate-700 hover:bg-slate-800/50 transition">
                          <td className="py-4 px-4 text-gray-300">{product.code}</td>
                          <td className="py-4 px-4 text-white font-medium">{product.name}</td>
                          <td className="py-4 px-4 text-gray-400">{product.category}</td>
                          <td className="py-4 px-4 text-white">{product.stock}</td>
                          <td className="py-4 px-4 text-white">{product.price}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              product.status === 'Tersedia' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {product.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeDemo === 'video' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Video Demo MyGudang</h3>
                
                {/* Video Placeholder */}
              <div className="bg-slate-800 rounded-lg overflow-hidden mb-6">
                <div className="aspect-video bg-slate-900">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QbiXTedaoSY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </section>
      </div>
  )
}

export default Demo