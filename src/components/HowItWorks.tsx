import { steps } from "../data/cars";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-4xl font-bold text-slate-900 mb-4">
            Alur Pemesanan
          </p>
          <p className="text-slate-600 text-center ">
            Menyewa mobil impian Anda sangat mudah dan praktis berkat proses
            kami yang efisien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300 group "
            >
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl text-left font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-left leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
