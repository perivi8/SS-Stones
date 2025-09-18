import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getOrders } from "@/utils/localStorage";
import type { Order } from "@/utils/localStorage";
import { DollarSign, Package, Truck, CheckCircle, Clock, ArrowLeft } from "lucide-react";

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'placed':
        return <Clock className="w-4 h-4" />;
      case 'processing':
        return <Package className="w-4 h-4" />;
      case 'shipped':
        return <Truck className="w-4 h-4" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'placed':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'processing':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'shipped':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'delivered':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  // Helper function to safely convert any value to string
  const safeString = (value: any): string => {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number') {
      return value.toString();
    }
    if (typeof value === 'object') {
      // Handle objects by extracting meaningful data
      if (value.name && typeof value.name === 'string') {
        return value.name;
      }
      if (value.type && typeof value.type === 'string') {
        return value.type;
      }
      return 'N/A';
    }
    return String(value);
  };

  // Helper function to calculate item total price
  const getItemTotalPrice = (item: any) => {
    if (item?.totalPrice && typeof item.totalPrice === 'number') {
      return item.totalPrice;
    }
    
    // Fallback calculation if totalPrice is missing
    const unitPrice = item?.size === 'small' ? item?.pricing?.small : item?.pricing?.big;
    const quantity = item?.quantity || 1;
    
    if (unitPrice && typeof unitPrice === 'number') {
      return unitPrice * quantity;
    }
    
    return 0; // Fallback to 0 if no price data available
  };

  // Helper function to safely get shipping address
  const getShippingAddress = (order: Order) => {
    const address = order?.shippingAddress;
    return {
      fullName: safeString(address?.fullName),
      address: safeString(address?.address),
      city: safeString(address?.city),
      state: safeString(address?.state),
      pincode: safeString(address?.pincode),
      phone: safeString(address?.phone)
    };
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-0">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <Package className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">No Orders Yet</h1>
              <p className="text-muted-foreground mb-8">
                You haven't placed any orders yet. Start shopping to see your orders here.
              </p>
              <Link to="/shop">
                <Button variant="granite" size="lg">
                  Start Shopping
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
              <Link to="/shop">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-primary">My Orders</h1>
                <p className="text-muted-foreground">
                  {orders.length} {orders.length === 1 ? 'order' : 'orders'} placed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Orders List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {orders.map((order, orderIndex) => {
                const shippingAddress = getShippingAddress(order);
                const orderItems = Array.isArray(order?.items) ? order.items : [];
                const orderId = safeString(order?.id);
                const orderStatus = safeString(order?.status) || 'placed';
                const paymentMethod = safeString(order?.paymentMethod);
                
                return (
                  <Card key={orderId || `order-${orderIndex}`} className="overflow-hidden border shadow-card hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Order Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-primary">Order #{orderId}</h3>
                          <p className="text-muted-foreground text-sm">
                            Placed on {order?.orderDate ? new Date(order.orderDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            }) : 'Unknown date'}
                          </p>
                        </div>
                        <Badge className={`${getStatusColor(orderStatus)} text-white border-0`}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(orderStatus)}
                            <span className="capitalize">{orderStatus}</span>
                          </div>
                        </Badge>
                      </div>

                      <Separator className="mb-4" />

                      {/* Order Items */}
                      <div className="space-y-3 mb-4">
                        {orderItems.length > 0 ? orderItems.map((item, index) => {
                          const itemTotal = getItemTotalPrice(item);
                          const itemName = safeString(item?.name);
                          const itemSize = safeString(item?.size);
                          const itemQuantity = typeof item?.quantity === 'number' ? item.quantity : 0;
                          const itemUnit = safeString(item?.unit);
                          const itemImage = safeString(item?.image);
                          
                          return (
                            <div key={`${orderId}-item-${index}`} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                              <img
                                src={itemImage || '/placeholder-image.jpg'}
                                alt={itemName}
                                className="w-16 h-16 object-cover rounded border"
                                onError={(e) => {
                                  e.currentTarget.src = '/placeholder-image.jpg';
                                }}
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-primary">{itemName}</h4>
                                <p className="text-sm text-muted-foreground capitalize">
                                  {itemSize} Size • Qty: {itemQuantity} • {itemUnit}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center text-granite-gold font-bold">
                                  <DollarSign className="w-4 h-4" />
                                  <span>{itemTotal.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          );
                        }) : (
                          <div className="text-center text-muted-foreground py-4">
                            No items found in this order
                          </div>
                        )}
                      </div>

                      <Separator className="mb-4" />

                      {/* Order Summary */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Shipping Address */}
                        <div className="bg-muted/20 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-primary">Shipping Address</h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p className="font-medium text-foreground">{shippingAddress.fullName}</p>
                            <p>{shippingAddress.address}</p>
                            <p>
                              {shippingAddress.city}, {shippingAddress.state} {shippingAddress.pincode}
                            </p>
                            <p>Phone: {shippingAddress.phone}</p>
                          </div>
                        </div>

                        {/* Order Total */}
                        <div className="bg-muted/20 p-4 rounded-lg text-right">
                          <div className="space-y-2">
                            <div>
                              <p className="text-sm text-muted-foreground">Payment Method</p>
                              <p className="font-medium capitalize text-foreground">{paymentMethod}</p>
                            </div>
                            <div className="flex items-center justify-end text-lg font-bold text-granite-gold mt-3">
                              <span className="mr-2 text-foreground">Total:</span>
                              <DollarSign className="w-5 h-5" />
                              <span>{(typeof order?.totalAmount === 'number' ? order.totalAmount : 0).toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Order Actions */}
                      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t">
                        <Link to={`/track-order/${orderId}`}>
                          <Button variant="granite" size="sm">
                            <Truck className="w-4 h-4 mr-1" />
                            Track Order
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Package className="w-4 h-4 mr-1" />
                          Download Invoice
                        </Button>
                        {orderStatus === 'delivered' && (
                          <Button variant="outline" size="sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Leave Review
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
