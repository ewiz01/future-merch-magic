
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, price, image, category }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, title, price, image, category });
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <Card className="group relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
            {category}
          </span>
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-100">{title}</h3>
        <p className="mt-1 text-2xl font-bold text-primary">${price}</p>
        <Button
          onClick={handleAddToCart}
          className="mt-4 w-full gap-2"
          variant="secondary"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
