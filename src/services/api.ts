import type { SearchParams, FlightResult, HotelResult, ActivityResult, WeatherResult, CurrencyResult } from '../types';

const API_BASE_URL = 'https://api.example.com/v1';

export async function searchFlights(params: SearchParams): Promise<FlightResult[]> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'f1',
          airline: 'Air France',
          flightNumber: 'AF123',
          departure: {
            airport: 'JFK',
            city: 'New York',
            time: '2024-06-15T10:00:00Z',
          },
          arrival: {
            airport: 'CDG',
            city: 'Paris',
            time: '2024-06-15T22:00:00Z',
          },
          price: 850,
          currency: 'USD',
          class: 'economy',
        },
      ]);
    }, 1000);
  });
}

export async function searchHotels(params: SearchParams): Promise<HotelResult[]> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'h1',
          name: 'Le Grand Hotel Paris',
          location: {
            address: '2 Rue Scribe',
            city: 'Paris',
            country: 'France',
            coordinates: { lat: 48.8707, lng: 2.3322 },
          },
          price: 250,
          currency: 'USD',
          rating: 4.5,
          amenities: ['wifi', 'spa', 'restaurant'],
          images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
          ],
        },
      ]);
    }, 1000);
  });
}

export async function searchActivities(params: SearchParams): Promise<ActivityResult[]> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'a1',
          name: 'Eiffel Tower Skip-the-Line Tour',
          type: 'tour',
          location: {
            address: 'Champ de Mars',
            city: 'Paris',
            country: 'France',
            coordinates: { lat: 48.8584, lng: 2.2945 },
          },
          price: 65,
          currency: 'USD',
          duration: 180,
          rating: 4.8,
          availableSlots: ['09:00', '14:00', '19:00'],
          images: [
            'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80',
          ],
        },
      ]);
    }, 1000);
  });
}

export async function getWeatherForecast(params: SearchParams): Promise<WeatherResult[]> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          date: '2024-06-15',
          temperature: { min: 18, max: 25, unit: 'C' },
          condition: 'sunny',
          precipitation: 10,
          humidity: 65,
        },
      ]);
    }, 1000);
  });
}

export async function getCurrencyExchange(from: string, to: string): Promise<CurrencyResult> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        from,
        to,
        rate: 0.92,
        timestamp: new Date().toISOString(),
      });
    }, 1000);
  });
}