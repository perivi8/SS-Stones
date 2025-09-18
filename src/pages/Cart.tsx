import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getCart, updateCartQuantity, removeFromCart } from "@/utils/localStorage";
import type { CartItem } from "@/utils/localStorage";
import { DollarSign, Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const updateCartItems = () => {
      setCartItems(getCart());
    };

    updateCartItems();
    
    // Listen for cart updates
    window.addEventListener('cartUpdated', updateCartItems);
    
    return () => {
      window.removeEventListener('cartUpdated', updateCartItems);
    };
  }, []);

  const handleQuantityChange = (id: number, size: 'small' | 'big', newQuantity: number) => {
    updateCartQuantity(id, size, newQuantity);
  };

  const handleRemoveItem = (id: number, size: 'small' | 'big') => {
    removeFromCart(id, size);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);
  const shipping = subtotal > 1000 ? 0 : 50; // Free shipping over $1000
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-0">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/shop">
                <Button variant="granite" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Header Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/shop">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-primary">Shopping Cart</h1>
                <p className="text-muted-foreground">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={`${item.id}-${item.size}`} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-muted-foreground capitalize">
                            {item.size} Size • {item.unit}
                          </p>
                          <div className="flex items-center text-granite-gold font-bold mt-1">
                            <DollarSign className="w-4 h-4" />
                            <span>
                              {item.size === 'small' ? item.pricing.small : item.pricing.big}
                            </span>
                            <span className="text-muted-foreground ml-1">each</span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, item.size, parseInt(e.target.value) || 1)}
                            className="w-16 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Total Price */}
                        <div className="text-right">
                          <div className="flex items-center text-lg font-bold text-granite-gold">
                            <DollarSign className="w-5 h-5" />
                            <span>{item.totalPrice.toFixed(2)}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id, item.size)}
                            className="text-red-500 hover:text-red-700 mt-2"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4" />
                          <span>{subtotal.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4" />
                          <span>{shipping.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      {shipping === 0 && (
                        <p className="text-sm text-green-600">
                          🎉 Free shipping on orders over $1000!
                        </p>
                      )}
                      
                      <div className="flex justify-between">
                        <span>Tax (10%)</span>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4" />
                          <span>{tax.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <div className="flex items-center text-granite-gold">
                          <DollarSign className="w-5 h-5" />
                          <span>{total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link to="/checkout" className="block">
                        <Button variant="granite" size="lg" className="w-full">
                          Proceed to Checkout
                        </Button>
                      </Link>
                      
                      <Link to="/shop" className="block">
                        <Button variant="outline" size="lg" className="w-full">
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>

                    {/* Security Badge */}
                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Secure Checkout</span>
                      </div>
                      <p>Your payment information is protected</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
