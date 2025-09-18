import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calculator, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Package,
  Ruler,
  Calendar,
  FileText
} from "lucide-react";

interface QuoteForm {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  company: string;
  
  // Project Details
  projectType: string;
  projectLocation: string;
  projectTimeline: string;
  
  // Product Requirements
  stoneType: string;
  finish: string;
  thickness: string;
  quantity: string;
  unit: string;
  
  // Dimensions
  length: string;
  width: string;
  area: string;
  
  // Additional Services
  services: string[];
  
  // Additional Information
  description: string;
  budget: string;
}

const RequestQuote = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<QuoteForm>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'residential',
    projectLocation: '',
    projectTimeline: 'within-month',
    stoneType: 'granite',
    finish: 'polished',
    thickness: '20mm',
    quantity: '',
    unit: 'sqft',
    length: '',
    width: '',
    area: '',
    services: [],
    description: '',
    budget: ''
  });

  const handleInputChange = (field: keyof QuoteForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-calculate area when length and width are provided
    if (field === 'length' || field === 'width') {
      const length = field === 'length' ? parseFloat(value) : parseFloat(formData.length);
      const width = field === 'width' ? parseFloat(value) : parseFloat(formData.width);
      
      if (length && width) {
        const area = (length * width).toFixed(2);
        setFormData(prev => ({ ...prev, area }));
      }
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const validateForm = () => {
    const required = ['fullName', 'email', 'phone', 'projectLocation', 'quantity'];
    for (const field of required) {
      if (!formData[field as keyof QuoteForm]) {
        alert(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    return true;
  };

  const generateQuoteId = () => {
    return 'QT-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const quote = {
      id: generateQuoteId(),
      ...formData,
      submissionDate: new Date().toISOString(),
      status: 'pending'
    };
    
    // Save to localStorage
    const existingQuotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    existingQuotes.unshift(quote);
    localStorage.setItem('quotes', JSON.stringify(existingQuotes));
    
    setIsLoading(false);
    navigate('/quote-success', { state: { quoteId: quote.id } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Calculator className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get Your Quote
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Tell us about your project and we'll provide you with a detailed quote for premium granite and marble solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Form Fields */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Personal Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company (Optional)</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Company name"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Project Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Project Type</Label>
                          <RadioGroup
                            value={formData.projectType}
                            onValueChange={(value) => handleInputChange('projectType', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="residential" id="residential" />
                              <Label htmlFor="residential">Residential</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="commercial" id="commercial" />
                              <Label htmlFor="commercial">Commercial</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="industrial" id="industrial" />
                              <Label htmlFor="industrial">Industrial</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div>
                          <Label>Project Timeline</Label>
                          <RadioGroup
                            value={formData.projectTimeline}
                            onValueChange={(value) => handleInputChange('projectTimeline', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="immediate" id="immediate" />
                              <Label htmlFor="immediate">Immediate (1-2 weeks)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="within-month" id="within-month" />
                              <Label htmlFor="within-month">Within a month</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="flexible" id="flexible" />
                              <Label htmlFor="flexible">Flexible timeline</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="projectLocation">Project Location *</Label>
                        <Input
                          id="projectLocation"
                          value={formData.projectLocation}
                          onChange={(e) => handleInputChange('projectLocation', e.target.value)}
                          placeholder="City, State"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Product Requirements */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Product Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label>Stone Type</Label>
                          <RadioGroup
                            value={formData.stoneType}
                            onValueChange={(value) => handleInputChange('stoneType', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="granite" id="granite" />
                              <Label htmlFor="granite">Granite</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="marble" id="marble" />
                              <Label htmlFor="marble">Marble</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="both" id="both" />
                              <Label htmlFor="both">Both</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div>
                          <Label>Finish Type</Label>
                          <RadioGroup
                            value={formData.finish}
                            onValueChange={(value) => handleInputChange('finish', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="polished" id="polished" />
                              <Label htmlFor="polished">Polished</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="honed" id="honed" />
                              <Label htmlFor="honed">Honed</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="leathered" id="leathered" />
                              <Label htmlFor="leathered">Leathered</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div>
                          <Label>Thickness</Label>
                          <RadioGroup
                            value={formData.thickness}
                            onValueChange={(value) => handleInputChange('thickness', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="18mm" id="18mm" />
                              <Label htmlFor="18mm">18mm</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="20mm" id="20mm" />
                              <Label htmlFor="20mm">20mm</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="30mm" id="30mm" />
                              <Label htmlFor="30mm">30mm</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Dimensions & Quantity */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Ruler className="w-5 h-5" />
                        Dimensions & Quantity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div>
                          <Label htmlFor="length">Length (ft)</Label>
                          <Input
                            id="length"
                            type="number"
                            value={formData.length}
                            onChange={(e) => handleInputChange('length', e.target.value)}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <Label htmlFor="width">Width (ft)</Label>
                          <Input
                            id="width"
                            type="number"
                            value={formData.width}
                            onChange={(e) => handleInputChange('width', e.target.value)}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <Label htmlFor="area">Area (sq ft)</Label>
                          <Input
                            id="area"
                            value={formData.area}
                            onChange={(e) => handleInputChange('area', e.target.value)}
                            placeholder="Auto-calculated"
                          />
                        </div>
                        <div>
                          <Label htmlFor="quantity">Total Quantity *</Label>
                          <Input
                            id="quantity"
                            value={formData.quantity}
                            onChange={(e) => handleInputChange('quantity', e.target.value)}
                            placeholder="Enter quantity"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Services */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Additional Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          'Installation Service',
                          'Delivery Service',
                          'Custom Cutting',
                          'Edge Polishing',
                          'Site Measurement',
                          'Design Consultation'
                        ].map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                            />
                            <Label htmlFor={service}>{service}</Label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Additional Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Tell us more about your project requirements..."
                          rows={4}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="budget">Budget Range (Optional)</Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          placeholder="e.g., $5,000 - $10,000"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Summary Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle>Quote Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Stone Type:</span>
                          <span className="capitalize">{formData.stoneType || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Finish:</span>
                          <span className="capitalize">{formData.finish}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Thickness:</span>
                          <span>{formData.thickness}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Quantity:</span>
                          <span>{formData.quantity || '0'} {formData.unit}</span>
                        </div>
                        {formData.area && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Area:</span>
                            <span>{formData.area} sq ft</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Services:</span>
                          <span>{formData.services.length} selected</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button 
                          type="submit" 
                          variant="granite" 
                          size="lg" 
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </div>
                          ) : (
                            'Get Quote'
                          )}
                        </Button>
                      </div>

                      <div className="text-xs text-muted-foreground text-center">
                        <p>We'll get back to you within 24 hours with a detailed quote.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RequestQuote;
