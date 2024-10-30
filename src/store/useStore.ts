import { create } from 'zustand';
import type { User, Trip } from '../types';

interface Store {
  user: User | null;
  trips: Trip[];
  setUser: (user: User | null) => void;
  addTrip: (trip: Trip) => void;
  removeTrip: (tripId: string) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  trips: [],
  setUser: (user) => set({ user }),
  addTrip: (trip) => set((state) => ({ trips: [...state.trips, trip] })),
  removeTrip: (tripId) =>
    set((state) => ({ trips: state.trips.filter((t) => t.id !== tripId) })),
}));