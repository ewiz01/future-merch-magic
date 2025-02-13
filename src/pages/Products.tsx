import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Use the same products data as in Home
const PRODUCTS = [
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

const CATEGORIES = ["All", "Apparel", "Accessories", "Bags", "Footwear"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-16">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
      
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="min-w-[80px]"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="animate-fade-in">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-8 text-center text-muted-foreground">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default Products;
