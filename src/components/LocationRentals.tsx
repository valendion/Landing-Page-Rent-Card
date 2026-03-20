const LocationRentals = () => {
  return (
    <section
      id="locations"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Image - Pemandangan Toraja */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1920&q=80"
          alt="Tana Toraja Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 to-slate-900/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Kolom Kiri - Informasi Lokasi */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Lokasi Strategis Tana Toraja</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kantor Rental di{" "}
              <span className="text-blue-400">Pusat Kota Makale</span>
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Kantor kami berlokasi strategis di kawasan{" "}
              <strong className="text-white">
                Kampung Baru, Kecamatan Makale
              </strong>{" "}
              — pusat aktivitas Tana Toraja. Dekat dengan terminal bus, area
              hotel, dan akses menuju destinasi wisata ikonik seperti{" "}
              <strong className="text-blue-400">Kete Kesu</strong> dan{" "}
              <strong className="text-blue-400">Lemo</strong>.
            </p>

            {/* Tombol Navigasi */}
            <a
              href="https://maps.google.com/?q=Rental+Mobil+Kampung+Baru+Makale+Tana+Toraja"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Navigasi ke Lokasi</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Info Cards */}
            <div className="mt-8 grid gap-4">
              {/* Alamat */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Alamat Lengkap
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Jl. Bau Massepe (Area Pare-Pare-Toraja),
                      <br />
                      Kampung Baru, Kec. Makale,
                      <br />
                      Kabupaten Tana Toraja,
                      <br />
                      Sulawesi Selatan 91817
                    </p>
                  </div>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-3">
                      Jam Operasional
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center text-slate-300 py-1 border-b border-white/5">
                        <span>Senin - Jumat</span>
                        <span className="text-white font-medium tabular-nums">
                          08.00 - 20.00
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300 py-1 border-b border-white/5">
                        <span>Sabtu</span>
                        <span className="text-white font-medium tabular-nums">
                          08.00 - 18.00
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300 py-1">
                        <span className="flex items-center gap-2">
                          Minggu
                          <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">
                            Libur
                          </span>
                        </span>
                        <span className="text-blue-400 font-medium">
                          Buat Janji Temu
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keunggulan Lokasi */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Akses Strategis
                    </h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        5 menit ke Terminal Makale
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        Dekat Hotel Toraja Heritage &amp; Misiliana
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        Akses langsung ke jalan utama menuju Rantepao
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Map */}
          <div data-aos="fade-left" className="relative">
            <div className="aspect-4/5 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl relative bg-slate-800">
              {/* Placeholder untuk Google Maps - Ganti dengan embed lokasi aktual Anda */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1234567890123!2d119.69712345678901!3d-3.0451234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d93ed1234567890%3A0xabcdef1234567890!2sMakale%2C%20Tana%20Toraja%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Rental Mobil Toraja"
                className=" transition-all duration-500"
              />

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500  rounded-full text-white text-sm font-bold shadow-lg">
                📍 Tana Toraja
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/70 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-green-400">
                    Buka Sekarang
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Rental Mobil Toraja
                </h3>
                <p className="text-slate-300 text-sm">
                  Siap melayani perjalanan wisata &amp; bisnis Anda di Tana
                  Toraja
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationRentals;
