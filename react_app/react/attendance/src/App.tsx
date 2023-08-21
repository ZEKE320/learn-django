import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/attendance')
      .then((res) => res.json())
      .then((data) => setAttendances(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {attendances.map((attendance: any) => (
          <li key={attendance.name}>
            <Item attendance={attendance}></Item>
          </li>
        ))};
      </ul>
    </div>
  );
}

const Item = ({ attendance }: any) => {
  return (
    <span>
      {attendance.name}: {attendance.attendance}
    </span>
  );
}

export default App;
