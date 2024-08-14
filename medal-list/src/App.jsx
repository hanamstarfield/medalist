import React, { useState } from 'react';
import MedalForm from './MedalForm';
import MedalTable from './MedalTable';
import './App.css';

function App() {
  const [medalList, setMedalList] = useState([]);

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>올림픽 메달 리스트</h1>
        <MedalForm 
          medalList={medalList}
          setMedalList={setMedalList}
        />
        <MedalTable 
          medalList={medalList}
          setMedalList={setMedalList}
        />
      </div>
    </div>
  );
}

export default App;