import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartModal from "@/components/AddToCartModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { allProducts } from "@/data/products";
import { addToWishlist, removeFromWishlist, isInWishlist } from "@/utils/localStorage";
import { DollarSign, Search, Filter, Grid, List, ShoppingCart, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedFinish, setSelectedFinish] = useState('all');
  const [selectedThickness, setSelectedThickness] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const productsPerPage = 6;

  // Filter to only show granite products
  const products = allProducts.filter(product => product.category === 'granite');

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-700', label: 'Under $700' },
    { value: '700-900', label: '$700 - $900' },
    { value: '900-1100', label: '$900 - $1100' },
    { value: '1100-1300', label: '$1100 - $1300' },
    { value: '1300+', label: 'Above $1300' }
  ];

  const colors = [
    { value: 'all', label: 'All Colors' },
    { value: 'white', label: 'White' },
    { value: 'black', label: 'Black' },
    { value: 'green', label: 'Green' },
    { value: 'brown', label: 'Brown' },
    { value: 'gray', label: 'Gray' },
    { value: 'blue', label: 'Blue' },
    { value: 'pink', label: 'Pink' },
    { value: 'red', label: 'Red' },
    { value: 'mixed', label: 'Mixed' }
  ];

  const finishes = [
    { value: 'all', label: 'All Finishes' },
    { value: 'polished', label: 'Polished' },
    { value: 'honed', label: 'Honed' },
    { value: 'leathered', label: 'Leathered' }
  ];

  const thicknesses = [
    { value: 'all', label: 'All Thickness' },
    { value: '18mm', label: '18mm' },
    { value: '20mm', label: '20mm' },
    { value: '30mm', label: '30mm' },
    { value: 'various', label: 'Various' }
  ];

  // Update wishlist state
  useEffect(() => {
    const updateWishlistState = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistItems(wishlist.map((item: any) => item.id));
    };

    updateWishlistState();
    
    // Listen for wishlist updates
    window.addEventListener('wishlistUpdated', updateWishlistState);
    
    return () => {
      window.removeEventListener('wishlistUpdated', updateWishlistState);
    };
  }, []);

  // Helper function to check if product matches price range
  const matchesPriceRange = (product: any, range: string) => {
    if (range === 'all') return true;
    
    const minPrice = Math.min(product.pricing.small, product.pricing.big);
    const maxPrice = Math.max(product.pricing.small, product.pricing.big);
    
    switch (range) {
      case '0-700':
        return minPrice < 700;
      case '700-900':
        return minPrice >= 700 && maxPrice <= 900;
      case '900-1100':
        return minPrice >= 900 && maxPrice <= 1100;
      case '1100-1300':
        return minPrice >= 1100 && maxPrice <= 1300;
      case '1300+':
        return minPrice > 1300;
      default:
        return true;
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch &&
           (selectedColor === 'all' || product.color === selectedColor) &&
           (selectedFinish === 'all' || product.finish === selectedFinish) &&
           (selectedThickness === 'all' || product.thickness === selectedThickness) &&
           matchesPriceRange(product, priceRange);
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to first page when filters change
  const handleFilterChange = (filterType: string, value: string) => {
    setCurrentPage(1);
    switch (filterType) {
      case 'priceRange':
        setPriceRange(value);
        break;
      case 'color':
        setSelectedColor(value);
        break;
      case 'finish':
        setSelectedFinish(value);
        break;
      case 'thickness':
        setSelectedThickness(value);
        break;
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleWishlistToggle = (product: any) => {
    if (wishlistItems.includes(product.id)) {
      removeFromWishlist(product.id);
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
    }
  };

  const handleAddToCart = (product: any) => {
    setSelectedProduct(product);
    setShowAddToCartModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Premium Granite Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our extensive range of premium granite slabs, perfect for kitchens, bathrooms, and architectural projects.
              </p>
            </div>
          </div>
        </section>

        {/* Shop Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-64 flex-shrink-0">
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Filter className="w-5 h-5 text-granite-gold" />
                      <h3 className="text-lg font-semibold text-primary">Filters</h3>
                    </div>

                    {/* Price Range Filter */}
                    <div className="mb-6">
                      <h4 className="font-medium text-primary mb-3">Price Range</h4>
                      <div className="space-y-2">
                        {priceRanges.map(range => (
                          <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="priceRange"
                              value={range.value}
                              checked={priceRange === range.value}
                              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                              className="text-granite-gold focus:ring-granite-gold"
                            />
                            <span className="text-sm text-muted-foreground">{range.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Color Filter */}
                    <div className="mb-6">
                      <h4 className="font-medium text-primary mb-3">Color</h4>
                      <div className="space-y-2">
                        {colors.map(color => (
                          <label key={color.value} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="color"
                              value={color.value}
                              checked={selectedColor === color.value}
                              onChange={(e) => handleFilterChange('color', e.target.value)}
                              className="text-granite-gold focus:ring-granite-gold"
                            />
                            <span className="text-sm text-muted-foreground">{color.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Finish Filter */}
                    <div className="mb-6">
                      <h4 className="font-medium text-primary mb-3">Finish</h4>
                      <div className="space-y-2">
                        {finishes.map(finish => (
                          <label key={finish.value} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="finish"
                              value={finish.value}
                              checked={selectedFinish === finish.value}
                              onChange={(e) => handleFilterChange('finish', e.target.value)}
                              className="text-granite-gold focus:ring-granite-gold"
                            />
                            <span className="text-sm text-muted-foreground">{finish.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Thickness Filter */}
                    <div className="mb-6">
                      <h4 className="font-medium text-primary mb-3">Thickness</h4>
                      <div className="space-y-2">
                        {thicknesses.map(thickness => (
                          <label key={thickness.value} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="thickness"
                              value={thickness.value}
                              checked={selectedThickness === thickness.value}
                              onChange={(e) => handleFilterChange('thickness', e.target.value)}
                              className="text-granite-gold focus:ring-granite-gold"
                            />
                            <span className="text-sm text-muted-foreground">{thickness.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Products Area */}
              <div className="flex-1">
                {/* Search and View Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search granite products..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Results Info */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} granite products
                    {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
                  </p>
                </div>

                {/* Products Grid */}
                <div className={`grid gap-6 mb-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                  {currentProducts.map((product) => (
                    <Card key={product.id} className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
                      <Link to={`/product/${product.id}`}>
                        <div className="relative overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-granite-gold text-white px-2 py-1 rounded text-xs font-medium">
                              Granite
                            </span>
                          </div>
                          {product.finish && (
                            <div className="absolute top-4 right-4">
                              <span className="bg-white/90 text-primary px-2 py-1 rounded text-xs font-medium capitalize">
                                {product.finish}
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                      <CardContent className="p-6">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="text-lg font-bold text-primary mb-2 hover:text-granite-gold transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-sm mb-4">
                          {product.description}
                        </p>
                        
                        {/* Features */}
                        {product.features && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {product.features.slice(0, 2).map((feature, idx) => (
                                <span key={idx} className="bg-muted text-xs px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Pricing */}
                        <div className="mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Small Size:</span>
                              <div className="flex items-center text-granite-gold font-bold">
                                <DollarSign className="w-4 h-4" />
                                <span>{product.pricing.small}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Big Size:</span>
                              <div className="flex items-center text-granite-gold font-bold">
                                <DollarSign className="w-4 h-4" />
                                <span>{product.pricing.big}</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">{product.unit}</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleWishlistToggle(product)}
                            className="flex-1"
                          >
                            <Heart className={`w-4 h-4 mr-1 ${wishlistItems.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                            {wishlistItems.includes(product.id) ? 'Wishlisted' : 'Wishlist'}
                          </Button>
                          <Button 
                            variant="granite" 
                            size="sm" 
                            className="flex-1"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Previous/Next Buttons */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <Button
                          key={pageNumber}
                          variant={currentPage === pageNumber ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handlePageClick(pageNumber)}
                          className="w-10 h-10"
                        >
                          {pageNumber}
                        </Button>
                      ))}
                    </div>

                    {/* Page Info */}
                    <div className="text-sm text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </div>
                  </div>
                )}

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No granite products found matching your filters.</p>
                  </div>
                )}
              </div>
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

export default Shop;
