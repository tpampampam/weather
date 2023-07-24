import { WiBarometer } from "react-icons/wi"
import './style.css'


const Humidity = ({humidity}) => {

    return (
        <div className="humidity__wrapper">
            <div className="humidity__icon"><WiBarometer/></div>
            <div>{humidity}%</div>
            <div className="humidity__title">Humidity</div>
        </div>
    )
}

export default Humidity;