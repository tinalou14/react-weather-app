import Weather from "./Weather";
import './App.css';

export default function App(){
  return (
      <div className="App">
         <div className="container">
    
    <Weather defaultCity="London" />
    <footer>
      This project was coded by Tina Cooke and is {" "}
      <a href="https://github.com/tinalou14/react-weather-app"
      target="_blank" rel="noreferrer"
      >
        open-sourced on GitHub
      </a> and {" "}
      <a href="https://sunny-stroopwafel-f1622d.netlify.app/"
      target="_blank" rel="noreferrer">
        hosted on Netlify</a>
      </footer>  
      </div>
    </div>
  );
}



