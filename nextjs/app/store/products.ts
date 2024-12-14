export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Karate Gi (Uniform)",
    price: 50.0,
    image: "/images/products/karate-gi.jpg",
    description: "High-quality karate uniform, available in multiple sizes.",
  },
  {
    id: 2,
    name: "Black Belt",
    price: 20.0,
    image: "/images/products/black-belt.jpg",
    description: "Durable black belt for advanced practitioners.",
  },
  {
    id: 3,
    name: "Protective Gear Set",
    price: 80.0,
    image: "/images/products/gear-set.jpg",
    description: "Full protective gear set for safe training.",
  },
];