import  Styles  from "./css/TempCard.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

function TempCard() {
  return (
    <div className={Styles.card}>
      <h3>Temperature</h3>

      <div className={Styles.bars_container}>
        <p>Max temperature</p>

        <ProgressBar 
          completed="75" 
          bgColor="#D14444" 
          customLabel="25°"
          animateOnRender={true}
        />
        

        <p>Min temperature</p>

        <ProgressBar 
          completed="45" 
          bgColor="#00A1D7" 
          customLabel="-5°"
          animateOnRender={true}
        />
      </div>
    </div>
    
  )
}

export default TempCard