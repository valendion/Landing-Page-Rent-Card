import { CheckIcon } from "./Icons";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="slide-in order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Tersedia Banyak Pilihan Mobil
            </div>
            <p className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Rental Mobil <br />
              <span className="gradient-text">Automatic & Manual </span>
              <span className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Terlengkap Di Toraja
              </span>
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Kendaraan premium, harga yang transparan, dan proses pemesanan
              yang mudah. Nikmati pengalaman berkendara mewah tanpa repot
              memiliki kendaraan sendiri.
            </p>

            <div className="mt-8 flex items-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span>Pembatalan gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="  w-5 h-5 text-green-500" />
                <span>Tanpa biaya tersembunyi</span>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Car"
              className="relative z-10 w-full h-auto object-contain float drop-shadow-2xl rounded-3xl max-h-64 sm:max-h-80 lg:max-h-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
