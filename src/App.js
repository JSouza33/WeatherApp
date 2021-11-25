import React, {useState, useEffect} from 'react';
import './App.css';
import LocationInput from './LocationInput';

function App() {  
  const [temp, setTemp] = useState(null)
  const [cityName, setCityName] = useState(null)
  const [wind, setWind] = useState(null) 
  const [humidity, setHumidity] = useState(null) 
  const [skyCondition, setSkyCondition] = useState(null)
  
  useEffect(() => { 
    const fetchApi = async() => { 
      try{ 
        const apiKey = process.env.REACT_APP_API_Key 
        console.log(process)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`            
        const response = await fetch(url) 
        const data = await response.json() 
        setCityName(cityName)
        setTemp(parseInt(data.main.temp).toString() + '°')
        setWind(parseInt(data.wind.speed).toString() + 'mph')
        setHumidity(parseInt(data.main.humidity).toString() + '%') 
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
  },[cityName]) 

  const handleCityNameChange = name => { 
    setCityName(name) 
  }  

  const renderOtherData = () => { 
    return ( 
      <div className='other-data'>  
        <div className='city-name'>{cityName}</div>
        <div className='sky-condition'>{skyCondition}</div>
        <div className='wind'>{wind}</div> 
        <div className='humidity'>{humidity}</div>
      </div>
    )
  }

  return (  
    <div className="App">
      <div className='temp-wrapper'> 
        <div>{temp}</div>
      </div>  
      <>{cityName !== null && renderOtherData()}</>
      <LocationInput setCityName={handleCityNameChange}/>
    </div>
  );
}

export default App;