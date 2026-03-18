export type Car = {
  id: string;
  name: string;
  category: "semua" | "matic" | "manual" | "sedan";
  year: number;
  pricePerDay: number;
  seats: number;
  transmission: "Auto" | "Manual";
  bags: number;
  image: string;
  badge?: string;
};

export type FilterCategory = "semua" | "matic" | "manual" | "sedan";

// Rename dari Location ke CityLocation untuk menghindari conflict dengan DOM Location
export type CityLocation = {
  id: string;
  city: string;
  code: string;
  locationsCount: number;
  color: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
};

export type NavLink = {
  label: string;
  href: string;
};
