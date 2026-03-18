// Gunakan 'export type' untuk import type
import type { Car, CityLocation, Testimonial, NavLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "Armada", href: "#fleet" },
  { label: "Alur Pemesanan", href: "#how-it-works" },
  { label: "Lokasi", href: "#locations" },
  { label: "Tetimoni", href: "#reviews" },
];

export const cities: CityLocation[] = [
  {
    id: "1",
    city: "New York",
    code: "NY",
    locationsCount: 3,
    color: "bg-blue-500",
  },
  {
    id: "2",
    city: "Los Angeles",
    code: "LA",
    locationsCount: 4,
    color: "bg-purple-500",
  },
  {
    id: "3",
    city: "Miami",
    code: "MI",
    locationsCount: 2,
    color: "bg-green-500",
  },
  {
    id: "4",
    city: "Chicago",
    code: "CH",
    locationsCount: 2,
    color: "bg-orange-500",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andi Setiawan",
    role: "Wisatawan dari Makassar",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    content:
      "Mobil Avanza sangat bersih dan terawat. Driver ramah dan mengenal jalan ke Pantai Bira dengan baik. Harga juga terjangkau untuk rental 3 hari.",
  },
  {
    id: 2,
    name: "Ibu Nurhaliza",
    role: "Residen Parepare",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    content:
      "Sudah langganan rental di sini untuk antar jemput anak sekolah. Pelayanan tepat waktu, mobil Xenia manual irit bensin. Recommended untuk keluarga!",
  },
  {
    id: 3,
    name: "Bapak H. Ahmad",
    role: "Pengusaha Parepare",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    content:
      "Sewa Fortuner untuk keperluan dinas ke Barru. Proses cepat, tidak ribet, dan mobil premium sesuai ekspektasi. Kantor mudah dicari, depan Masjid Al Hidayah.",
  },
];

export const stats = [
  { value: "100+", label: "Kendaraan Tersedia" },
  { value: "300+", label: "Order Selesai" },
  { value: "24/7", label: "Respon Cepat" },
  { value: "100%", label: "Unit Terawat" },
];

export const steps = [
  {
    number: 1,
    title: "Pilih Mobil Anda",
    description:
      "Jelajahi koleksi armada kami dan pilih kendaraan yang sempurna sesuai kebutuhan Anda dari koleksi premium kami.",
  },
  {
    number: 2,
    title: "Pesan & Bayar",
    description:
      "Selesaikan reservasi Anda dalam hitungan menit dengan sistem pembayaran aman dan konfirmasi instan kami.",
  },
  {
    number: 3,
    title: "Mulai Perjalanan",
    description:
      "Ambil mobil di lokasi yang ditentukan atau pilih layanan antar-jemput kami yang praktis.",
  },
];

export const filterCategories = [
  { id: "semua", label: "Semua" },
  { id: "matic", label: "Matic" },
  { id: "manual", label: "Manual" },
  { id: "sedan", label: "Sedan" },
] as const;

export const cars: Car[] = [
  {
    id: "1",
    name: "Toyota Avanza",
    category: "matic",
    year: 2023,
    pricePerDay: 350000,
    seats: 7,
    transmission: "Auto",
    bags: 3,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80",
    badge: "Paling Laris",
  },
  {
    id: "2",
    name: "Honda Brio",
    category: "matic",
    year: 2023,
    pricePerDay: 250000,
    seats: 5,
    transmission: "Auto",
    bags: 2,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
    badge: "Ekonomis",
  },
  {
    id: "3",
    name: "Toyota Innova",
    category: "matic",
    year: 2023,
    pricePerDay: 450000,
    seats: 7,
    transmission: "Auto",
    bags: 4,
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Daihatsu Xenia",
    category: "manual",
    year: 2022,
    pricePerDay: 300000,
    seats: 7,
    transmission: "Manual",
    bags: 3,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    name: "Toyota Fortuner",
    category: "matic",
    year: 2023,
    pricePerDay: 600000,
    seats: 7,
    transmission: "Auto",
    bags: 4,
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
    badge: "Premium",
  },
  {
    id: "6",
    name: "Honda City",
    category: "sedan",
    year: 2023,
    pricePerDay: 280000,
    seats: 5,
    transmission: "Auto",
    bags: 2,
    image:
      "https://images.unsplash.com/photo-1623597780975-38ccd5030c83?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "7",
    name: "Suzuki Ertiga",
    category: "manual",
    year: 2022,
    pricePerDay: 320000,
    seats: 7,
    transmission: "Manual",
    bags: 3,
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "8",
    name: "Mitsubishi Xpander",
    category: "matic",
    year: 2023,
    pricePerDay: 380000,
    seats: 7,
    transmission: "Auto",
    bags: 3,
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
    badge: "Paling Laris",
  },
];
