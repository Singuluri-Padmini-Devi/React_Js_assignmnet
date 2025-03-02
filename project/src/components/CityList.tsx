import React from 'react';
import { City } from '../types';

interface CityListProps {
  stateId: number;
  cities: City[];
  onAddCity: (cityName: string) => void;
  onDeleteCity: (cityId: number) => void;
}

const CityList: React.FC<CityListProps> = ({ stateId, cities, onAddCity, onDeleteCity }) => {
  const handleAddCity = () => {
    const cityName = prompt("Enter the city name:");
    if (cityName && cityName.trim()) {
      onAddCity(cityName);
    }
  };

  const handleDeleteCity = (city: City) => {
    if (window.confirm(`Are you sure you want to delete ${city.name}?`)) {
      onDeleteCity(city.id);
    }
  };

  return (
    <div className="ml-3 mt-2">
      <div className="flex items-center mb-2">
        <h6 className="text-sm font-medium mr-3">Cities</h6>
        <button 
          onClick={handleAddCity}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md text-xs transition-colors"
        >
          Add City
        </button>
      </div>
      
      {cities.length > 0 ? (
        <ul className="space-y-1 ml-2">
          {cities.map(city => (
            <li key={city.id} className="flex justify-between items-center bg-white p-2 rounded-md text-sm">
              <span>{city.name}</span>
              <button 
                onClick={() => handleDeleteCity(city)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-0.5 rounded-md text-xs transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-xs ml-2">No cities added yet.</p>
      )}
    </div>
  );
};

export default CityList;