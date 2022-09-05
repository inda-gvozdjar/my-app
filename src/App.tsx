import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { generateWeatherData } from "./utils";
import WeatherBox from "./components/WeatherBox";

function App() {
  console.log(generateWeatherData());
  return (
    <div className="App" style={{ display: "flex", columnGap: "5%" }}>
      {generateWeatherData().map((w) => (
        <WeatherBox
          date={w.date}
          temperature={w.temperature}
          weatherType={w.weatherType}
          key={w.temperature}
        />
      ))}
    </div>
  );
}

export default App;
