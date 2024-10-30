import { Calendar, MapPin, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Trip } from '../types';
import { format, differenceInDays } from 'date-fns';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const daysUntilTrip = differenceInDays(new Date(trip.startDate), new Date());
  const duration = differenceInDays(new Date(trip.endDate), new Date(trip.startDate));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 rounded-t-xl overflow-hidden">
        <img
          src={trip.coverImage}
          alt={trip.destination}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{trip.title}</h3>
          <div className="flex items-center text-white/90">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{trip.destination}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md
            ${trip.status === 'upcoming' ? 'bg-green-400/30 text-green-50' : ''}
            ${trip.status === 'ongoing' ? 'bg-blue-400/30 text-blue-50' : ''}
            ${trip.status === 'completed' ? 'bg-gray-400/30 text-gray-50' : ''}
            ${trip.status === 'planning' ? 'bg-yellow-400/30 text-yellow-50' : ''}
          `}>
            {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
            <div className="flex items-center text-gray-700">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration} days</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Budget</div>
            <div className="flex items-center text-gray-700">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>{trip.budget.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {format(new Date(trip.startDate), 'MMM d')} -{' '}
              {format(new Date(trip.endDate), 'MMM d, yyyy')}
            </span>
          </div>
          
          {trip.status === 'upcoming' && daysUntilTrip > 0 && (
            <div className="text-sm text-indigo-600 font-medium">
              {daysUntilTrip} days until your trip!
            </div>
          )}
        </div>
        
        <div className="mt-6">
          <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-2.5 px-4 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-sm hover:shadow-md">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}