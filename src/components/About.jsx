// AboutSection.jsx
import React from "react";
import { Award, Users, Target, Lightbulb } from "lucide-react";

export default function About() {

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Tentang MyGudang
          </h2>
        </div>

        {/* Company Story */}
        <div className="flex w-full justify-center items-center gap-12 mb-20">
          <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 items-center justify-center text-center p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Perjalanan Kami
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dimulai dari menghadapi tantangan manajemen inventori di berbagai
              jenis bisnis. Sejak 2025, kami membangun platform ini dengan
              tujuan sederhana yaitu membantu bisnis memanajemen pergudangan
              dengan cara yang lebih mudah dan efisien.
            </p>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Dengan tim yang memiliki pengalaman di teknologi dan supply chain
              management, kami terus mengembangkan MyGudang agar tetap kuat,
              aman, dan nyaman digunakan sehari-hari.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Saat ini, MyGudang digunakan oleh banyak pelaku usaha di berbagai
              wilayah Indonesia, mulai dari toko kecil hingga perusahaan
              distribusi. Kami berusaha menjadi bagian yang mendukung
              operasional mereka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
