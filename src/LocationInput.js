import React, {useState} from 'react'
import './LocationInput.css'

export default function LocationInput(props) { 

  const [input, setInput] = useState('')  

  const submitFormHandler = event => { 
    props.setCityName(input)
    event.preventDefault()
  }
  return (
    <div> 
      <form onSubmit={submitFormHandler}> 
        <input onChange={(e) => setInput(e.target.value)} 
              ></input>
      </form>
    </div>
  )
}

