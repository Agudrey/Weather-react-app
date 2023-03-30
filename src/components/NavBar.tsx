import Styles from "./css/NavBar.module.css";

function NavBar() {
  return (
    <div className={Styles.navbar_container}>
      <div className={Styles.navbar_title}>
        Today
      </div>

      <div className={Styles.buttons_container}>
        <button className={`${Styles.navbar_buttons} ${Styles.selected_button}`}>
          °C
        </button>

        <button className={Styles.navbar_buttons}>
          °F
        </button>

        <div className={Styles.toggle_switch}>
          <label className={Styles.switch_label}>
            <input type="checkbox" className={Styles.checkbox} />
            <span className={Styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default NavBar