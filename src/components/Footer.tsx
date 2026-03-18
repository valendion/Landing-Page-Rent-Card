import { CarIcon, WhatsAppIcon, InstagramIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <CarIcon className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold">Queen Car Rental</span>
            </div>
            <p className="text-sm leading-relaxed">
              Rental mobil lokal di Parepare, Sulawesi Selatan. Melayani
              perjalanan wisata, keluarga, dan bisnis dengan armada terawat dan
              harga bersahabat.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Jam Operasional</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">
                Senin - Sabtu: 08.00 - 20.00 WITA
              </li>
              <li className="text-slate-400">Minggu: Dengan perjanjian</li>
              <li className="text-slate-400 mt-4">
                📍 Jl. Bau Massepe, Kampung Baru
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Kontak</h4>
            <p className="text-sm mb-4">Hubungi kami disini</p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/6281241820456?text=Halo%2C%20saya%20ingin%20bertanya."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/queenrentcar__/"
                className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © 2026 Queen Car Rental. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
