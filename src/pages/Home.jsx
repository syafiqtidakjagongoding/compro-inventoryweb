import React from "react";
import {
  Package,
  BarChart3,
  Users,
  Shield,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import About from "../components/About";

const Home = () => {
  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Manajemen Stok Real-Time",
      description:
        "Pantau inventori Anda secara real-time dengan sistem yang akurat dan mudah digunakan",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Laporan & Analitik",
      description:
        "Dapatkan insight mendalam dengan dashboard analitik yang komprehensif",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-User Access",
      description:
        "Kolaborasi tim dengan sistem role dan permission yang fleksibel",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Keamanan Terjamin",
      description:
        "Data Anda aman dengan enkripsi tingkat enterprise dan backup otomatis",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Otomasi Cerdas",
      description:
        "Notifikasi otomatis untuk stok minimum dan peringatan penting lainnya",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Skalabilitas",
      description:
        "Berkembang bersama bisnis Anda dari skala kecil hingga enterprise",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "99K",
      features: [
        "Manajemen Produk",
        "Manajemen Stok",
        "Riwayat Barang Masuk/Keluar",
        "Kategori Produk",
        "Export CSV",
        "1 User",
        "1 Gudang",
        "Basic UI",
      ],
    },
    {
      name: "Professional",
      price: "399K",
      popular: true,
      features: [
        "Semua fitur Starter",
        "Dashboard Analytics",
        "Multi User (up to 5)",
        "Multi Gudang",
        "Role & Permissions",
        "Barcode Support",
        "Notifikasi Stok Menipis",
        "Import Excel",
        "Backup Bulanan",
        "UI Modern",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Semua fitur Professional",
        "Unlimited Users",
        "Unlimited Gudang",
        "Custom Report",
        "API Integration",
        "Prioritas Support",
        "On-premise Deployment",
        "Audit Log & Security",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Kelola Inventori
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Lebih Mudah & Efisien
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sistem manajemen gudang terpadu yang membantu bisnis Anda berkembang
            dengan kontrol inventori yang sempurna
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HashLink
              smooth
              to="/demo#demo"
              className="bg-blue-500 hover:bg-blue-600 border-2 border-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Lihat Demo
            </HashLink>
          </div>
        </div>
      </section>
      <About/>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-gray-400 text-lg">
              Semua yang Anda butuhkan untuk mengelola inventori dengan sempurna
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pilih Paket Anda
            </h2>
            <p className="text-gray-400 text-lg">
              Harga transparan, tanpa biaya tersembunyi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-900 p-8 rounded-xl border ${
                  plan.popular
                    ? "border-blue-500 ring-2 ring-blue-500/50 transform scale-105"
                    : "border-blue-500/20"
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-400">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-blue-500/30"
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center  from-blue-600 to-cyan-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Waktunya Bisnis Anda Naik Level.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Percayakan manajemen stok pada MyGudang, solusi yang digunakan oleh
            banyak bisnis berkembang di Indonesia.
          </p>
          <a
            href="https://wa.me/62881026805589?text=Halo%20saya%20ingin%20bertanya%20tentang%20MyGudang"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-block"
          >
            Hubungi kami
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
