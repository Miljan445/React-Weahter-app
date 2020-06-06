import React, { Component } from 'react'
import {connect} from "react-redux"
import { GetWeatherAction } from '../actions/getWeatherAction';

class GetWeather extends Component {
    constructor(state){
        super(state);
        state={
            city:''
        }
    }
    render(){
        const handleChange = (e) =>{
           this.setState({
               city:document.getElementById("city").value
           })
        }
        const handleSubmit = (e) =>{
            e.preventDefault();
            this.props.getWeather(this.state.city)
            document.getElementById("city").value = "";
        }
        return (
            <div className="form" onSubmit={handleSubmit}>
                <form>
                    <h2>Get weather in your city</h2>
                    <input type="text" id="city" placeholder="London" onChange={handleChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getWeather:(cityName)=>{
            dispatch(GetWeatherAction(cityName))
        }
    }
}
const mapStateToProps = (state)=>{
    return {
        weather:state.weather
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetWeather);