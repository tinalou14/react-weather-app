import React from "react";
import "./Weather.css";
export default function Weather() {
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a City..."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input 
            type="submit"
            value="search"
            className="btn btn-primary w-100"
            />
              </div>
            </div>

        </form>
        <h1>London</h1>
        <ul>
            <li>Monday 13:30</li>
            <li>Mostly Cloudy</li>   
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
            <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
            className="float-left"
            />
            <div className="float-left">
            <span className="temperature">6</span>
            <span className="unit">C</span>
            </div>
            </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13%</li>
            </ul>
        </div>
        </div>
    </div>;
}