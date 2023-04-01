import Styles from "./css/SunriseCard.module.css"
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";

function SunriseCard() {
  return (
    <div className={Styles.card}>
      <h3>Sunrise & Sunset</h3>

      <div className={Styles.icons_container}>
        <BsSunriseFill className={Styles.sun_icon}/>
        <BsSunsetFill className={Styles.sun_icon} />        
      </div>

      <div className={Styles.sunrise_info}>
        <p>6:35 AM</p>
        <p>5:42 PM</p>
      </div>
    </div>
  )
}

export default SunriseCard