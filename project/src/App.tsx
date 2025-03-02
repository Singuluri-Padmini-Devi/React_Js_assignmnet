import React, { useState } from 'react';
import CountryList from './components/CountryList';
import { Country } from './types';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  const addCountry = () => {
    const countryName = prompt("Enter the country name:");
    if (countryName && countryName.trim()) {
      setCountries([...countries, { id: Date.now(), name: countryName.trim(), states: [] }]);
    }
  };

  const editCountry = (id: number) => {
    const country = countries.find(c => c.id === id);
    if (!country) return;
    
    const newName = prompt("Enter the new name for the country:", country.name);
    if (newName && newName.trim() && newName !== country.name) {
      if (window.confirm(`Are you sure you want to update ${country.name} to ${newName}?`)) {
        setCountries(countries.map(c => 
          c.id === id ? { ...c, name: newName.trim() } : c
        ));
      }
    }
  };

  const deleteCountry = (id: number) => {
    const country = countries.find(c => c.id === id);
    if (!country) return;
    
    if (window.confirm(`Are you sure you want to delete ${country.name}? This will also delete all states and cities within it.`)) {
      setCountries(countries.filter(c => c.id !== id));
    }
  };

  const addState = (countryId: number, stateName: string) => {
    if (stateName && stateName.trim()) {
      setCountries(countries.map(country => 
        country.id === countryId 
          ? { 
              ...country, 
              states: [...country.states, { id: Date.now(), name: stateName.trim(), cities: [] }] 
            } 
          : country
      ));
    }
  };

  const editState = (countryId: number, stateId: number, newName: string) => {
    if (newName && newName.trim()) {
      setCountries(countries.map(country => 
        country.id === countryId 
          ? { 
              ...country, 
              states: country.states.map(state => 
                state.id === stateId 
                  ? { ...state, name: newName.trim() } 
                  : state
              ) 
            } 
          : country
      ));
    }
  };

  const deleteState = (countryId: number, stateId: number) => {
    setCountries(countries.map(country => 
      country.id === countryId 
        ? { 
            ...country, 
            states: country.states.filter(state => state.id !== stateId) 
          } 
        : country
    ));
  };

  const addCity = (countryId: number, stateId: number, cityName: string) => {
    if (cityName && cityName.trim()) {
      setCountries(countries.map(country => 
        country.id === countryId 
          ? { 
              ...country, 
              states: country.states.map(state => 
                state.id === stateId 
                  ? { 
                      ...state, 
                      cities: [...state.cities, { id: Date.now(), name: cityName.trim() }] 
                    } 
                  : state
              ) 
            } 
          : country
      ));
    }
  };

  const deleteCity = (countryId: number, stateId: number, cityId: number) => {
    setCountries(countries.map(country => 
      country.id === countryId 
        ? { 
            ...country, 
            states: country.states.map(state => 
              state.id === stateId 
                ? { 
                    ...state, 
                    cities: state.cities.filter(city => city.id !== cityId) 
                  } 
                : state
            ) 
          } 
        : country
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Country, State, and City Management</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Countries</h2>
            <button 
              onClick={addCountry}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Add Country
            </button>
          </div>
          
          <CountryList 
            countries={countries} 
            onEditCountry={editCountry}
            onDeleteCountry={deleteCountry}
            onAddState={addState}
            onEditState={editState}
            onDeleteState={deleteState}
            onAddCity={addCity}
            onDeleteCity={deleteCity}
          />
          
          {countries.length === 0 && (
            <p className="text-gray-500 text-center py-4">No countries added yet. Click "Add Country" to get started.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;