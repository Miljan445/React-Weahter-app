import React, { Component } from 'react'
import {connect} from "react-redux"
import {Clouds} from "../components/Clouds.jpg"

 class  WeatherDisplay extends Component  {
     render() {
         let response = this.props.weather.state === undefined ? (<h2>Get your locations weather!</h2>):(
           <div className="response">
               <div className="holder">
               <img src = {`http://openweathermap.org/images/flags/${this.props.weather.state.sys.country.toLowerCase()}.png`} id="flag"/>
               <h2>{this.props.weather.state.name},{this.props.weather.state.sys.country}</h2>
               </div>
               <div className="clouds">
               <img src = {`http://openweathermap.org/img/wn/${this.props.weather.state.weather[0].icon}.png`} className="imgCloud"/>
               <h3>{this.props.weather.state.weather[0].description}</h3>
               </div>
               <h3>Current temperature : {Math.floor(this.props.weather.state.main.feels_like - 273.15)} Degrees Celsius</h3>
               <h3>Feels like : {Math.floor(this.props.weather.state.main.temp - 273.15)} Degrees Celsius</h3>
               <h3>Max temperature : {Math.floor(this.props.weather.state.main.temp_max - 273.15)} Degrees Celsius</h3>
               <h3>Min temperature : {Math.floor(this.props.weather.state.main.temp_min - 273.15)} Degrees Celsius</h3>
           </div>
         ) 
         return (
            <div className = "weather" >
                {response}
            </div>
         );
     }
}

const mapStateToProps = (state)=>{
    return {
        weather:state.weather
    }
}
export default connect(mapStateToProps)(WeatherDisplay)