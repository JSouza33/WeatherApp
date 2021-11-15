import React, {useState, useEffect} from 'react';
import './App.css';

function App() {  
  const [temp, setTemp] = useState(null)
  const [cityName, setCityName] = useState('Portland') // example cityName

  useEffect(() => { 
    const fetchApi = async() => { 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5b01264b2cc4a07b7d46793a4b6e5fd1&units=imperial`            
      const response = await fetch(url) 
      const data = await response.json() 
      setTemp(parseInt(data.main.temp.toString() + '°'))
      setCityName(cityName)
    }
     
    fetchApi()
  })

  return ( 
    <div className="App">
    <div>{temp}</div> 
    <div>{cityName}</div>
    </div>
  );
}

export default App;
