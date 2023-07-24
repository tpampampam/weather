import Pressure from "./Pressure"
import Humidity from "./Humidity"
import './style.css'

const Temp = ({temp, humidity, pressure}) => {

    return (
        <>
            <div className="temp">{temp}&#8451;</div>
            <div className="bottom__wrapper">
                <Humidity humidity={humidity}/>
                <Pressure pressure={pressure}/>
            </div>
        </>
    )
}

export default Temp;