export interface CartItem {
  id: number;
  name: string;
  image: string;
  pricing: { small: number; big: number };
  unit: string;
  quantity: number;
  size: 'small' | 'big';
  totalPrice: number;
}

export interface WishlistItem {
  id: number;
  name: string;
  image: string;
  pricing: { small: number; big: number };
  unit: string;
  category: string;
  description: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  };
  paymentMethod: string;
  orderDate: string;
  status: 'placed' | 'processing' | 'shipped' | 'delivered';
}

// Wishlist functions
export const getWishlist = (): WishlistItem[] => {
  const wishlist = localStorage.getItem('wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (item: WishlistItem): void => {
  const wishlist = getWishlist();
  const existingItem = wishlist.find(w => w.id === item.id);
  
  if (!existingItem) {
    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('wishlistUpdated'));
  }
};

export const removeFromWishlist = (id: number): void => {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter(item => item.id !== id);
  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent('wishlistUpdated'));
};

export const isInWishlist = (id: number): boolean => {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === id);
};

// Cart functions
export const getCart = (): CartItem[] => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item: CartItem): void => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(c => c.id === item.id && c.size === item.size);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += item.quantity;
    cart[existingItemIndex].totalPrice = cart[existingItemIndex].quantity * 
      (cart[existingItemIndex].size === 'small' ? cart[existingItemIndex].pricing.small : cart[existingItemIndex].pricing.big);
  } else {
    cart.push(item);
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent('cartUpdated'));
};

export const removeFromCart = (id: number, size: 'small' | 'big'): void => {
  const cart = getCart();
  const updatedCart = cart.filter(item => !(item.id === id && item.size === size));
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent('cartUpdated'));
};

export const updateCartQuantity = (id: number, size: 'small' | 'big', quantity: number): void => {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === id && item.size === size);
  
  if (itemIndex > -1) {
    if (quantity <= 0) {
      removeFromCart(id, size);
    } else {
      cart[itemIndex].quantity = quantity;
      cart[itemIndex].totalPrice = quantity * 
        (size === 'small' ? cart[itemIndex].pricing.small : cart[itemIndex].pricing.big);
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
  }
};

export const clearCart = (): void => {
  localStorage.setItem('cart', JSON.stringify([]));
  
  // Dispatch custom event
  window.dispatchEvent(new CustomEvent('cartUpdated'));
};

// Order functions
export const getOrders = (): Order[] => {
  const orders = localStorage.getItem('orders');
  return orders ? JSON.parse(orders) : [];
};

export const addOrder = (order: Order): void => {
  const orders = getOrders();
  orders.unshift(order); // Add to beginning for newest first
  localStorage.setItem('orders', JSON.stringify(orders));
};

export const generateOrderId = (): string => {
  return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
};
