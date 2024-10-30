export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  coverImage: string;
  status: 'planning' | 'upcoming' | 'ongoing' | 'completed';
}

export interface Activity {
  id: string;
  title: string;
  type: 'flight' | 'hotel' | 'activity' | 'transport';
  startTime: string;
  endTime: string;
  location: string;
  cost: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}