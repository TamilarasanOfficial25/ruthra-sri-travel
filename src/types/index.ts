export interface HeroCar {
  id: string;
  name: string;
  category: string;
  seatingCapacity: number;
  description: string;
  image: string;
  alt: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  seatingCapacity: number;
  luggageCapacity?: string;
  description: string;
  image: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: 'PlaneTakeoff' | 'MapPinned' | 'CarFront' | 'Building2' | 'Sparkles';
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  review: string;
  rating?: number;
  verified?: boolean;
}

export interface BusinessInfo {
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  googleMapsUrl: string;
}

export interface NavItem {
  id: string;
  label: string;
}
