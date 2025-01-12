import { Proofer } from '../types';

export const proofers: Proofer[] = [
  {
    id: 1,
    name: "Professional Dough Proofer XL",
    brand: "Brod & Taylor",
    imageUrl: "https://images.unsplash.com/photo-1589985270958-a911b4926f7a?auto=format&fit=crop&q=80&w=400",
    ratings: {
      price: 7,
      internalCapacity: 9,
      storageSize: 5,
      durability: 8,
      easeOfClean: 9
    },
    averageRating: 8,
    description: [
      "Precise Temperature Control For Perfect Results",
      "Foldable Design For Easy Storage",
      "Large Internal Capacity",
      "Easy-to-clean Stainless Steel Interior"
    ],
    price: 299.99,
    affiliateLinks: [
      {
        name: "Amazon",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
      }
    ]
  },
  {
    id: 2,
    name: "Compact Folding Proofer",
    brand: "Baker's Choice",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
    ratings: {
      price: 5,
      internalCapacity: 3,
      storageSize: 8,
      durability: 7,
      easeOfClean: 6
    },
    averageRating: 6,
    description: [
      "Perfect For Home Bakers",
      "Compact Storage Design",
      "Digital Temperature Control",
      "Humidity Management System"
    ],
    price: 199.99,
    affiliateLinks: [
      {
        name: "Amazon",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
      }
    ]
  }
];