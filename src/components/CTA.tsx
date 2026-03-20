import React from "react";

const CTA: React.FC = () => {
  return (
    <section
      data-aos="zoom-in"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-4xl md:text-5xl font-bold text-white mb-6">
          Siap Berangkat?
        </p>
        <p className="text-xl text-slate-300 mb-10 mt-2">
          Bergabung dengan ratusan pelanggan puas di Parepare dan rasakan
          pengalaman rental mobil terbaik untuk perjalanan wisata, keluarga,
          atau bisnis Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
          <a
            href="#fleet"
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl inline-block text-center"
          >
            Lihat Mobil
          </a>
          <a
            href="https://wa.me/6285340715225?text=Halo%2C%20saya%20ingin%20bertanya."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-block text-center"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
