import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartModal from "@/components/AddToCartModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { allProducts } from "@/data/products";
import { addToWishlist, removeFromWishlist, isInWishlist } from "@/utils/localStorage";
import { 
  DollarSign, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Truck, 
  Shield, 
  Award,
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInWishlistState, setIsInWishlistState] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const product = allProducts.find(p => p.id === parseInt(id || '1'));
  
  useEffect(() => {
    if (product) {
      setIsInWishlistState(isInWishlist(product.id));
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-0">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/shop">
              <Button variant="granite">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related products (same category, different products)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleWishlistToggle = () => {
    if (isInWishlistState) {
      removeFromWishlist(product.id);
      setIsInWishlistState(false);
    } else {
      const wishlistItem = {
        id: product.id,
        name: product.name,
        image: product.images[0],
        pricing: product.pricing,
        unit: product.unit,
        category: product.category,
        description: product.description,
      };
      addToWishlist(wishlistItem);
      setIsInWishlistState(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Breadcrumb */}
        <section className="py-4 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/shop" className="text-muted-foreground hover:text-primary">Shop</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary font-medium">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <div className="mb-6">
              <Link to="/shop">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Shop
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={nextImage}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="flex gap-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                          currentImageIndex === index ? 'border-granite-gold' : 'border-muted'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="capitalize">
                      {product.category}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {product.finish}
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-primary mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.detailedDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-4">Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Small Size:</span>
                      <div className="flex items-center text-granite-gold font-bold text-xl">
                        <DollarSign className="w-5 h-5" />
                        <span>{product.pricing.small}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Big Size:</span>
                      <div className="flex items-center text-granite-gold font-bold text-xl">
                        <DollarSign className="w-5 h-5" />
                        <span>{product.pricing.big}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {product.unit}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={handleWishlistToggle}
                  >
                    <Heart className={`w-5 h-5 mr-2 ${isInWishlistState ? 'fill-red-500 text-red-500' : ''}`} />
                    {isInWishlistState ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  </Button>
                  
                  <Button
                    variant="granite"
                    size="lg"
                    className="flex-1"
                    onClick={() => setShowAddToCartModal(true)}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>

                <Button variant="outline" size="lg" className="w-full">
                  Request Quote
                </Button>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-granite-gold mx-auto mb-2" />
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $500</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-granite-gold mx-auto mb-2" />
                    <p className="text-sm font-medium">Quality Guarantee</p>
                    <p className="text-xs text-muted-foreground">Premium materials</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-granite-gold mx-auto mb-2" />
                    <p className="text-sm font-medium">Expert Support</p>
                    <p className="text-xs text-muted-foreground">Professional advice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="mt-12">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Specifications</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">Technical Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Origin:</span>
                          <span className="font-medium">{product.specifications.origin}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Density:</span>
                          <span className="font-medium">{product.specifications.density}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Compressive Strength:</span>
                          <span className="font-medium">{product.specifications.compressiveStrength}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Water Absorption:</span>
                          <span className="font-medium">{product.specifications.waterAbsorption}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">Applications</h3>
                      <div className="space-y-2">
                        {product.applications.map((application, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-granite-gold rounded-full"></div>
                            <span>{application}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-medium text-primary mb-2">Available Finishes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.specifications.finishOptions.map((finish, index) => (
                            <Badge key={index} variant="outline">{finish}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Related Products
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-granite-gold text-white capitalize">
                          {relatedProduct.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <div className="flex items-center text-granite-gold font-bold">
                            <DollarSign className="w-4 h-4" />
                            <span>{relatedProduct.pricing.small} - {relatedProduct.pricing.big}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{relatedProduct.unit}</p>
                        </div>
                      </div>
                      <Link to={`/product/${relatedProduct.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Add to Cart Modal */}
      <AddToCartModal
        product={product}
        isOpen={showAddToCartModal}
        onClose={() => setShowAddToCartModal(false)}
      />

      <Footer />
    </div>
  );
};

export default ProductDetails;
