
import { Sparkles, Star, ShieldCheck, Zap } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  {
    id: 4,
    title: "Cyber Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80",
    category: "Apparel",
  },
  {
    id: 5,
    title: "Digital Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
    category: "Accessories",
  },
  {
    id: 6,
    title: "Smart Glasses",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
    category: "Accessories",
  },
  {
    id: 7,
    title: "Neon Sneakers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
    category: "Footwear",
  },
  {
    id: 8,
    title: "Tech Gloves",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1589476993333-f55b84301219?auto=format&fit=crop&q=80",
    category: "Accessories",
  },
  {
    id: 9,
    title: "Holo Belt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80",
    category: "Accessories",
  },
];

const FEATURES = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Each product is crafted with the finest materials and cutting-edge technology.",
  },
  {
    icon: Star,
    title: "Exclusive Designs",
    description: "Unique, limited-edition pieces that stand out from the crowd.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Authenticity",
    description: "Every item comes with a certificate of authenticity and warranty.",
  },
  {
    icon: Zap,
    title: "Fast Shipping",
    description: "Quick, secure delivery to your doorstep worldwide.",
  },
];

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
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
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/10"
              >
                <feature.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Top Selling Products</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter for exclusive deals and updates on new products.
            </p>
            <form className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
