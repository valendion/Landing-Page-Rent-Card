import React from "react";
import type { Car } from "../types";
import { UsersIcon, GearIcon, BriefcaseIcon } from "./Icons";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Ekonomis":
        return "bg-green-500 text-white";
      case "Paling Laris":
        return "bg-orange-500 text-white";
      case "Premium":
        return "bg-purple-500 text-white";
      default:
        return "bg-slate-900 text-white";
    }
  };

  // Format harga ke Rupiah
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  // Buat pesan WhatsApp dengan nama mobil dan harga
  const getWhatsAppLink = () => {
    const message = `Halo, saya ingin pesan mobil ${car.name} dengan harga Rp ${formatPrice(car.pricePerDay)}/hari. Apakah tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/6285340715225?text=${encodedMessage}`;
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="car-card bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {car.badge && (
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(car.badge)}`}
          >
            {car.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {car.name}
            </h3>
            <p className="text-sm text-slate-500">
              {car.category.charAt(0).toUpperCase() + car.category.slice(1)} •{" "}
              {car.year}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-slate-900">
              Rp {formatPrice(car.pricePerDay)}
            </p>
            <p className="text-xs text-slate-400">/hari</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-600 mb-6 py-4 border-y border-slate-100">
          <div className="flex items-center space-x-1">
            <UsersIcon />
            <span>{car.seats} Kursi</span>
          </div>
          <div className="flex items-center space-x-1">
            <GearIcon />
            <span>{car.transmission === "Auto" ? "Matic" : "Manual"}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BriefcaseIcon />
            <span>{car.bags} Bagasi</span>
          </div>
        </div>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-slate-100 text-slate-900 py-3 rounded-xl font-medium hover:bg-slate-900 hover:text-white transition-all duration-300 text-center"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
};

export default CarCard;
