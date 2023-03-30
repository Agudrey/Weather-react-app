import WindCard from "./subcomponents/WindCard"
import Styles from "./css/TimeInfo.module.css"

function TimeInfo() {
  return (
    <div className={Styles.time_container}>
      <WindCard />
      <WindCard />
      <WindCard />
      <WindCard />
      <WindCard />
      <WindCard />
    </div>
  )
}

export default TimeInfo