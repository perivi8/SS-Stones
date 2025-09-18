import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ReturnsExchange = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">Returns & Exchange Policy</h1>
            <p className="text-muted-foreground mb-8 text-center">Last updated: September 18, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Return Policy</h2>
              <p className="mb-6">
                At SS Stones, we want you to be completely satisfied with your purchase. If you are not satisfied with your order, you may return eligible items within 7 days of delivery for a refund or exchange.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Eligibility for Returns</h2>
              <p className="mb-4">To be eligible for a return, your item must be:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>In its original condition and packaging</li>
                <li>Unused and undamaged</li>
                <li>Accompanied by the original receipt or proof of purchase</li>
              </ul>
              <p className="mb-6">Custom orders, cut-to-size materials, and special orders are final sale and not eligible for return unless damaged or defective.</p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Return Process</h2>
              <p className="mb-4">To initiate a return, please follow these steps:</p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Contact our customer service team within 7 days of delivery at returns@sstones.com or +91 94908 12345</li>
                <li>Provide your order number and reason for return</li>
                <li>You will receive a Return Authorization Number (RMA) and return instructions</li>
                <li>Package the item securely with the RMA number clearly visible</li>
                <li>Ship the item back to us using a trackable shipping method</li>
              </ol>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Refunds</h2>
              <p className="mb-6">
                Once we receive and inspect your return, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method. Please note that shipping charges are non-refundable.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Exchanges</h2>
              <p className="mb-6">
                If you would like to exchange an item, please contact our customer service team. Exchanges are subject to product availability. You will be responsible for any price difference and additional shipping charges.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Damaged or Defective Items</h2>
              <p className="mb-6">
                If you receive a damaged or defective item, please contact us immediately at returns@sstones.com or +91 94908 12345. We will arrange for a replacement or refund, including return shipping costs.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Return Shipping</h2>
              <p className="mb-6">
                Customers are responsible for return shipping costs unless the return is due to our error or a defective product. We recommend using a trackable shipping method, as we cannot be responsible for items lost in transit.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about our Returns & Exchange policy, please contact us at:
                <br />
                <strong>Email:</strong> returns@sstones.com
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

export default ReturnsExchange;
