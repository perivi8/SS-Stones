import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8 text-center">Last updated: September 18, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us, such as when you create an account, place an order, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Personal information (name, email, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Order history and preferences</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and inquiries</li>
                <li>Improve our products and services</li>
                <li>Send you promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Shipping carriers to fulfill your orders</li>
                <li>Legal authorities when required by law</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Your Rights</h2>
              <p className="mb-6">
                You have the right to access, correct, or delete your personal information. Please contact us to exercise these rights.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Changes to This Policy</h2>
              <p className="mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
