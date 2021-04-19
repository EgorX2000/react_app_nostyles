import React from "react";

const Weather = props => {
    const { data } = props;

    const date = new Date(data.dt * 1000);

     if (data.clouds.all<=25) {
         var clouds1 = "Ясно";
     }  
     if (data.clouds.all>25 && data.clouds.all<=50) {
         clouds1 = "Переменная облачность";
     }  
     if (data.clouds.all>50 && data.clouds.all<=75) {
         clouds1 = "Облачно";
     }  
     if (data.clouds.all>75) {
         clouds1 = "Пасмурно";
     }  
     if (data.wind.deg>337.5 && data.wind.deg<=22.5) {
         var wind = "С";
     }  
     if (data.wind.deg>22.5 && data.wind.deg<=67.5) {
         wind = "СВ";
     }  
     if (data.wind.deg>67.5 && data.wind.deg<=112.5) {
         wind = "В";
     }  
     if (data.wind.deg>112.5 && data.wind.deg<=157.5) {
         wind = "ЮВ";
     }  
     if (data.wind.deg>157.5 && data.wind.deg<=202.5) {
         wind = "Ю";
     }  
     if (data.wind.deg>202.5 && data.wind.deg<=247.5) {
         wind = "ЮЗ";
     }  
     if (data.wind.deg>247.5 && data.wind.deg<=292.5) {
         wind = "З";
     }  
     if (data.wind.deg>292.5 && data.wind.deg<=337.5) {
         wind = "СЗ";
     }


    const temp = data.main.temp;
    const clouds = clouds1;
    const pressure = Math.trunc((data.main.pressure)*0.75006375541921);
    const windd = wind;
    const winds = data.wind.speed;
    return (
        <div>
            <p><b>{date.toLocaleDateString()}</b></p>
            <div>
                <p>Температура: {temp}°C</p>
                <p>Облачность: {clouds}</p>
                <p>Давление: {pressure} мм рт. ст.</p>
                <p>Ветер: {windd}, {winds} м/с</p>
            </div>
        </div>
    );
}

export default Weather;



