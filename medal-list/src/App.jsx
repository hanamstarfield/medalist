import React, { useState } from 'react';
import MedalForm from './MedalForm';
import MedalTable from './MedalTable';
import './App.css';

function App() {
  const [medalList, setMedalList] = useState([]);

  const addCountry = (newEntry) => {
    setMedalList([...medalList, newEntry]);
  };

  const updateMedals = (updatedEntry) => {
    const updatedList = medalList.map((entry) => 
      entry.country === updatedEntry.country ? updatedEntry : entry
    );
    setMedalList(updatedList);
  };

  const deleteCountry = (deleteCountry) => {
    const updatedList = medalList.filter(entry => entry.country !== deleteCountry);
    setMedalList(updatedList);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>올림픽 메달 리스트</h1>
        <MedalForm 
          medalList={medalList}
          addCountry={addCountry}
          updateMedals={updateMedals}
        />
        <MedalTable 
          medalList={medalList}
          deleteCountry={deleteCountry}
        />
      </div>
    </div>
  );
}

export default App;