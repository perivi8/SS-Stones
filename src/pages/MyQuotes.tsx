import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Calendar, 
  MapPin, 
  Package, 
  User, 
  Phone, 
  Mail,
  ArrowLeft,
  Calculator,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface Quote {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  projectLocation: string;
  projectTimeline: string;
  stoneType: string;
  finish: string;
  thickness: string;
  quantity: string;
  unit: string;
  length: string;
  width: string;
  area: string;
  services: string[];
  description: string;
  budget: string;
  submissionDate: string;
  status: 'pending' | 'reviewed' | 'quoted' | 'accepted' | 'rejected';
}

const MyQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    setQuotes(savedQuotes);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'reviewed':
        return <FileText className="w-4 h-4" />;
      case 'quoted':
        return <Calculator className="w-4 h-4" />;
      case 'accepted':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'reviewed':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'quoted':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'accepted':
        return 'bg-green-500 hover:bg-green-600';
      case 'rejected':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  if (quotes.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-0">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <FileText className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">No Quote Requests Yet</h1>
              <p className="text-muted-foreground mb-8">
                You haven't submitted any quote requests yet. Get started by requesting a quote for your project.
              </p>
              <Link to="/request-quote">
                <Button variant="granite" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Header Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/request-quote">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-primary">My Quotes</h1>
                <p className="text-muted-foreground">
                  {quotes.length} {quotes.length === 1 ? 'quote request' : 'quote requests'} submitted
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quotes List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {quotes.map((quote) => (
                <Card key={quote.id} className="overflow-hidden border shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Quote Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">Quote #{quote.id}</h3>
                        <p className="text-muted-foreground text-sm">
                          Submitted on {new Date(quote.submissionDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <Badge className={`${getStatusColor(quote.status)} text-white border-0`}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(quote.status)}
                          <span className="capitalize">{quote.status}</span>
                        </div>
                      </Badge>
                    </div>

                    <Separator className="mb-4" />

                    {/* Quote Details */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                      {/* Contact Information */}
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Contact Details
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p className="font-medium text-foreground">{quote.fullName}</p>
                          {quote.company && <p>Company: {quote.company}</p>}
                          <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            <span>{quote.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            <span>{quote.phone}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Information */}
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Project Info
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><span className="text-foreground">Type:</span> {quote.projectType}</p>
                          <p><span className="text-foreground">Location:</span> {quote.projectLocation}</p>
                          <p><span className="text-foreground">Timeline:</span> {quote.projectTimeline}</p>
                          {quote.budget && <p><span className="text-foreground">Budget:</span> {quote.budget}</p>}
                        </div>
                      </div>

                      {/* Product Requirements */}
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          Requirements
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><span className="text-foreground">Stone:</span> {quote.stoneType}</p>
                          <p><span className="text-foreground">Finish:</span> {quote.finish}</p>
                          <p><span className="text-foreground">Thickness:</span> {quote.thickness}</p>
                          <p><span className="text-foreground">Quantity:</span> {quote.quantity} {quote.unit}</p>
                          {quote.area && <p><span className="text-foreground">Area:</span> {quote.area} sq ft</p>}
                        </div>
                      </div>
                    </div>

                    {/* Additional Services */}
                    {quote.services.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-primary">Additional Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {quote.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Description */}
                    {quote.description && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-primary">Project Description:</h4>
                        <p className="text-sm text-muted-foreground bg-muted/20 p-3 rounded">
                          {quote.description}
                        </p>
                      </div>
                    )}

                    {/* Quote Actions */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      <Button variant="granite" size="sm">
                        <FileText className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Contact Support
                      </Button>
                      {quote.status === 'quoted' && (
                        <Button variant="outline" size="sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Accept Quote
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Calculator className="w-4 h-4 mr-1" />
                        Duplicate Request
                      </Button>
                    </div>

                    {/* Status Information */}
                    <div className="mt-4 p-3 bg-muted/30 rounded text-sm">
                      {quote.status === 'pending' && (
                        <p className="text-muted-foreground">
                          <Clock className="w-4 h-4 inline mr-1" />
                          Your quote request is being reviewed. We'll get back to you within 24 hours.
                        </p>
                      )}
                      {quote.status === 'reviewed' && (
                        <p className="text-blue-600">
                          <FileText className="w-4 h-4 inline mr-1" />
                          Your request has been reviewed and we're preparing your quote.
                        </p>
                      )}
                      {quote.status === 'quoted' && (
                        <p className="text-purple-600">
                          <Calculator className="w-4 h-4 inline mr-1" />
                          Your quote is ready! Check your email for the detailed pricing.
                        </p>
                      )}
                      {quote.status === 'accepted' && (
                        <p className="text-green-600">
                          <CheckCircle className="w-4 h-4 inline mr-1" />
                          Quote accepted! We'll contact you to proceed with the order.
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* New Quote Button */}
            <div className="text-center mt-8">
              <Link to="/request-quote">
                <Button variant="granite" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Request New Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MyQuotes;
