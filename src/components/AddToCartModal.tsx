import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DollarSign, Plus, Minus } from "lucide-react";
import { addToCart } from "@/utils/localStorage";
import type { Product } from "@/data/products";

interface AddToCartModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const AddToCartModal = ({ product, isOpen, onClose }: AddToCartModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<'small' | 'big'>('small');

  const currentPrice = selectedSize === 'small' ? product.pricing.small : product.pricing.big;
  const totalPrice = currentPrice * quantity;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.images[0],
      pricing: product.pricing,
      unit: product.unit,
      quantity,
      size: selectedSize,
      totalPrice,
    };

    addToCart(cartItem);
    onClose();
    
    // Reset form
    setQuantity(1);
    setSelectedSize('small');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Cart</DialogTitle>
          <DialogDescription>
            Configure your order for {product.name}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {/* Product Info */}
          <div className="flex items-center space-x-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <Label>Select Size</Label>
            <RadioGroup
              value={selectedSize}
              onValueChange={(value) => setSelectedSize(value as 'small' | 'big')}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small" className="flex items-center justify-between w-full cursor-pointer">
                  <span>Small Size</span>
                  <div className="flex items-center text-granite-gold font-bold">
                    <DollarSign className="w-4 h-4" />
                    <span>{product.pricing.small}</span>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="big" id="big" />
                <Label htmlFor="big" className="flex items-center justify-between w-full cursor-pointer">
                  <span>Big Size</span>
                  <div className="flex items-center text-granite-gold font-bold">
                    <DollarSign className="w-4 h-4" />
                    <span>{product.pricing.big}</span>
                  </div>
                </Label>
              </div>
            </RadioGroup>
            <p className="text-xs text-muted-foreground">{product.unit}</p>
          </div>

          {/* Quantity Selection */}
          <div className="space-y-2">
            <Label>Quantity</Label>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-20 text-center"
                min="1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Total Price */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total:</span>
              <div className="flex items-center text-granite-gold">
                <DollarSign className="w-5 h-5" />
                <span>{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{product.unit}</p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleAddToCart} variant="granite">
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartModal;
