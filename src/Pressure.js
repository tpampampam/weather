import {  WiRaindrop } from "react-icons/wi"
import './style.css'

const Pressure = ({pressure}) => {

    return (
        <div className="pressure__wrapper">
            <div className="pressure__icon"><WiRaindrop/></div>
            <div className="pressure">{pressure}<span>mm Hg</span></div>
            <div className="pressure__title">Pressure</div>
        </div>
    )
}

export default Pressure;