import React, { useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [medalList, setMedalList] = useState([]);

  // 새로운 메달 리스트 추가
  const handleAddCountry = () => {
    if(country.trim() === ""){
      alert("국가 이름을 입력해주세요!");
      return;
    }
    const isExist = medalList.some((entry) => entry.country === country);
    if(isExist){
      alert("이미 추가된 국가입니다!");
      return;
    }


    const newEntry = {
      country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    setMedalList([...medalList, newEntry]);
    resetInputs();

  };

  // 입력값 초기화
  const resetInputs = ()=> {
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  }


  // 메달 리스트 업데이트, 국가 없으면 추가 안됨
  const handleUpdateMedals = () => {
    const updatedMedalList = medalList.map((entry) => {
      if (entry.country === country) {
        return {
          ...entry,
          gold,
          silver,
          bronze,
        };
      }
      return entry;
    });
    if(updatedMedalList.find((entry) => entry.country === country) === undefined){
      alert("리스트에 없는 나라입니다!");
      return;
    }
    setMedalList(updatedMedalList);
    resetInputs();
  }

  // 리스트에서 국가 삭제
  const handleDeleteCountry = (deletecountry) => {
    const updateMedalList = medalList.filter(entry => entry.country !== deletecountry);
    setMedalList(updateMedalList);
  };
  
  // 금메달 기준으로 내림차순 정렬
  const sortMedalList = [...medalList].sort((a, b) => b.gold - a.gold);

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>올림픽 메달 리스트</h1>
        <div className="input-group">
          <label>국가:</label>
          <input
            type="text"
            placeholder="나라 이름"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label>금메달:</label>
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            min="0"
          />
          <label>은메달:</label>
          <input
            type="number"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            min="0"
          />
          <label>동메달:</label>
          <input
            type="number"
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
            min="0"
          />
          <button onClick={handleAddCountry}>국가 추가</button>
          <button onClick={handleUpdateMedals}>업데이트</button>
        </div>

        <table className="medal-table">
          <thead>
            <tr>
              <th>국가</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody>
            {sortMedalList.map((entry, index) => (
              <tr key={index}>
                <td>{entry.country}</td>
                <td>{entry.gold}</td>
                <td>{entry.silver}</td>
                <td>{entry.bronze}</td>
                <td>
                  <button onClick={() => handleDeleteCountry(entry.country)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;