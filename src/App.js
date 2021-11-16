import React, {useState, useEffect} from 'react';
import './App.css';
import LocationInput from './LocationInput';

function App() {  
  const [temp, setTemp] = useState(null)
  const [cityName, setCityName] = useState('') // example cityName

  useEffect(() => { 
    const fetchApi = async() => {  
      try{ 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5b01264b2cc4a07b7d46793a4b6e5fd1&units=imperial`            
        const response = await fetch(url) 
        const data = await response.json() 
        setCityName(cityName)
        setTemp(parseInt(data.main.temp.toString() + '°'))
        
      }catch(err){ 
        setCityName(null)
      }
    }
    fetchApi()
  }) 

  const handleCityNameChange = name => { 
    setCityName(name) 
    
  }

  return ( 
    <div className="App">
      <div className='temp'>{temp}</div> 
      <LocationInput setCityName={handleCityNameChange}/>
      
    </div>
  );
}

export default App;
