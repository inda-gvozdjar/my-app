import React from "react";
import { IWeatherData } from "../../types";
import {
  RainSnowIcon,
  SnowflakeIcon,
  CloudyIcon,
  PartlyCloudyDayIcon,
  SunnyIcon,
} from "@fluentui/react-icons-mdl2";
import "./style.scss";

const WeatherBox = ({ date, temperature, weatherType }: IWeatherData) => {
  const getIcon = () => {
    switch (weatherType) {
      case "RainSnow":
        return <RainSnowIcon />;
      case "Snow":
        return <SnowflakeIcon />;
      case "Cloudy":
        return <CloudyIcon />;
      case "Partly cloudy day":
        return <PartlyCloudyDayIcon />;
      case "Sunny":
        return <SunnyIcon />;
        break;
      default:
        break;
    }
  };

  return (
    <div className="Holder" key= {temperature}>
      {/*  <p>{new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)}</p>
            <p>{new Intl.DateTimeFormat("en-US").format(date)}</p>
            {getIcon()}
            <p>{temperature}</p>
            <p>{weatherType}</p> */}
      <div id="card" className="weather" key= {temperature}>
        <div className="details">
          <div className="temp">
            {temperature}
            <span>&deg;</span>
          </div>
          <div className="infos">
            <h1>{getIcon()}</h1>
          </div>
          <div className="right">
            <div id="summary">{weatherType}</div>
            <div style={{ fontWeight: "bold", marginTop: "4px" }}>
              {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
                date
              )}
            </div>
            <div className="date">
              {new Intl.DateTimeFormat("en-US").format(date)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
