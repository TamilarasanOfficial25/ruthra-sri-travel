import type { Vehicle } from '../types';

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  suggested?: boolean;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'Ruthrasri Travels started its journey.',
  },
  {
    year: '2017',
    title: 'First Fleet Expansion',
    description: 'Expanded our vehicle fleet.',
    suggested: true,
  },
  {
    year: '2019',
    title: 'Continued Growth',
    description: 'Invested in additional vehicles.',
    suggested: true,
  },
  {
    year: '2021',
    title: 'Moving Forward',
    description: 'Continued expanding our transportation services.',
    suggested: true,
  },
  {
    year: '2023',
    title: 'Growing Stronger',
    description: 'Further fleet expansion and improved services.',
    suggested: true,
  },
  {
    year: '2025–2026',
    title: 'Our Growth Today',
    description: 'A fleet of 15+ vehicles serving 500+ customers and 50+ companies.',
  },
];

export const journeyStats = [
  { value: 15, prefix: '', suffix: '+', label: 'Vehicles' },
  { value: 500, prefix: '', suffix: '+', label: 'Happy Customers' },
  { value: 50, prefix: '', suffix: '+', label: 'Corporate Clients' },
  { value: 2015, prefix: 'Since ', suffix: '', label: 'Ruthrasri Travels' },
];

export const growingFleet: Pick<Vehicle, 'id' | 'name' | 'category' | 'image' | 'alt'>[] = [
  {
    id: 'ertiga-tour-m-2025-1',
    name: 'Maruti Suzuki Ertiga Tour M – 2025 (Vehicle 1)',
    category: '7-Seater Family Tour MPV',
    image: '/images/vehicles/ruthrasri-travel-ertiga-tour-m-2025-1.jpg',
    alt: 'Maruti Suzuki Ertiga Tour M for Ruthrasri Travels',
  },
  {
    id: 'ertiga-tour-m-2025-2',
    name: 'Maruti Suzuki Ertiga Tour M – 2025 (Vehicle 2)',
    category: '7-Seater Family Tour MPV',
    image: '/images/vehicles/ruthrasri-travel-ertiga-tour-m-2025-2.jpg',
    alt: 'Maruti Suzuki Ertiga Tour M for Ruthrasri Travels',
  },
  {
    id: 'dzire-tour-s-2024',
    name: 'Maruti Suzuki Dzire Tour S – 2024',
    category: 'Executive Tour Sedan',
    image: '/images/vehicles/ruthrasri-travel-dzire-tour-s-2024.jpg',
    alt: 'Maruti Suzuki Dzire Tour S for Ruthrasri Travels',
  },
  {
    id: 'dzire-tour-s-2025',
    name: 'Maruti Suzuki Dzire Tour S – 2025',
    category: 'Business Tour Sedan',
    image: '/images/vehicles/ruthrasri-travel-dzire-tour-s-2025.jpg',
    alt: 'Maruti Suzuki Dzire Tour S for Ruthrasri Travels',
  },
  {
    id: 'dzire-tour-s-2026',
    name: 'Maruti Suzuki Dzire Tour S – 2026',
    category: 'Premium Tour Sedan',
    image: '/images/vehicles/ruthrasri-travel-dzire-tour-s-2026.jpg',
    alt: 'Maruti Suzuki Dzire Tour S for Ruthrasri Travels',
  },
];
