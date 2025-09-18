import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, Home, ShoppingBag } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || 'ORD-UNKNOWN';

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold text-primary mb-4">Order Placed Successfully!</h1>
                <p className="text-lg text-muted-foreground">
                  Thank you for your order. We've received your payment and will process your order shortly.
                </p>
              </div>

              {/* Order Details Card */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Order ID */}
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Order Confirmation</h2>
                      <p className="text-muted-foreground">Order ID: <span className="font-mono text-primary">{orderId}</span></p>
                    </div>

                    {/* Order Status Steps */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">What happens next?</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-medium text-green-800">Order Confirmed</h4>
                          <p className="text-sm text-green-600 text-center">Your order has been received and confirmed</p>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                            <Package className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-medium text-blue-800">Processing</h4>
                          <p className="text-sm text-blue-600 text-center">We're preparing your items for shipment</p>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                            <Truck className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-medium text-purple-800">Shipped</h4>
                          <p className="text-sm text-purple-600 text-center">Your order will be shipped soon</p>
                        </div>
                      </div>
                    </div>

                    {/* Important Information */}
                    <div className="bg-muted/50 p-6 rounded-lg text-left">
                      <h4 className="font-semibold mb-3">Important Information:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• You will receive an email confirmation shortly</li>
                        <li>• Tracking information will be sent once your order ships</li>
                        <li>• Estimated delivery time: 5-7 business days</li>
                        <li>• For any questions, contact our support team</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/orders">
                  <Button variant="granite" size="lg" className="w-full sm:w-auto">
                    <Package className="w-5 h-5 mr-2" />
                    Track Your Order
                  </Button>
                </Link>
                
                <Link to="/shop">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
                
                <Link to="/">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* Contact Support */}
              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about your order, our customer support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Link to="/contact-us">
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                  </Link>
                  <a href="tel:+919490812345" className="inline-block">
                    <Button variant="outline" size="sm">
                      Call: +91 94908 12345
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
