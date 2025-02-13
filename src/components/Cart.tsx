
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [showBilling, setShowBilling] = useState(false);

  const shipping = 10.00;
  const tax = total * 0.1; // 10% tax
  const finalTotal = total + shipping + tax;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {items.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full border-l border-border sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>{showBilling ? "Billing Summary" : "Shopping Cart"}</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex h-full flex-col gap-6">
          {showBilling ? (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Order Summary</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.title} (x{item.quantity})</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-4">
                <Button 
                  className="w-full"
                  onClick={() => {
                    // Handle payment processing here
                    alert("Payment processing would happen here!");
                  }}
                >
                  Proceed to Payment
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowBilling(false)}
                >
                  Back to Cart
                </Button>
              </div>
            </div>
          ) : (
            <>
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground">Your cart is empty</p>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 border-b border-border py-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <div className="flex flex-1 flex-col">
                          <h3 className="font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.category}
                          </p>
                          <p className="mt-1 font-bold text-primary">
                            ${item.price}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, Math.max(0, item.quantity - 1))
                              }
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between font-semibold">
                      <span>Subtotal</span>
                      <span className="text-xl text-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    <Button 
                      className="mt-4 w-full"
                      onClick={() => setShowBilling(true)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
