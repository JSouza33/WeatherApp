import React, {useState, useEffect} from 'react';
import './App.css';
import LocationInput from './LocationInput';

function App() {  
  const [temp, setTemp] = useState(null)
  const [cityName, setCityName] = useState('') // example cityName
  const [wind, setWind] = useState(null) 
  const [humidity, setHumidity] = useState(null) 
  const [skyCondition, setSkyCondition] = useState(null)




  useEffect(() => { 
    const fetchApi = async() => {  
      try{ 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5b01264b2cc4a07b7d46793a4b6e5fd1&units=imperial`            
        const response = await fetch(url) 
        const data = await response.json() 
        setCityName(cityName)
        setTemp(parseInt(data.main.temp).toString() + '°')
        setWind(data.wind.speed)
        setHumidity(data.main.humidity) 
        setSkyCondition(data.weather[0].description)
      }catch(err){ 
        setCityName(null)
        setTemp(null) 
        setWind(null)
        setHumidity(null)
        setSkyCondition(null)
      }
    }
    fetchApi()
  }) 

  const handleCityNameChange = name => { 
    setCityName(name) 
    
  }

  return ( 
    <div className="App">
      <div className='temp-wrapper'> 
        <div>{temp}</div>
      </div>  

      <div className='other-data'> 
        <div className='wind'>{wind}</div> 
        <div className='humidity'>{humidity}</div> 
        <div className='sky-condition'>{skyCondition}</div>
      </div>
      <LocationInput setCityName={handleCityNameChange}/>
    </div>
  );
}

export default App;
