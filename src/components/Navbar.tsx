
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Package, User, Info, Mail, ShoppingCart } from "lucide-react";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">FutureMerch</span>
        </Link>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="flex items-center space-x-1 text-foreground/60 transition-colors hover:text-foreground">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-1 text-foreground/60 transition-colors hover:text-foreground">
              <Package className="h-4 w-4" />
              <span>Products</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-foreground/60 transition-colors hover:text-foreground">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-foreground/60 transition-colors hover:text-foreground">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
