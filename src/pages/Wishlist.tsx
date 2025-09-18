import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartModal from "@/components/AddToCartModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWishlist, removeFromWishlist } from "@/utils/localStorage";
import { allProducts } from "@/data/products";
import type { WishlistItem } from "@/utils/localStorage";
import { DollarSign, ShoppingCart, Heart, Trash2, ArrowLeft } from "lucide-react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  useEffect(() => {
    const updateWishlistItems = () => {
      setWishlistItems(getWishlist());
    };

    updateWishlistItems();
    
    // Listen for wishlist updates
    window.addEventListener('wishlistUpdated', updateWishlistItems);
    
    return () => {
      window.removeEventListener('wishlistUpdated', updateWishlistItems);
    };
  }, []);

  const handleRemoveFromWishlist = (id: number) => {
    removeFromWishlist(id);
  };

  const handleAddToCart = (item: WishlistItem) => {
    const product = allProducts.find(p => p.id === item.id);
    if (product) {
      setSelectedProduct(product);
      setShowAddToCartModal(true);
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-0">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <Heart className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">Your Wishlist is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Save items you love to your wishlist and shop them later.
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
                <h1 className="text-4xl font-bold text-primary">My Wishlist</h1>
                <p className="text-muted-foreground">
                  {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wishlist Items */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-0">
                    <Link to={`/product/${item.id}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-granite-gold text-white px-2 py-1 rounded text-xs font-medium capitalize">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="p-4">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-granite-gold transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Small Size:</span>
                            <div className="flex items-center text-granite-gold font-bold">
                              <DollarSign className="w-4 h-4" />
                              <span>{item.pricing.small}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Big Size:</span>
                            <div className="flex items-center text-granite-gold font-bold">
                              <DollarSign className="w-4 h-4" />
                              <span>{item.pricing.big}</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground text-center">{item.unit}</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveFromWishlist(item.id)}
                          className="flex-1"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </Button>
                        <Button 
                          variant="granite" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleAddToCart(item)}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Add to Cart Modal */}
      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          isOpen={showAddToCartModal}
          onClose={() => {
            setShowAddToCartModal(false);
            setSelectedProduct(null);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default Wishlist;
