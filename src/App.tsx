import CurrentInfo from './components/CurrentInfo';
import NavBar from './components/NavBar';
import DayInfo from './components/DayInfo';
import TimeInfo from './components/TimeInfo';
import Styles from './css/App.module.css';

function App() {
  return (
    <div className={Styles.App}>
      <CurrentInfo />
      <div className={Styles.day_container}>
        <NavBar />
        <DayInfo />
        <TimeInfo />
      </div>
    </div>
  );
}

export default App;
