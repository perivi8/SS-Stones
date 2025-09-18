import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calculator, Clock, Phone, Mail, Home, FileText } from "lucide-react";

const QuoteSuccess = () => {
  const location = useLocation();
  const quoteId = location.state?.quoteId || 'QT-UNKNOWN';

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
                <h1 className="text-4xl font-bold text-primary mb-4">Quote Request Submitted!</h1>
                <p className="text-lg text-muted-foreground">
                  Thank you for your quote request. We've received your information and will get back to you soon.
                </p>
              </div>

              {/* Quote Details Card */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote ID */}
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Quote Request Confirmation</h2>
                      <p className="text-muted-foreground">Quote ID: <span className="font-mono text-primary">{quoteId}</span></p>
                    </div>

                    {/* Next Steps */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">What happens next?</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-medium text-blue-800">Review</h4>
                          <p className="text-sm text-blue-600 text-center">Our team will review your requirements</p>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
                          <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-3">
                            <Calculator className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-medium text-yellow-800">Calculate</h4>
                          <p className="text-sm text-yellow-600 text-center">We'll prepare a detailed quote for you</p>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-medium text-green-800">Deliver</h4>
                          <p className="text-sm text-green-600 text-center">You'll receive your quote via email</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Information */}
                    <div className="bg-muted/50 p-6 rounded-lg text-left">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Expected Timeline:
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Initial review: Within 2-4 hours</li>
                        <li>• Detailed quote preparation: 12-24 hours</li>
                        <li>• Quote delivery: Via email within 24 hours</li>
                        <li>• Follow-up call: Within 48 hours (if needed)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/my-quotes">
                  <Button variant="granite" size="lg" className="w-full sm:w-auto">
                    <FileText className="w-5 h-5 mr-2" />
                    View My Quotes
                  </Button>
                </Link>
                
                <Link to="/shop">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Calculator className="w-5 h-5 mr-2" />
                    Browse Products
                  </Button>
                </Link>
                
                <Link to="/">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have urgent questions or need to discuss your requirements, feel free to contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+919490812345" className="inline-block">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call: +91 94908 12345
                    </Button>
                  </a>
                  <a href="mailto:info@sstones.com" className="inline-block">
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Email: info@sstones.com
                    </Button>
                  </a>
                  <Link to="/contact-us">
                    <Button variant="outline" size="sm">
                      Contact Form
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8 text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>Quote Reference:</strong> Please keep your Quote ID ({quoteId}) for future reference.
                </p>
                <p>
                  Our quotes are valid for 30 days from the date of issue. All prices are subject to material availability and market conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuoteSuccess;
