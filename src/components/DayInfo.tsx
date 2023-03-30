import HourCard from "./subcomponents/HourCard"
import Styles from "./css/DayInfo.module.css"

function DayInfo() {
  return (
    <div className={Styles.hour_cards_container}>
      <HourCard />
      <HourCard />
      <HourCard />
      <HourCard />
      <HourCard />
      <HourCard />
      <HourCard />
      <HourCard />
    </div>
  )
}

export default DayInfo