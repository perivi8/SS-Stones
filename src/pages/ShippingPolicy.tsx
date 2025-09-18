import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ShippingPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 relative">
          <Button 
            variant="outline" 
            className="absolute top-4 left-4 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          
          <div className="max-w-4xl mx-auto pt-10">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">Shipping Policy</h1>
            <p className="text-muted-foreground mb-8 text-center">Last updated: September 18, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Processing Time</h2>
              <p className="mb-6">
                Orders are typically processed within 1-2 business days (excluding weekends and public holidays) after receiving your order. During peak seasons or sales events, processing times may be longer.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Shipping Methods & Delivery Time</h2>
              <p className="mb-4">We offer the following shipping options:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Standard Shipping:</strong> 3-7 business days</li>
                <li><strong>Express Shipping:</strong> 1-3 business days (additional charges apply)</li>
                <li><strong>Bulk Orders:</strong> Delivery time varies based on order size and destination</li>
              </ul>
              <p className="mb-6">
                Please note that delivery times are estimates and not guaranteed. Delays may occur due to unforeseen circumstances such as weather conditions or carrier delays.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Shipping Destinations</h2>
              <p className="mb-6">
                We currently ship throughout India. For international shipping inquiries, please contact our customer service team at shipping@sstones.com.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Shipping Rates</h2>
              <p className="mb-4">Shipping rates are calculated based on:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Package weight and dimensions</li>
                <li>Shipping destination</li>
                <li>Selected shipping method</li>
              </ul>
              <p className="mb-6">
                You can view the shipping cost at checkout before completing your purchase.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Order Tracking</h2>
              <p className="mb-6">
                Once your order has been shipped, you will receive a confirmation email with tracking information. You can track your order using the provided tracking number on the carrier's website.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Delivery Issues</h2>
              <p className="mb-6">
                If you encounter any issues with your delivery, such as damaged packages or incorrect items, please contact our customer service team immediately at shipping@sstones.com or +91 94908 12345.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Undeliverable Packages</h2>
              <p className="mb-6">
                If a package is returned to us as undeliverable, we will contact you to arrange for reshipment. Additional shipping charges may apply.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Business Days</h2>
              <p className="mb-6">
                Our business days are Monday through Saturday, excluding public holidays. Orders placed on weekends or holidays will be processed on the next business day.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about our shipping policy, please contact us at:
                <br />
                <strong>Email:</strong> shipping@sstones.com
                <br />
                <strong>Phone:</strong> +91 94908 12345
                <br />
                <strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
