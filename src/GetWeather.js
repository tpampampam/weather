import { useState} from "react"
import './style.css'
import GetLocalWeather from "./GetLocalWeather"
import { AiOutlineMonitor } from "react-icons/ai";

const GetWeather = () => {

    

    const [userValue, setUserValue] = useState()
    const [city, setCity] = useState('London')


   
    return(
        <>
            <div className="wrapper">
                <form className="form"  >
                    <input type="text" placeholder="Enter your location" value={userValue} onChange={e => setUserValue(e.target.value)}/>
                    <button type="button" onClick={() => setCity(userValue)}><AiOutlineMonitor/></button>
                </form>
                <GetLocalWeather city={city}/>
            </div>
        </>
    )
}

export default GetWeather;