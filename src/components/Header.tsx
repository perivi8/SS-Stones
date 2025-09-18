import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Heart, ShoppingCart, Package, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [quotesCount, setQuotesCount] = useState(0);
  const location = useLocation();

  const navItems = [
    { 
      title: "Home", 
      href: "/",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    { 
      title: "About", 
      href: "/about-us",
    },
    { 
      title: "Contact", 
      href: "/contact-us",
    },
  ];

  // Update cart, wishlist, and quotes counts from localStorage
  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
      setCartCount(cart.reduce((total: number, item: any) => total + item.quantity, 0));
      setWishlistCount(wishlist.length);
      setQuotesCount(quotes.length);
    };

    updateCounts();
    
    // Listen for storage changes
    window.addEventListener('storage', updateCounts);
    // Listen for custom events
    window.addEventListener('cartUpdated', updateCounts);
    window.addEventListener('wishlistUpdated', updateCounts);
    window.addEventListener('quotesUpdated', updateCounts);

    return () => {
      window.removeEventListener('storage', updateCounts);
      window.removeEventListener('cartUpdated', updateCounts);
      window.removeEventListener('wishlistUpdated', updateCounts);
      window.removeEventListener('quotesUpdated', updateCounts);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-primary tracking-wide">
                SS STONES
                <span className="text-granite-gold block text-xs font-normal tracking-widest">
                  Chittoor, Andhra Pradesh
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className={`px-3 py-2 transition-colors font-medium ${
                    isActive(item.href)
                      ? 'text-granite-gold border-b-2 border-granite-gold'
                      : 'text-foreground hover:text-granite-gold'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section - Icons and Button */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            {/* My Quotes Icon */}
            <Link to="/my-quotes" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <FileText className="h-5 w-5" />
                {quotesCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-blue-500 text-white text-xs">
                    {quotesCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-granite-gold text-white text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Orders Icon */}
            <Link to="/orders">
              <Button variant="ghost" size="icon">
                <Package className="h-5 w-5" />
              </Button>
            </Link>

            {/* Get Quote Button */}
            <Link to="/request-quote">
              <Button variant="quote" size="sm">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className={`block px-3 py-2 text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-granite-gold'
                          : 'text-foreground hover:text-granite-gold'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  
                  {/* Mobile Icons */}
                  <div className="flex items-center space-x-4 px-3 py-2">
                    <Link to="/my-quotes" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="icon" className="relative">
                        <FileText className="h-5 w-5" />
                        {quotesCount > 0 && (
                          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-blue-500 text-white text-xs">
                            {quotesCount}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                    <Link to="/wishlist" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="icon" className="relative">
                        <Heart className="h-5 w-5" />
                        {wishlistCount > 0 && (
                          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                            {wishlistCount}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                    <Link to="/cart" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-granite-gold text-white text-xs">
                            {cartCount}
                          </Badge>
                        )}
                      </Button>
                    </Link>
                    <Link to="/orders" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="icon">
                        <Package className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <Link to="/request-quote" onClick={() => setIsOpen(false)}>
                    <Button variant="quote" className="mt-6 w-full">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;