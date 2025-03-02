import React from 'react';
import CityList from './CityList';
import { State } from '../types';

interface StateListProps {
  countryId: number;
  states: State[];
  onAddState: (stateName: string) => void;
  onEditState: (stateId: number, newName: string) => void;
  onDeleteState: (stateId: number) => void;
  onAddCity: (stateId: number, cityName: string) => void;
  onDeleteCity: (stateId: number, cityId: number) => void;
}

const StateList: React.FC<StateListProps> = ({ 
  countryId,
  states, 
  onAddState, 
  onEditState, 
  onDeleteState,
  onAddCity,
  onDeleteCity
}) => {
  const handleAddState = () => {
    const stateName = prompt("Enter the state name:");
    if (stateName && stateName.trim()) {
      onAddState(stateName);
    }
  };

  const handleEditState = (state: State) => {
    const newName = prompt("Enter the new name for the state:", state.name);
    if (newName && newName.trim() && newName !== state.name) {
      if (window.confirm(`Are you sure you want to update ${state.name} to ${newName}?`)) {
        onEditState(state.id, newName);
      }
    }
  };

  const handleDeleteState = (state: State) => {
    if (window.confirm(`Are you sure you want to delete ${state.name}? This will also delete all cities within it.`)) {
      onDeleteState(state.id);
    }
  };

  return (
    <div className="ml-4 mt-3">
      <div className="flex items-center mb-3">
        <h4 className="text-md font-medium mr-3">States</h4>
        <button 
          onClick={handleAddState}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
        >
          Add State
        </button>
      </div>
      
      {states.length > 0 ? (
        <div className="space-y-3">
          {states.map(state => (
            <div key={state.id} className="border border-gray-200 rounded-md p-3 bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-medium">{state.name}</h5>
                <div className="space-x-2">
                  <button 
                    onClick={() => handleEditState(state)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded-md text-xs transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteState(state)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-xs transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              <CityList 
                stateId={state.id}
                cities={state.cities}
                onAddCity={(cityName) => onAddCity(state.id, cityName)}
                onDeleteCity={(cityId) => onDeleteCity(state.id, cityId)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm ml-2">No states added yet.</p>
      )}
    </div>
  );
};

export default StateList;