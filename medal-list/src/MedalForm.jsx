import React, { useState } from 'react';

function MedalForm({ medalList, setMedalList }) {
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);


  const addCountry = (newEntry) => {
    setMedalList([...medalList, newEntry]);
  };

  const updateMedals = (updatedEntry) => {
    setMedalList(medalList.map((entry) => 
      entry.country === updatedEntry.country ? updatedEntry : entry
    ));
  }

  const isExist = medalList.some((entry) => entry.country === country);

  const handleAddCountry = () => {
    if (country.trim() === "") {
      alert("국가 이름을 입력해주세요!");
      return;
    }
    if (isExist) {
      alert("이미 추가된 국가입니다!");
      return;
    }

    addCountry({ country, gold, silver, bronze });
    resetInputs();
  };

  const handleUpdateMedals = () => {
    if (!isExist) {
      alert("리스트에 없는 나라입니다!");
      return;
    }
    
    updateMedals({ country, gold, silver, bronze });
    resetInputs();
  };

  const resetInputs = () => {
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
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
        onChange={(e) => setGold(+e.target.value)}
        min="0"
      />
      <label>은메달:</label>
      <input
        type="number"
        value={silver}
        onChange={(e) => setSilver(+e.target.value)}
        min="0"
      />
      <label>동메달:</label>
      <input
        type="number"
        value={bronze}
        onChange={(e) => setBronze(+e.target.value)}
        min="0"
      />
      <button onClick={handleAddCountry}>국가 추가</button>
      <button onClick={handleUpdateMedals}>업데이트</button>
    </div>
  );
}

export default MedalForm;