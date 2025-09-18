import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getOrders } from "@/utils/localStorage";
import type { Order } from "@/utils/localStorage";
import { 
  DollarSign, 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  ArrowLeft,
  MapPin,
  Calendar,
  Phone
} from "lucide-react";

const TrackOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const orders = getOrders();
    const foundOrder = orders.find(o => o.id === orderId);
    setOrder(foundOrder || null);
  }, [orderId]);

  const getStatusSteps = (currentStatus: string) => {
    const steps = [
      { key: 'placed', label: 'Order Placed', icon: Clock, color: 'text-blue-600', bgColor: 'bg-blue-100' },
      { key: 'processing', label: 'Processing', icon: Package, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
      { key: 'shipped', label: 'Shipped', icon: Truck, color: 'text-purple-600', bgColor: 'bg-purple-100' },
      { key: 'delivered', label: 'Delivered', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' }
    ];

    const currentIndex = steps.findIndex(step => step.key === currentStatus);
    
    return steps.map((step, index) => ({
      ...step,
      isCompleted: index <= currentIndex,
      isCurrent: index === currentIndex
    }));
  };

  const getTrackingEvents = (order: Order) => {
    const events = [
      {
        title: 'Order Placed',
        description: 'Your order has been successfully placed and payment confirmed.',
        date: new Date(order.orderDate).toLocaleString(),
        icon: Clock,
        color: 'text-blue-600'
      }
    ];

    if (['processing', 'shipped', 'delivered'].includes(order.status)) {
      events.push({
        title: 'Order Processing',
        description: 'Your order is being prepared for shipment.',
        date: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString(),
        icon: Package,
        color: 'text-yellow-600'
      });
    }

    if (['shipped', 'delivered'].includes(order.status)) {
      events.push({
        title: 'Order Shipped',
        description: 'Your order has been shipped and is on its way to you.',
        date: new Date(Date.now() - 12 * 60 * 60 * 1000).toLocaleString(),
        icon: Truck,
        color: 'text-purple-600'
      });
    }

    if (order.status === 'delivered') {
      events.push({
        title: 'Order Delivered',
        description: 'Your order has been successfully delivered.',
        date: new Date().toLocaleString(),
        icon: CheckCircle,
        color: 'text-green-600'
      });
    }

    return events.reverse(); // Show latest first
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-0">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <Package className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">Order Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The order you're looking for doesn't exist or may have been removed.
              </p>
              <Link to="/orders">
                <Button variant="granite" size="lg">
                  View All Orders
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const statusSteps = getStatusSteps(order.status);
  const trackingEvents = getTrackingEvents(order);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Header Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/orders">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-primary">Track Order</h1>
                <p className="text-muted-foreground">Order #{order.id}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Tracking Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Order Status Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-8">
                      {statusSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                          <div key={step.key} className="flex flex-col items-center flex-1">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                              step.isCompleted ? step.bgColor : 'bg-muted'
                            }`}>
                              <IconComponent className={`w-6 h-6 ${
                                step.isCompleted ? step.color : 'text-muted-foreground'
                              }`} />
                            </div>
                            <span className={`text-sm font-medium ${
                              step.isCompleted ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {step.label}
                            </span>
                            {step.isCurrent && (
                              <Badge className="mt-1 bg-granite-gold text-white">Current</Badge>
                            )}
                            {index < statusSteps.length - 1 && (
                              <div className={`absolute h-0.5 w-full mt-6 ${
                                step.isCompleted ? 'bg-granite-gold' : 'bg-muted'
                              }`} style={{ 
                                left: '50%', 
                                width: 'calc(100% - 3rem)',
                                zIndex: -1
                              }} />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Current Status Info */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Current Status: {order.status.charAt(0).toUpperCase() + order.status.slice(1)}</h4>
                      <p className="text-muted-foreground text-sm">
                        {order.status === 'placed' && 'Your order has been confirmed and is being prepared.'}
                        {order.status === 'processing' && 'Your order is currently being processed and will be shipped soon.'}
                        {order.status === 'shipped' && 'Your order is on its way to the delivery address.'}
                        {order.status === 'delivered' && 'Your order has been successfully delivered.'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Tracking Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tracking Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trackingEvents.map((event, index) => {
                        const IconComponent = event.icon;
                        return (
                          <div key={index} className="flex items-start gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              event.color === 'text-blue-600' ? 'bg-blue-100' :
                              event.color === 'text-yellow-600' ? 'bg-yellow-100' :
                              event.color === 'text-purple-600' ? 'bg-purple-100' :
                              'bg-green-100'
                            }`}>
                              <IconComponent className={`w-5 h-5 ${event.color}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{event.title}</h4>
                              <p className="text-muted-foreground text-sm mb-1">{event.description}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{event.date}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div>
                      <h4 className="font-semibold mb-3">Items ({order.items.length})</h4>
                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h5 className="text-sm font-medium">{item.name}</h5>
                              <p className="text-xs text-muted-foreground capitalize">
                                {item.size} • Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Shipping Address */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Delivery Address
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p className="font-medium text-foreground">{order.shippingAddress.fullName}</p>
                        <p>{order.shippingAddress.address}</p>
                        <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Phone className="w-3 h-3" />
                          <span>{order.shippingAddress.phone}</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Order Total */}
                    <div>
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span>Total Paid</span>
                        <div className="flex items-center text-granite-gold">
                          <DollarSign className="w-5 h-5" />
                          <span>{order.totalAmount.toFixed(2)}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground capitalize">
                        via {order.paymentMethod}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        Download Invoice
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Support
                      </Button>
                      {order.status === 'delivered' && (
                        <Button variant="granite" size="sm" className="w-full">
                          Leave Review
                        </Button>
                      )}
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

export default TrackOrder;
