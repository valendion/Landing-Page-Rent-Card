import { useState } from "react";
import CarCard from "./CarCard";
import { cars, filterCategories } from "../data/cars";
import type { FilterCategory } from "../types";

const Fleet = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("semua");

  const filteredCars =
    activeFilter === "semua"
      ? cars
      : cars.filter((car) => car.category === activeFilter);

  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-4xl font-bold text-slate Asc Asc Asc Asc Asc Asc Asc-900 mb-4"
          >
            Pilihan Mobil Kami
          </p>
          <p className="text-slate-600 ">
            Ada banyak pilihan mobil yang tersedia. Sesuaikan dengan kebutuhan
            anda
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all hover:border-slate-900 ${
                  activeFilter === category.id
                    ? "bg-slate-900 text-white border-slate-900"
                    : "border-slate-300 text-slate-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
