import React from "react";

// Lokasi spesifik berdasarkan alamat: Jl. Bau Massepe Depan Masjid Al Hidayah Kampung Baru Kota Parepare
const locations = [
  {
    id: 1,
    code: "BR",
    name: "Kantor Pusat",
    address: "Jl. Bau Massepe, Kampung Baru",
    detail: "Depan Masjid Al Hidayah",
    color: "bg-blue-500",
    mapsUrl: "https://maps.google.com/?q=Jl.+Bau+Massepe+Kampung+Baru+Parepare",
  },
  {
    id: 2,
    code: "HT",
    name: "Area Hotel",
    address: "Jl. Jenderal Sudirman",
    detail: "Grand Town, Horison, Fave",
    color: "bg-green-500",
    mapsUrl: "https://maps.google.com/? q=Hotel+Parepare+Sulawesi+Selatan",
  },
  {
    id: 3,
    code: "TM",
    name: "Terminal Bus",
    address: "Terminal Type A Parepare",
    detail: "Jl. Bau Massepe (Timur)",
    color: "bg-orange-500",
    mapsUrl: "https://maps.google.com/?q=Terminal+Bus+Parepare",
  },
  {
    id: 4,
    code: "PS",
    name: "Pelabuhan",
    address: "Pelabuhan Nus   antara Parepare",
    detail: "Penyeberangan ke Sulawesi Barat",
    color: "bg-purple-500",
    mapsUrl: "https://maps.google.com/?q=Pelabuhan+Nusantara+Parepare",
  },
];

const LocationRentals: React.FC = () => {
  return (
    <section
      id="locations"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=80"
          alt="Kota Parepare"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-6">Lokasi Layanan Kami</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Kantor kami berada di Jl. Bau Massepe, tepat di depan Masjid Al
              Hidayah Kampung Baru. Lokasi strategis dekat terminal bus, area
              hotel, dan pelabuhan untuk kemudahan penjemputan Anda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location) => (
                <a
                  key={location.id}
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 backdrop-blur border border-white/10 hover:bg-white/20 transition-colors group"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${location.color} flex items-center justify-center text-sm font-bold shrink-0`}
                  >
                    {location.code}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm group-hover:text-blue-300 transition-colors">
                      {location.name}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {location.address}
                    </p>
                    <p className="text-xs text-slate-500">{location.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Tombol Navigasi */}
            <a
              href="https://maps.google.com/?q=Jl.+Bau+Massepe+Depan+Masjid+Al+Hidayah+Kampung+Baru+Kota+Parepare"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13   c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1. 12-2.5-2.5s1.12-2.5  2.5-2.5 2.5 1.12 2.5 2. 5-1.12 2.5-2.5-2.5 2.5z" />
              </svg>
              <span>Navigasi ke Lokasi</span>
            </a>

            {/* Info Alamat Lengkap */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">
                  📍 Alamat Lengkap:
                </span>
                <br />
                Jl. Bau Massepe (Depan Masjid Al Hidayah)
                <br />
                Kelurahan Kampung Baru, Kecamatan Bacukiki
                <br />
                Kota Parepare, Sulawesi Selatan 91121
              </p>
              <div className="mt-3 pt-3 border-t border-white/10    grid grid-cols-2 gap-2 text-xs">
                <p className="text-slate-400">
                  <span className="text-white font-semibold">🕐 Buka:</span>{" "}
                  Senin-Sabtu 08.00-20.00
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-right" className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl relative">
              {/* Google Maps Embed - Masjid Al Hidayah Kampung Baru */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5!2d119.6235!3d-4.  0256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDEnMzIuMiJTIDExOcKwMzcnMjQuNiJF!5e0!3m2!1sid!2sid!4v1710760000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rental Mobil Parepare - Jl. Bau Massepe"
                className=""
              />

              {/* Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur   rounded-xl">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Rental Mobil Parepare
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Jl. Bau Massepe • Depan Masjid Al Hidayah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationRentals;
