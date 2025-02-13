
import { Star, Atom, CircuitBoard } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "Quantum Hoodie",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    category: "Apparel",
  },
  {
    id: 2,
    title: "Neural Cap",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80",
    category: "Accessories",
  },
  {
    id: 3,
    title: "Tech Backpack",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80",
    category: "Bags",
  },
];

const CATEGORIES = [
  {
    title: "Apparel",
    icon: Star,
    description: "Future-ready clothing for the modern explorer",
  },
  {
    title: "Accessories",
    icon: Atom,
    description: "Enhance your style with quantum accessories",
  },
  {
    title: "Tech Gear",
    icon: CircuitBoard,
    description: "Cutting-edge gear for the digital age",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-12 sm:py-32">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="animate-fade-up text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Future Merch Magic
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our collection of future-ready merchandise, designed for the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Shop by Category</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="group animate-fade-in rounded-xl bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/10"
              >
                <category.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-white">{category.title}</h3>
                <p className="text-gray-400">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Featured Products</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
