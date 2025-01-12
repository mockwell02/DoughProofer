export interface ProoferRating {
  price: number;
  internalCapacity: number;
  storageSize: number;
  durability: number;
  easeOfClean: number;
}

export interface AffiliateLink {
  name: string;
  url: string;
  logo: string;
}

export interface Proofer {
  id: number;
  name: string;
  brand: string;
  imageUrl: string;
  ratings: ProoferRating;
  averageRating: number;
  description: string[];
  price: number;
  affiliateLinks: AffiliateLink[];
}