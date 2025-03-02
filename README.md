Country, State, and City Management Application
A React application that allows users to manage a hierarchical structure of countries, states, and cities with a clean, intuitive interface.

Features
Country Management
Add new countries
Edit existing country names with confirmation
Delete countries with confirmation (cascades to delete associated states and cities)
State Management
Add states to specific countries
Edit state names with confirmation
Delete states with confirmation (cascades to delete associated cities)
City Management
Add cities to specific states
Delete cities with confirmation
User Experience
Intuitive hierarchical display
Confirmation dialogs for all destructive actions
Clean, responsive design with Tailwind CSS
Technology Stack
React: Frontend library for building the user interface
TypeScript: For type safety and better developer experience
Tailwind CSS: For styling the application
Vite: For fast development and optimized builds
Project Structure
src/
├── components/
│   ├── CountryList.tsx  # Manages the list of countries
│   ├── StateList.tsx    # Manages states for a specific country
│   └── CityList.tsx     # Manages cities for a specific state
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main application component
├── main.tsx            # Entry point
└── index.css           # Global styles
Data Structure
The application uses a hierarchical data structure:

Countries contain states
States contain cities
Each entity (country, state, city) has:

A unique ID
A name
Child entities (where applicable)
How to Use
Adding a Country:

Click the "Add Country" button
Enter the country name in the prompt
The country will appear in the list
Managing States:

For each country, click "Add State"
Enter the state name
Use the edit/delete buttons to manage states
Managing Cities:

For each state, click "Add City"
Enter the city name
Use the delete button to remove cities
Development
Prerequisites
Node.js (v14 or later)
npm or yarn
Installation
# Clone the repository
git clone https://github.com/yourusername/country-state-city-management.git

# Navigate to the project directory
cd country-state-city-management

# Install dependencies
npm install

# Start the development server
npm run dev
Building for Production
npm run build
Implementation Details
State Management
The application uses React's useState hook to manage the hierarchical data structure. All data is stored in a single state in the App component, and functions are passed down to child components via props.

Confirmation Dialogs
For critical actions such as updating or deleting entities, confirmation dialogs are shown:

Before deleting: A window.confirm() dialog is used
Before editing: A prompt is used, followed by a confirmation step
