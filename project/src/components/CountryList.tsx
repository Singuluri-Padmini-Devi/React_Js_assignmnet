import React from 'react';
import StateList from './StateList';
import { Country } from '../types';

interface CountryListProps {
  countries: Country[];
  onEditCountry: (id: number) => void;
  onDeleteCountry: (id: number) => void;
  onAddState: (countryId: number, stateName: string) => void;
  onEditState: (countryId: number, stateId: number, newName: string) => void;
  onDeleteState: (countryId: number, stateId: number) => void;
  onAddCity: (countryId: number, stateId: number, cityName: string) => void;
  onDeleteCity: (countryId: number, stateId: number, cityId: number) => void;
}

const CountryList: React.FC<CountryListProps> = ({ 
  countries, 
  onEditCountry, 
  onDeleteCountry,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity
}) => {
  return (
    <div className="space-y-4">
      {countries.map(country => (
        <div key={country.id} className="border border-gray-200 rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium">{country.name}</h3>
            <div className="space-x-2">
              <button 
                onClick={() => onEditCountry(country.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
              >
                Edit
              </button>
              <button 
                onClick={() => onDeleteCountry(country.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
          
          <StateList 
            countryId={country.id}
            states={country.states}
            onAddState={(stateName) => onAddState(country.id, stateName)}
            onEditState={(stateId, newName) => onEditState(country.id, stateId, newName)}
            onDeleteState={(stateId) => onDeleteState(country.id, stateId)}
            onAddCity={(stateId, cityName) => onAddCity(country.id, stateId, cityName)}
            onDeleteCity={(stateId, cityId) => onDeleteCity(country.id, stateId, cityId)}
          />
        </div>
      ))}
    </div>
  );
};

export default CountryList;