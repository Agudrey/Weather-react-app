import Styles from "./css/CloudsCard.module.css"

function CloudsCard() {
  return (
    <div className={Styles.card}>
      <h3>Cloudiness</h3>
      
      <div className={Styles.info_container}>
        <p className={Styles.cloud_percentage}>20%</p>
        <p className={Styles.cloud_status}>few clouds 👍</p>
      </div>

      <img src="icons/04d.svg" alt="cloud_icon" />
    </div>
  )
}

export default CloudsCard