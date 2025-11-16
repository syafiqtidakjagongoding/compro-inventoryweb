import { Hash, Package } from "lucide-react";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { Mail, Facebook, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900 border-t border-blue-500/20 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Package className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">MyGudang</span>
            </div>
            <p className="text-gray-400">
              Solusi manajemen inventori terpercaya untuk bisnis modern
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <HashLink
                  smooth
                  to="/#features"
                  className="hover:text-blue-400"
                >
                  Fitur
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#pricing" className="hover:text-blue-400">
                  Harga
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/demo#demo"
                  className="hover:text-blue-400"
                >
                  Demo
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <HashLink smooth to="/#about" className="hover:text-blue-400">
                  Tentang Kami
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a
                  href="mailto:info@mygudang.com"
                  className="hover:text-blue-400 transition"
                >
                  info@mygudang.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Facebook size={18} className="text-blue-400" />
                <a
                  href="https://facebook.com/mygudang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Facebook
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-pink-400" />
                <a
                  href="https://instagram.com/mygudang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  Instagram
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                <a
                  href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20MyGudang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Hubungi kami
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-red-400" />
                <span>Sidoarjo, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-500/20 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MyGudang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
