import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: 'What types of stones do you offer?',
      answer: 'We offer a wide range of granite and marble stones including Madanpalli White, Kuppum Black, and various other premium Indian granite varieties.'
    },
    {
      question: 'Do you provide samples?',
      answer: 'Yes, we provide samples of our stones. Please contact our sales team to request samples.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We accept various payment methods including bank transfers and digital payments. Specific terms can be discussed with our sales team.'
    },
    {
      question: 'Do you offer installation services?',
      answer: 'While we primarily supply the stone materials, we can recommend trusted installation partners in your area.'
    },
    {
      question: 'What is your return policy?',
      answer: 'Please refer to our Returns & Exchange policy for detailed information about returns and exchanges.'
    },
    {
      question: 'How can I get a quote?',
      answer: 'You can request a quote through our website or contact our sales team directly with your requirements.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 relative">
          <Button 
            variant="ghost" 
            className="absolute top-4 right-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Find answers to common questions about our products and services</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
