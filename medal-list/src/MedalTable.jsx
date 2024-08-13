import React from 'react';

function MedalTable({ medalList, deleteCountry }) {
  // 금메달 수에 따라 내림차순으로 정렬
  const sortedMedalList = [...medalList].sort((a, b) => b.gold - a.gold);

  return (
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
        {sortedMedalList.map((entry, index) => (
          <tr key={index}>
            <td>{entry.country}</td>
            <td>{entry.gold}</td>
            <td>{entry.silver}</td>
            <td>{entry.bronze}</td>
            <td>
              <button onClick={() => deleteCountry(entry.country)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MedalTable;