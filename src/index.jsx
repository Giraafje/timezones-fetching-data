import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [datetime, setDatetime] = useState('')
  const [timezone, setTimezone] = useState('Europe/Prague')

  const handleChangeTimezone = (e) => {
    setTimezone(e.target.value)
  }

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => setDatetime(data.datetime));
  }, [timezone])

  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      <main>
       <div>Hodnota datetime: {datetime}</div>
       <form>
        <label>
        Vyberte zonu:
          <select onChange={handleChangeTimezone} value={timezone}>
            <option value="America/New_York">New York</option>
            <option value="Europe/London">Londýn</option>
            <option value="Europe/Moscow">Moskva</option>
            <option value="Europe/Prague">Praha</option>
            <option value="Asia/Hong_Kong">Hong Kong</option>
            <option value="Asia/Jerusalem">Jeruzalém</option>
          </select>
        </label>      
       </form>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
