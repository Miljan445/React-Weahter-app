export const GetWeatherAction = (cityName) =>{
    return (dispacth)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=54b856030b57031a69628313ffa71936`)
        .then(response=>response.json())
        .then((city)=>{
            dispacth({
                type:"GETWEATHER",
                city
            })
        })
    }
}