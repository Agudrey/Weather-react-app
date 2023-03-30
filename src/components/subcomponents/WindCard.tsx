import Styles from "./css/WindCard.module.css"
import { FaLongArrowAltUp } from "react-icons/fa";

function WindCard() {
  return (
    <div className={Styles.card}>
      <h3>Wind Status</h3>

      <div className={Styles.wind_info_container}>
        <p>North</p>
        <p>12km/h</p>        
      </div>

      <div className={Styles.compass}>
        <FaLongArrowAltUp className={Styles.arrow}/>
        <p className={Styles.north}>N</p>
        <p className={Styles.east}>E</p>
        <p className={Styles.south}>S</p>
        <p className={Styles.west}>W</p>
      </div>
    </div>
  )
}

export default WindCard
