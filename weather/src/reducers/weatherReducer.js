let inistalState = {

}



export const WeatherReducer = (state=inistalState,action)=>{
    if(action.type === "GETWEATHER"){
        return{
            state:action.city
        }
    }
    return state;
}
