import { useState, useEffect } from "react"
import Temp from "./Temp"
import axios from "axios"
import './style.css'

const BASE_URL = 'https://api.openweathermap.org';
const apiKey = "81086552ed8940fde8903750ddb19846";

const GetLocalWeather = ({city}) => {

    const [weather, setRes] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [temp, setTemp] = useState('')
    const [pressure, setPressure] = useState('')
    const [humidity, setHumidity] = useState('')

      console.log(temp)
    useEffect(() => {
      (async () => {
         try {
            setLoading(true)
            const {data: {weather, main: {temp, pressure, humidity}}, status, statusText} = await axios.get(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${apiKey}`)
            console.log(temp)
            if(status >=400) {
               throw new Error(statusText)
            }
            setRes(weather)
            setTemp(Math.floor(temp - 273.5))
            setPressure(pressure)
            setHumidity(humidity)
         } catch(e) {
            console.log({e});
            setError(true)
         } finally {
            setLoading(false);
         }
      })()
     }, [city])
     
     return (   
        <div>
         {loading && <h3>Loading...</h3>}
         {error && <h3>Error</h3>}
         { weather &&
           weather.map(({id, icon}) => 
           <div key={id} className="weather"><img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" /></div>)}
         {temp && <Temp temp={temp} humidity={humidity} pressure={pressure}/>}

        </div>
     )
}


export default GetLocalWeather;

