import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import TripCard from './components/TripCard';
import SearchForm from './components/SearchForm';
import { PlusCircle, Compass } from 'lucide-react';
import type { SearchParams } from './types/api';

const mockTrip = {
  id: '1',
  title: 'Summer in Paris',
  destination: 'Paris, France',
  startDate: '2024-06-15',
  endDate: '2024-06-25',
  budget: 5000,
  coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
  status: 'upcoming' as const,
};

function App() {
  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Plan Your Next Adventure
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover amazing destinations and create unforgettable memories with our travel planning tools.
              </p>
            </motion.div>

            <SearchForm onSearch={handleSearch} />

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Compass className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">Your Trips</h2>
              </div>
              <button className="flex items-center px-4 py-2 bg-white text-indigo-600 rounded-lg border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 transition-all shadow-sm">
                <PlusCircle className="h-5 w-5 mr-2" />
                New Trip
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TripCard trip={mockTrip} />
              <TripCard trip={{
                ...mockTrip,
                id: '2',
                title: 'Tokyo Adventure',
                destination: 'Tokyo, Japan',
                startDate: '2024-07-10',
                endDate: '2024-07-20',
                coverImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80',
              }} />
              <TripCard trip={{
                ...mockTrip,
                id: '3',
                title: 'Greek Islands',
                destination: 'Santorini, Greece',
                startDate: '2024-08-05',
                endDate: '2024-08-15',
                coverImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80',
              }} />
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;