const axios = require('axios');

const forecast = async (lat, lon)=>{
    const key = process.env.CLIENT_TOKEN;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    try{
        const {data} = await axios(url);
        const temp = (data.main.temp-273.15);
        const cloud = (data.weather[0].description);
        // console.log(`Today the temperature is: ${temp.toFixed(1)} °C and the weather type is: ${cloud}.`);
        return temp.toFixed(1);
    }catch(err){
        console.log(err.message);
    }
}

module.exports = forecast;