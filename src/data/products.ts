export interface Product {
  id: number;
  name: string;
  category: string;
  color: string;
  finish: string;
  thickness: string;
  images: string[];
  pricing: { small: number; big: number };
  unit: string;
  features: string[];
  description: string;
  detailedDescription: string;
  specifications: {
    origin: string;
    density: string;
    compressiveStrength: string;
    waterAbsorption: string;
    finishOptions: string[];
  };
  applications: string[];
}

export const allProducts: Product[] = [
  // GRANITE PRODUCTS (IDs 1-16)
  {
    id: 1,
    name: "Kashmir White Granite",
    category: "granite",
    color: "white",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/1.jpg", "/src/assets/1.1.jpg", "/src/assets/1.2.jpg"],
    pricing: { small: 750, big: 950 },
    unit: "per CBM",
    features: ["Heat Resistant", "Stain Resistant", "Premium Quality", "Elegant Patterns"],
    description: "Premium white granite with elegant patterns from Kashmir region",
    detailedDescription: "Kashmir White Granite is a premium natural stone known for its elegant white background with subtle gray veining. This granite is quarried from the Kashmir region and offers exceptional durability and beauty.",
    specifications: {
      origin: "Kashmir, India",
      density: "2.6-2.7 g/cm³",
      compressiveStrength: "200-300 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Leathered"]
    },
    applications: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding", "Monuments"]
  },
  {
    id: 2,
    name: "Absolute Black Granite",
    category: "granite",
    color: "black",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/2.jpg", "/src/assets/2.1.jpg", "/src/assets/2.2.jpg"],
    pricing: { small: 800, big: 1000 },
    unit: "per CBM",
    features: ["Deep Black", "Consistent Pattern", "Mirror Finish", "Premium Grade"],
    description: "Pure black granite with mirror finish and consistent coloring",
    detailedDescription: "Absolute Black Granite is renowned for its deep, consistent black color and mirror-like finish when polished. This premium granite offers unmatched elegance and sophistication.",
    specifications: {
      origin: "Telangana, India",
      density: "2.7-2.8 g/cm³",
      compressiveStrength: "250-350 MPa",
      waterAbsorption: "< 0.2%",
      finishOptions: ["Polished", "Honed", "Flamed"]
    },
    applications: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Monuments", "Exterior Cladding"]
  },
  {
    id: 3,
    name: "Chittoor Black Granite",
    category: "granite",
    color: "black",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/3.jpg", "/src/assets/3.1.jpg", "/src/assets/3.2.jpg"],
    pricing: { small: 850, big: 1000 },
    unit: "per CBM",
    features: ["Deep Black Color", "Heat Resistant", "Scratch Resistant", "Easy Maintenance"],
    description: "Premium quality black granite sourced from Chittoor quarries",
    detailedDescription: "Chittoor Black Granite is a premium natural stone sourced from the renowned quarries of Chittoor, Andhra Pradesh. Known for its deep black color and exceptional durability, this granite offers both elegance and strength for various applications.",
    specifications: {
      origin: "Chittoor, Andhra Pradesh",
      density: "2.6-2.8 g/cm³",
      compressiveStrength: "200-350 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Flamed", "Leathered"]
    },
    applications: ["Kitchen Countertops", "Flooring", "Wall Cladding", "Monuments", "Commercial Projects"]
  },
  {
    id: 4,
    name: "Madanpalli White",
    category: "granite",
    color: "white",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/4.jpg", "/src/assets/4.1.jpeg", "/src/assets/4.2.jpg"],
    pricing: { small: 650, big: 950 },
    unit: "per CBM",
    features: ["Pure White", "Consistent Pattern", "High Polish", "Premium Grade"],
    description: "Elegant white granite with superior finish and durability",
    detailedDescription: "Madanpalli White granite is sourced from the renowned quarries of Madanpalli region. Known for its pure white color and consistent pattern.",
    specifications: {
      origin: "Madanpalli, Andhra Pradesh",
      density: "2.6-2.7 g/cm³",
      compressiveStrength: "220-280 MPa",
      waterAbsorption: "< 0.3%",
      finishOptions: ["Polished", "Honed", "Flamed"]
    },
    applications: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding", "Staircases"]
  },
  {
    id: 5,
    name: "Red Dragon Granite",
    category: "granite",
    color: "brown",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/5.jpg", "/src/assets/5.1.jpg", "/src/assets/5.2.jpg"],
    pricing: { small: 750, big: 950 },
    unit: "per CBM",
    features: ["Rich Red Color", "Unique Patterns", "High Durability", "Premium Quality"],
    description: "Stunning red granite with dragon-like patterns from Indian quarries",
    detailedDescription: "Red Dragon Granite is named for its striking red coloration and dramatic patterns that resemble dragon scales. This unique granite offers both beauty and strength.",
    specifications: {
      origin: "Karnataka, India",
      density: "2.7-2.8 g/cm³",
      compressiveStrength: "240-320 MPa",
      waterAbsorption: "< 0.3%",
      finishOptions: ["Polished", "Honed", "Flamed"]
    },
    applications: ["Kitchen Countertops", "Feature Walls", "Flooring", "Monuments", "Commercial Facades"]
  },
  {
    id: 6,
    name: "Steel Grey Granite",
    category: "granite",
    color: "gray",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/6.jpg", "/src/assets/6.1.jpg", "/src/assets/6.2.jpg"],
    pricing: { small: 800, big: 1100 },
    unit: "per CBM",
    features: ["Modern Grey", "Consistent Color", "High Polish", "Commercial Grade"],
    description: "Contemporary steel grey granite perfect for modern designs",
    detailedDescription: "Steel Grey Granite offers a contemporary aesthetic with its consistent steel-gray coloration. This granite is ideal for modern architectural projects.",
    specifications: {
      origin: "Andhra Pradesh, India",
      density: "2.7-2.8 g/cm³",
      compressiveStrength: "260-340 MPa",
      waterAbsorption: "< 0.2%",
      finishOptions: ["Polished", "Honed", "Flamed", "Brushed"]
    },
    applications: ["Kitchen Countertops", "Commercial Flooring", "Exterior Cladding", "Modern Architecture", "Office Buildings"]
  },
  {
    id: 7,
    name: "Vizag Blue Granite",
    category: "granite",
    color: "blue",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/7.jpg", "/src/assets/7.1.jpg", "/src/assets/7.2.jpg"],
    pricing: { small: 900, big: 1200 },
    unit: "per CBM",
    features: ["Unique Blue Shade", "Premium Quality", "Rare Stone", "Luxury Grade"],
    description: "Rare blue granite from Vizag with exceptional beauty",
    detailedDescription: "Vizag Blue Granite is a rare and precious stone known for its distinctive blue coloration. Quarried from the Vizag region, this granite is highly sought after for luxury applications.",
    specifications: {
      origin: "Visakhapatnam, Andhra Pradesh",
      density: "2.8-2.9 g/cm³",
      compressiveStrength: "280-360 MPa",
      waterAbsorption: "< 0.2%",
      finishOptions: ["Polished", "Honed", "Leathered"]
    },
    applications: ["Luxury Countertops", "Feature Walls", "High-end Flooring", "Monuments", "Exclusive Projects"]
  },
  {
    id: 8,
    name: "Forest Green Granite",
    category: "granite",
    color: "green",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/8.jpg", "/src/assets/8.1.jpg", "/src/assets/8.2.jpg"],
    pricing: { small: 850, big: 1050 },
    unit: "per CBM",
    features: ["Rich Green Color", "Natural Patterns", "High Strength", "Premium Finish"],
    description: "Beautiful forest green granite with natural stone patterns",
    detailedDescription: "Forest Green Granite captures the essence of nature with its deep green color and natural patterns. This granite offers excellent durability while providing a unique aesthetic.",
    specifications: {
      origin: "Karnataka, India",
      density: "2.7-2.8 g/cm³",
      compressiveStrength: "250-330 MPa",
      waterAbsorption: "< 0.3%",
      finishOptions: ["Polished", "Honed", "Flamed", "Leathered"]
    },
    applications: ["Kitchen Countertops", "Bathroom Applications", "Flooring", "Exterior Cladding", "Landscape Features"]
  },
  {
    id: 9,
    name: "Rajasthan Black Granite",
    category: "granite",
    color: "black",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/9.jpg", "/src/assets/9.1.jpg", "/src/assets/9.2.jpg"],
    pricing: { small: 950, big: 1250 },
    unit: "per CBM",
    features: ["Deep Black", "Mirror Finish", "Premium Quality", "Rajasthani Origin"],
    description: "Premium black granite from Rajasthan quarries",
    detailedDescription: "Rajasthan Black Granite represents the finest black granite from the historic stone quarries of Rajasthan. Known for its deep black color and ability to achieve a mirror-like finish.",
    specifications: {
      origin: "Rajasthan, India",
      density: "2.8-2.9 g/cm³",
      compressiveStrength: "270-350 MPa",
      waterAbsorption: "< 0.2%",
      finishOptions: ["Polished", "Honed", "Flamed"]
    },
    applications: ["Luxury Countertops", "Monuments", "High-end Flooring", "Exterior Cladding", "Commercial Projects"]
  },
  {
    id: 10,
    name: "Golden Juparana Granite",
    category: "granite",
    color: "brown",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/10.jpg", "/src/assets/10.1.jpg", "/src/assets/10.2.jpg"],
    pricing: { small: 800, big: 1000 },
    unit: "per CBM",
    features: ["Golden Brown", "Natural Veining", "Premium Quality", "Decorative"],
    description: "Golden brown granite with beautiful natural veining patterns",
    detailedDescription: "Golden Juparana Granite showcases warm golden-brown tones with intricate veining patterns. This granite combines the durability of granite with aesthetic appeal.",
    specifications: {
      origin: "Brazil/India",
      density: "2.6-2.7 g/cm³",
      compressiveStrength: "200-280 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Leathered"]
    },
    applications: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding", "Decorative Features"]
  },
  {
    id: 11,
    name: "Lavender Blue Granite",
    category: "granite",
    color: "blue",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/11.jpg", "/src/assets/11.1.jpg", "/src/assets/11.2.jpg"],
    pricing: { small: 1050, big: 1350 },
    unit: "per CBM",
    features: ["Lavender Blue", "Unique Color", "Premium Grade", "Rare Variety"],
    description: "Unique lavender blue granite with distinctive coloring",
    detailedDescription: "Lavender Blue Granite is an extraordinary stone featuring a unique lavender-blue coloration that is rarely found in natural granite. This premium stone is highly prized.",
    specifications: {
      origin: "Norway/India",
      density: "2.8-2.9 g/cm³",
      compressiveStrength: "290-370 MPa",
      waterAbsorption: "< 0.2%",
      finishOptions: ["Polished", "Honed", "Leathered"]
    },
    applications: ["Luxury Countertops", "Feature Walls", "Exclusive Projects", "High-end Interiors", "Artistic Applications"]
  },
  {
    id: 12,
    name: "Indian Aurora Granite",
    category: "granite",
    color: "mixed",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/12.jpg", "/src/assets/12.1.jpg", "/src/assets/12.2.jpg"],
    pricing: { small: 900, big: 1150 },
    unit: "per CBM",
    features: ["Aurora Colors", "Natural Beauty", "Premium Quality", "Unique Finish"],
    description: "Beautiful aurora-colored granite with natural color variations",
    detailedDescription: "Indian Aurora Granite displays a mesmerizing array of colors reminiscent of the aurora borealis. This granite features multiple color variations within each slab.",
    specifications: {
      origin: "Rajasthan, India",
      density: "2.7-2.8 g/cm³",
      compressiveStrength: "240-320 MPa",
      waterAbsorption: "< 0.3%",
      finishOptions: ["Polished", "Honed", "Flamed", "Leathered"]
    },
    applications: ["Feature Walls", "Kitchen Countertops", "Artistic Applications", "Luxury Interiors", "Unique Projects"]
  },
  {
    id: 13,
    name: "Kuppum Black",
    category: "granite",
    color: "black",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/13.jpeg", "/src/assets/13.1.jpg", "/src/assets/13.2.jpg"],
    pricing: { small: 1000, big: 1300 },
    unit: "per CBM",
    features: ["Deep Black", "Mirror Finish", "Dense Structure", "Luxury Grade"],
    description: "Premium black granite with exceptional quality and finish",
    detailedDescription: "Kuppum Black granite is renowned for its exceptional deep black color and dense structure. Sourced from the Kuppum region, this granite is considered one of the finest black granites available.",
    specifications: {
      origin: "Kuppum, Andhra Pradesh",
      density: "2.8-2.9 g/cm³",
      compressiveStrength: "280-360 MPa",
      waterAbsorption: "< 0.1%",
      finishOptions: ["Polished", "Honed", "Flamed"]
    },
    applications: ["Luxury Countertops", "Monuments", "High-end Flooring", "Exterior Applications", "Premium Projects"]
  },
  {
    id: 14,
    name: "Chima Pink Granite",
    category: "granite",
    color: "pink",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/14.jpg", "/src/assets/14.1.jpg", "/src/assets/14.2.jpg"],
    pricing: { small: 720, big: 920 },
    unit: "per CBM",
    features: ["Soft Pink Hue", "Natural Elegance", "Durable", "Architectural Grade"],
    description: "Elegant pink granite with subtle color variations",
    detailedDescription: "Chima Pink Granite offers a delicate pink coloration with natural variations that create a warm and inviting atmosphere. This granite combines aesthetic appeal with practical durability.",
    specifications: {
      origin: "Rajasthan, India",
      density: "2.6-2.7 g/cm³",
      compressiveStrength: "220-300 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Flamed"]
    },
    applications: ["Kitchen Countertops", "Bathroom Vanities", "Flooring", "Wall Cladding", "Decorative Applications"]
  },
  {
    id: 15,
    name: "Multicolor Red Granite",
    category: "granite",
    color: "red",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/15.jpg", "/src/assets/15.1.jpg", "/src/assets/15.2.jpg"],
    pricing: { small: 780, big: 980 },
    unit: "per CBM",
    features: ["Multicolor Red", "Vibrant Patterns", "Durable", "Decorative Stone"],
    description: "Vibrant multicolor red granite with striking patterns",
    detailedDescription: "Multicolor Red Granite features a vibrant red base with multicolored patterns and veining. This granite creates dramatic visual impact and is perfect for bold applications.",
    specifications: {
      origin: "India",
      density: "2.7-2.8 g/cm³",
      compressiveStrength: "240-320 MPa",
      waterAbsorption: "< 0.3%",
      finishOptions: ["Polished", "Honed", "Flamed", "Leathered"]
    },
    applications: ["Feature Walls", "Kitchen Countertops", "Decorative Applications", "Artistic Projects", "Statement Pieces"]
  },
  {
    id: 16,
    name: "Himalayan Blue Granite",
    category: "granite",
    color: "blue",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/16.jpg", "/src/assets/16.1.jpg", "/src/assets/16.2.jpg"],
    pricing: { small: 1100, big: 1400 },
    unit: "per CBM",
    features: ["Himalayan Blue", "Rare Stone", "Luxury Grade", "Unique Patterns"],
    description: "Rare Himalayan blue granite with exceptional beauty and unique patterns",
    detailedDescription: "Himalayan Blue Granite is an extraordinary stone sourced from the Himalayan region. This rare granite features a distinctive blue coloration with unique patterns that reflect the majestic beauty of the Himalayas.",
    specifications: {
      origin: "Himalayan Region, India",
      density: "2.8-2.9 g/cm³",
      compressiveStrength: "290-370 MPa",
      waterAbsorption: "< 0.2%",
      finishOptions: ["Polished", "Honed", "Leathered"]
    },
    applications: ["Luxury Countertops", "Exclusive Projects", "High-end Flooring", "Feature Walls", "Premium Interiors"]
  },
  
  // MARBLE PRODUCTS (IDs 17+)
  {
    id: 17,
    name: "Italian Carrara White Marble",
    category: "marble",
    color: "white",
    finish: "honed",
    thickness: "various",
    images: ["/src/assets/17.jpg", "/src/assets/17.1.jpg", "/src/assets/17.2.jpg"],
    pricing: { small: 1200, big: 1500 },
    unit: "per CBM",
    features: ["Classic Veining", "Luxury Appeal", "Italian Quality", "Premium Marble"],
    description: "Italian-style white marble with natural veining and luxury appeal",
    detailedDescription: "Italian Carrara White Marble is synonymous with luxury and elegance. This premium marble features a pure white background with distinctive gray veining.",
    specifications: {
      origin: "Carrara, Italy",
      density: "2.7 g/cm³",
      compressiveStrength: "100-180 MPa",
      waterAbsorption: "< 0.5%",
      finishOptions: ["Polished", "Honed", "Brushed"]
    },
    applications: ["Bathroom Vanities", "Flooring", "Wall Cladding", "Sculptures", "Decorative Elements"]
  },
  {
    id: 18,
    name: "Indian Green Marble",
    category: "marble",
    color: "green",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/18.jpg", "/src/assets/18.1.jpg", "/src/assets/18.2.jpg"],
    pricing: { small: 900, big: 1200 },
    unit: "per CBM",
    features: ["Rich Green", "Natural Patterns", "High Durability", "Versatile Use"],
    description: "Beautiful green marble with unique patterns and exceptional durability",
    detailedDescription: "Indian Green Marble showcases the natural beauty of green stone with intricate patterns and veining. This marble combines aesthetic appeal with practical durability.",
    specifications: {
      origin: "Rajasthan, India",
      density: "2.7 g/cm³",
      compressiveStrength: "120-200 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Brushed"]
    },
    applications: ["Flooring", "Wall Cladding", "Bathroom Applications", "Decorative Elements", "Garden Features"]
  },
  {
    id: 19,
    name: "Rajasthani Pink Marble",
    category: "marble",
    color: "pink",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/19.jpg", "/src/assets/19.1.jpg", "/src/assets/19.2.jpg"],
    pricing: { small: 850, big: 1100 },
    unit: "per CBM",
    features: ["Pink Hue", "Traditional Style", "Strong Structure", "Easy Maintenance"],
    description: "Traditional pink marble known for its beauty and strength from Rajasthan",
    detailedDescription: "Rajasthani Pink Marble represents the traditional craftsmanship and natural beauty of Rajasthan's stone industry. This marble features a beautiful pink hue with natural variations.",
    specifications: {
      origin: "Rajasthan, India",
      density: "2.6-2.7 g/cm³",
      compressiveStrength: "100-180 MPa",
      waterAbsorption: "< 0.5%",
      finishOptions: ["Polished", "Honed", "Sandblasted"]
    },
    applications: ["Flooring", "Wall Cladding", "Bathroom Vanities", "Decorative Applications", "Traditional Architecture"]
  },
  {
    id: 20,
    name: "Emperador Brown Marble",
    category: "marble",
    color: "brown",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/20.jpg", "/src/assets/20.1.jpg", "/src/assets/20.2.jpg"],
    pricing: { small: 950, big: 1250 },
    unit: "per CBM",
    features: ["Rich Brown", "Natural Veining", "Luxury Grade", "Premium Marble"],
    description: "Elegant brown marble with rich color and natural veining patterns",
    detailedDescription: "Emperador Brown Marble is characterized by its rich brown color and distinctive white veining. This marble adds warmth and elegance to any space.",
    specifications: {
      origin: "Spain/Turkey",
      density: "2.7 g/cm³",
      compressiveStrength: "120-200 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Filled", "Unfilled"]
    },
    applications: ["Bathroom Vanities", "Feature Walls", "Flooring", "Decorative Applications", "Luxury Interiors"]
  },
  {
    id: 21,
    name: "Statuario White Marble",
    category: "marble",
    color: "white",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/21.jpg", "/src/assets/21.1.jpg", "/src/assets/21.2.jpg"],
    pricing: { small: 1300, big: 1600 },
    unit: "per CBM",
    features: ["Pure White", "Gold Veining", "Luxury Grade", "Premium Marble"],
    description: "Luxurious white marble with distinctive gold veining patterns",
    detailedDescription: "Statuario White Marble is the epitome of luxury marble, featuring a pure white background with dramatic gold and gray veining. This marble has been used in classical architecture.",
    specifications: {
      origin: "Carrara, Italy",
      density: "2.7 g/cm³",
      compressiveStrength: "100-180 MPa",
      waterAbsorption: "< 0.3%",
      finishOptions: ["Polished", "Honed", "Brushed"]
    },
    applications: ["Luxury Bathrooms", "Feature Walls", "Sculptures", "High-end Flooring", "Exclusive Interiors"]
  },
  {
    id: 22,
    name: "Black Galaxy Marble",
    category: "marble",
    color: "black",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/22.jpg", "/src/assets/22.1.jpg", "/src/assets/22.2.jpg"],
    pricing: { small: 1100, big: 1400 },
    unit: "per CBM",
    features: ["Deep Black", "Gold Specks", "Luxury Appeal", "Premium Quality"],
    description: "Stunning black marble with golden speckled patterns",
    detailedDescription: "Black Galaxy Marble features a deep black background adorned with golden specks that resemble stars in a night sky. This dramatic marble creates stunning visual impact.",
    specifications: {
      origin: "India",
      density: "2.7-2.8 g/cm³",
      compressiveStrength: "120-200 MPa",
      waterAbsorption: "< 0.3%",
      finishOptions: ["Polished", "Honed", "Leathered"]
    },
    applications: ["Feature Walls", "Luxury Bathrooms", "Countertops", "Decorative Elements", "High-end Projects"]
  },
  {
    id: 23,
    name: "Crema Marfil Marble",
    category: "marble",
    color: "white",
    finish: "honed",
    thickness: "various",
    images: ["/src/assets/23.jpg", "/src/assets/23.1.jpg", "/src/assets/23.2.jpg"],
    pricing: { small: 1000, big: 1300 },
    unit: "per CBM",
    features: ["Cream White", "Subtle Veining", "Elegant Finish", "Premium Marble"],
    description: "Elegant cream marble with subtle veining and smooth finish",
    detailedDescription: "Crema Marfil Marble is a classic Spanish marble known for its warm cream color and subtle veining. This marble provides a sophisticated and timeless appearance.",
    specifications: {
      origin: "Alicante, Spain",
      density: "2.7 g/cm³",
      compressiveStrength: "100-180 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Filled", "Unfilled"]
    },
    applications: ["Bathroom Applications", "Flooring", "Wall Cladding", "Decorative Elements", "Classic Interiors"]
  },
  {
    id: 24,
    name: "Botticino Marble",
    category: "marble",
    color: "white",
    finish: "polished",
    thickness: "various",
    images: ["/src/assets/24.jpg", "/src/assets/24.1.jpg", "/src/assets/24.2.jpg"],
    pricing: { small: 1150, big: 1450 },
    unit: "per CBM",
    features: ["Warm White", "Natural Beauty", "Classic Style", "Premium Quality"],
    description: "Classic warm white marble with natural beauty and elegance",
    detailedDescription: "Botticino Marble is a classic Italian marble featuring a warm white background with subtle beige veining. This marble has been used in architecture for centuries.",
    specifications: {
      origin: "Brescia, Italy",
      density: "2.7 g/cm³",
      compressiveStrength: "100-180 MPa",
      waterAbsorption: "< 0.4%",
      finishOptions: ["Polished", "Honed", "Brushed"]
    },
    applications: ["Bathroom Applications", "Flooring", "Wall Cladding", "Classic Architecture", "Elegant Interiors"]
  }
];
