import React,{useState} from 'react';
import './App.css';
import './index.css';
function App() {
  const [city,setCity]=useState("");
  const [result,setResult]=useState("");
  const changeHandler=e=>{
    setCity(e.target.value);
    
  }
   const submitHandler=e=>{
     e.preventDefault();
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=362c039a3ae5a951b622a0274419e976`)
     .then(response=>response.json())
          .then(data=>
           {const kelvin=data.main.temp;
            const celsius=kelvin-273.45;
            setResult("Temperature in"+" "+city +" is "+Math.round(celsius)+"°C");
            setCity(" ");
           })


   }
  return (
    <div>
    <center>
    <div className="card">
    <div className="card-body">
    <h2 className="card-title">Weather App</h2>
    <form onSubmit={submitHandler}>
       <input type="text" name="city" value={city} onChange={changeHandler}/><br>
       </br>
       <input type="submit" value="get temperature"/>
    </form>
    <h1>{result}</h1>
    </div>
    </div>
    </center>
    </div>
  );
}

export default App;
