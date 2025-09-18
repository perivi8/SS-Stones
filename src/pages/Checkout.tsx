import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { getCart, clearCart, addOrder, generateOrderId } from "@/utils/localStorage";
import type { CartItem } from "@/utils/localStorage";
import { 
  DollarSign, 
  CreditCard, 
  Landmark, 
  Shield, 
  ArrowLeft,
  Lock,
  CheckCircle
} from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Address Form State
  const [addressForm, setAddressForm] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    bankName: '',
    accountNumber: '',
    ifscCode: ''
  });

  useEffect(() => {
    const items = getCart();
    if (items.length === 0) {
      navigate('/cart');
    }
    setCartItems(items);
  }, [navigate]);

  const subtotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleAddressChange = (field: string, value: string) => {
    setAddressForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentForm(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    // Address validation
    if (!addressForm.fullName || !addressForm.address || !addressForm.city || 
        !addressForm.state || !addressForm.pincode || !addressForm.phone) {
      alert('Please fill in all address fields');
      return false;
    }

    // Payment validation based on method
    if (paymentMethod === 'credit-card' || paymentMethod === 'debit-card') {
      if (!paymentForm.cardNumber || !paymentForm.expiryDate || 
          !paymentForm.cvv || !paymentForm.cardholderName) {
        alert('Please fill in all card details');
        return false;
      }
    } else if (paymentMethod === 'net-banking') {
      if (!paymentForm.bankName || !paymentForm.accountNumber || !paymentForm.ifscCode) {
        alert('Please fill in all banking details');
        return false;
      }
    }

    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const order = {
      id: generateOrderId(),
      items: cartItems,
      totalAmount: total,
      shippingAddress: addressForm,
      paymentMethod: paymentMethod,
      orderDate: new Date().toISOString(),
      status: 'placed' as const
    };

    addOrder(order);
    clearCart();
    
    setIsLoading(false);
    navigate('/order-success', { state: { orderId: order.id } });
  };

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case 'credit-card':
      case 'debit-card':
        return <CreditCard className="w-5 h-5" />;
      case 'net-banking':
        return <Landmark className="w-5 h-5" />;
      default:
        return <CreditCard className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Header Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/cart')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-primary">Checkout</h1>
                <p className="text-muted-foreground">Complete your order</p>
              </div>
            </div>
          </div>
        </section>

        {/* Checkout Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={addressForm.fullName}
                          onChange={(e) => handleAddressChange('fullName', e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={addressForm.phone}
                          onChange={(e) => handleAddressChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        value={addressForm.address}
                        onChange={(e) => handleAddressChange('address', e.target.value)}
                        placeholder="Enter your complete address"
                        rows={3}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={addressForm.city}
                          onChange={(e) => handleAddressChange('city', e.target.value)}
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          value={addressForm.state}
                          onChange={(e) => handleAddressChange('state', e.target.value)}
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={addressForm.pincode}
                          onChange={(e) => handleAddressChange('pincode', e.target.value)}
                          placeholder="Pincode"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                          <span>Credit Card</span>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="debit-card" id="debit-card" />
                        <Label htmlFor="debit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="w-5 h-5 text-green-600" />
                          <span>Debit Card</span>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="net-banking" id="net-banking" />
                        <Label htmlFor="net-banking" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Landmark className="w-5 h-5 text-purple-600" />
                          <span>Net Banking</span>
                        </Label>
                      </div>
                    </RadioGroup>

                    {/* Payment Form Fields */}
                    {(paymentMethod === 'credit-card' || paymentMethod === 'debit-card') && (
                      <div className="space-y-4 mt-4 p-4 bg-muted/50 rounded-lg">
                        <div>
                          <Label htmlFor="cardholderName">Cardholder Name *</Label>
                          <Input
                            id="cardholderName"
                            value={paymentForm.cardholderName}
                            onChange={(e) => handlePaymentChange('cardholderName', e.target.value)}
                            placeholder="Name on card"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            value={paymentForm.cardNumber}
                            onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              value={paymentForm.expiryDate}
                              onChange={(e) => handlePaymentChange('expiryDate', e.target.value)}
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              value={paymentForm.cvv}
                              onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                              placeholder="123"
                              maxLength={3}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'net-banking' && (
                      <div className="space-y-4 mt-4 p-4 bg-muted/50 rounded-lg">
                        <div>
                          <Label htmlFor="bankName">Bank Name *</Label>
                          <Input
                            id="bankName"
                            value={paymentForm.bankName}
                            onChange={(e) => handlePaymentChange('bankName', e.target.value)}
                            placeholder="Select your bank"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="accountNumber">Account Number *</Label>
                          <Input
                            id="accountNumber"
                            value={paymentForm.accountNumber}
                            onChange={(e) => handlePaymentChange('accountNumber', e.target.value)}
                            placeholder="Enter account number"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="ifscCode">IFSC Code *</Label>
                          <Input
                            id="ifscCode"
                            value={paymentForm.ifscCode}
                            onChange={(e) => handlePaymentChange('ifscCode', e.target.value)}
                            placeholder="Enter IFSC code"
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{item.name}</h4>
                            <p className="text-xs text-muted-foreground capitalize">
                              {item.size} • Qty: {item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center text-sm font-bold">
                            <DollarSign className="w-3 h-3" />
                            <span>{item.totalPrice.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Price Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <div className="flex items-center">
                          <DollarSign className="w-3 h-3" />
                          <span>{subtotal.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <div className="flex items-center">
                          <DollarSign className="w-3 h-3" />
                          <span>{shipping.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>Tax</span>
                        <div className="flex items-center">
                          <DollarSign className="w-3 h-3" />
                          <span>{tax.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <div className="flex items-center text-granite-gold">
                          <DollarSign className="w-4 h-4" />
                          <span>{total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Place Order Button */}
                    <Button 
                      variant="granite" 
                      size="lg" 
                      className="w-full"
                      onClick={handlePlaceOrder}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Place Order
                        </div>
                      )}
                    </Button>

                    {/* Security Info */}
                    <div className="text-center text-xs text-muted-foreground">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Shield className="w-3 h-3 text-green-600" />
                        <span>Secure Payment</span>
                      </div>
                      <p>Your payment information is encrypted and secure</p>
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

export default Checkout;
