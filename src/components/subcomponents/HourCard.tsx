import Styles from "./css/HourCard.module.css"

function HourCard() {
  return (
    <div className={Styles.card}>
      <h4>16:00</h4>
      <img className={Styles.weather_icon} src="icons/11d.svg" alt="weather_icon" />
      <div className={Styles.temp_container}>
        <p>15°</p>
        <p className={Styles.temp_min}>-3°</p>
      </div>
    </div>
  )
}

export default HourCard