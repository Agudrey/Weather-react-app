import Styles from "./css/TimeInfo.module.css"
import TempCard from "./subcomponents/TempCard"
import WindCard from "./subcomponents/WindCard"
import SunriseCard from "./subcomponents/SunriseCard"
import CloudsCard from "./subcomponents/CloudsCard"
import PressureCard from "./subcomponents/PressureCard"
import VisibilityCard from "./subcomponents/VisibilityCard"

function TimeInfo() {
  return (
    <div className={Styles.time_container}>
      <TempCard />
      <WindCard />
      <SunriseCard />
      <CloudsCard />
      <PressureCard />
      <VisibilityCard />
    </div>
  )
}

export default TimeInfo