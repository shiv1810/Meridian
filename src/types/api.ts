export interface SearchParams {
  destination: string;
  startDate: string;
  endDate: string;
  adults: number;
  children?: number;
  budget?: number;
  preferences?: string[];
}

export interface Location {
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface FlightResult {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    airport: string;
    city: string;
    time: string;
  };
  arrival: {
    airport: string;
    city: string;
    time: string;
  };
  price: number;
  currency: string;
  class: 'economy' | 'business' | 'first';
}

export interface HotelResult {
  id: string;
  name: string;
  location: Location;
  price: number;
  currency: string;
  rating: number;
  amenities: string[];
  images: string[];
}

export interface ActivityResult {
  id: string;
  name: string;
  type: 'tour' | 'attraction' | 'event';
  location: Location;
  price: number;
  currency: string;
  duration: number;
  rating: number;
  availableSlots: string[];
  images: string[];
}

export interface WeatherResult {
  date: string;
  temperature: {
    min: number;
    max: number;
    unit: 'C' | 'F';
  };
  condition: string;
  precipitation: number;
  humidity: number;
}

export interface CurrencyResult {
  from: string;
  to: string;
  rate: number;
  timestamp: string;
}