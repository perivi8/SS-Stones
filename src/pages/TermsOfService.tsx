import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">Terms of Service</h1>
            <p className="text-muted-foreground mb-8 text-center">Last updated: September 18, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Introduction</h2>
              <p className="mb-6">
                Welcome to SS Stones. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Use of Our Services</h2>
              <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Use our services in any way that violates any applicable laws or regulations</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
                <li>Attempt to gain unauthorized access to any portion of our services</li>
                <li>Use our services to transmit any advertising or promotional material</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Orders and Payments</h2>
              <p className="mb-4">All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Product availability</li>
                <li>Errors in the description or price of the product</li>
                <li>Errors in your order</li>
              </ul>
              <p className="mb-6">Payment must be made in full at the time of ordering unless otherwise agreed in writing.</p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Shipping and Delivery</h2>
              <p className="mb-6">
                We will make every effort to deliver your order within the estimated timeframe. However, delivery times may vary depending on your location and other factors beyond our control. Please refer to our Shipping Policy for more details.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Returns and Refunds</h2>
              <p className="mb-6">
                Please review our Returns & Exchange policy for information about returning products and obtaining refunds.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Intellectual Property</h2>
              <p className="mb-6">
                All content included on our website, including text, graphics, logos, and images, is the property of SS Stones or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="mb-6">
                To the fullest extent permitted by law, SS Stones shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Changes to These Terms</h2>
              <p className="mb-6">
                We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at:
                <br />
                <strong>Email:</strong> info@sstones.com
                <br />
                <strong>Phone:</strong> +91 94908 12345
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
