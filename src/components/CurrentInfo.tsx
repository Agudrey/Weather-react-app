import Styles from "./css/CurrentInfo.module.css"
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineCloud } from "react-icons/ai";
import { MdGrain } from "react-icons/md";

function CurrentInfo() {
  return (
    <div className={Styles.container}>
      <div className={Styles.search_container}>
        <input 
          type="text" 
          className={Styles.search}
          placeholder="Search for places..."
          maxLength={28}
        />

        <button className={Styles.search_button}>
          <BiSearchAlt />
        </button>
      </div>


      <img className={Styles.icon} src="icons/02d.svg" alt="weather_icon" />


      <div className={Styles.info_container}>
        <h2>12°C</h2>

        <div>
          <h4>Update:</h4>
          <p>24/02/2023 6:29</p>
        </div>

        <div className={Styles.temp_info_container}>
          <p><AiOutlineCloud /> Scattered clouds</p>
          <p><MdGrain className={Styles.rain_icon}/> Rain - 30%</p>
        </div>


        <div className={Styles.city}>
          London, UK
        </div>
      </div>
    </div>
  )
}

export default CurrentInfo