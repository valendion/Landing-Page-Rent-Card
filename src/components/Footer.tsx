import { CarIcon, WhatsAppIcon, InstagramIcon } from "./Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <CarIcon className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <span className="text-xl font-bold block">Dion Car Rental</span>
                <span className="text-xs text-slate-500">
                  Tana Toraja & Parepare
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Rental mobil lokal di Tana Toraja & Parepare, Sulawesi Selatan.
              Melayani perjalanan wisata, keluarga, dan bisnis dengan armada
              terawat dan harga bersahabat.
            </p>
          </div>

          {/* Operating Hours Column */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full" />
              Jam Operasional
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center">
                <span className="text-slate-400">Senin - Jumat</span>
                <span className="text-white font-medium tabular-nums">
                  08.00 - 20.00
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-400">Sabtu</span>
                <span className="text-white font-medium tabular-nums">
                  08.00 - 18.00
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-2">
                  Minggu
                  <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    By Appointment
                  </span>
                </span>
                <span className="text-blue-400 font-medium text-xs">
                  Janji Temu
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-lg">📍</span>
                <div className="text-slate-400">
                  <p className="text-white font-medium mb-1">Kantor Parepare</p>
                  <p>Jl. Bau Massepe, Kampung Baru</p>
                  <p className="text-xs mt-1 text-slate-500">
                    Sulawesi Selatan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full" />
              Hubungi Kami
            </h4>
            <p className="text-sm text-slate-400 mb-6">
              Tersedia untuk reservasi dan pertanyaan. Respons cepat via
              WhatsApp.
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/628995617544?text=Halo%20Dion%20Car%20Rental%2C%20saya%20ingin%20bertanya%20tentang%20rental%20mobil."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-green-400 font-semibold block group-hover:text-green-300">
                    WhatsApp
                  </span>
                  <span className="text-xs text-slate-500">
                    +62 899-5617-544
                  </span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/dionaja027/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-pink-400 font-semibold block group-hover:text-pink-300">
                    Instagram
                  </span>
                  <span className="text-xs text-slate-500">@dionaja027</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Dion Car Rental. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
