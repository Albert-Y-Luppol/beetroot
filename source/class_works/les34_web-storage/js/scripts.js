//weather key: 3fb7c69432d1ed315a6bca5719b90a72

(async ()=>{
    'use strict';

    let weatherPlace = document.getElementById('weatherPlace'),
        flag = 4,
        flagMax = 4,
        url = `http://api.openweathermap.org/data/2.5/group`,
        key = `3fb7c69432d1ed315a6bca5719b90a72`,
        ids = [
            2267057,
            2968815,
            4957962,
            5202009,
            293397,
            360630,
            5128638,
            1261481,
            1689973,
            1850147,
            4911455
        ],
        icons = {
            "01d" : "wi-day-sunny",
            "01n" : "wi-night-clear",
            "02d" : "wi-day-cloudy",
            "02n" : "wi-night-alt-cloudy",
            "03d" : "wi-cloud",
            "03n" : "wi-cloud",
            "04d" : "wi-cloudy",
            "04n" : "wi-cloudy",
            "09d" : "wi-rain-mix",
            "09n" : "wi-rain-mix",
            "10d" : "wi-day-rain-mix",
            "10n" : "wi-night-rain-mix",
            "11d" : "wi-day-lightning",
            "11n" : "wi-night-alt-lightning",
            "13d" : "wi-day-snow",
            "13n" : "wi-night-snow",
            "50d" : "wi-day-fog",
            "50n" : "wi-night-fog"
        },
        queryString = new URLSearchParams();

    let params = {
        id: ids.join(','),
        units: 'metric',
        appid: key
    }

    for (let param in params){
        queryString.append(param, params[param]);
    }




    //web storagestart

    let data = getData();

    if(data){
        displayWeather( data );
    } else {
        loadData();
    }

    setInterval(()=>{
        let data = getData();
        if(!data){
            loadData();
        } else {
            displayTime();;
        }
    }, 1000 * 10);

    function getData(){

        // get data from storage
        // storage data validation

        let localData = localStorage.getItem('weatherData'),
            lastUpdate = localStorage.getItem('weatherLastUpdate');
            
        if(localData && lastUpdate){
            let diff =  (Date.now() - lastUpdate) / 1000 / 60;

            // alert(diff);

            if(diff < 5){  
                return JSON.parse(localData);
            }
        }

        //load data from server -- to do

        return false;
    }


    function setData(data){
        localStorage.setItem('weatherData', JSON.stringify(data));
        localStorage.setItem('weatherLastUpdate', Date.now());
    }


    function displayWeather(citiesWeather){

        //display weather
        weatherPlace.innerHTML = "";

        if(citiesWeather.cnt){

            citiesWeather.list.forEach((city, index) => {
    
                let li = document.createElement('li');
                li.classList= `box`;
                li.innerHTML = `
                    <a href="#" class="boxes">
                        <h2>${city.temp}</h2>
                        <span>${Math.trunc(city.temp)}</span>
                        <i class="wi wi-day-cloudy"></i>
                    </a>
                `;
                li.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                weatherPlace.append(li);
    
                li.querySelector('i').className = 'wi ' + icons[city.icon];
                let sizeIndex = Math.floor(Math.random()**3 * flag) + 1;
    
                if(index + 1 == citiesWeather.cnt){
                    li.style.gridColumn = "span " + (flag != 0 ? flag: flagMax);
                } else {
                    if(window.innerWidth < 576) sizeIndex = 4;
                    flag = flag - sizeIndex;
                    if(!flag) flag = flagMax;
                    li.style.width = '100%';
                    li.style.gridColumn = "span " + sizeIndex;
                }
                
    
            });
    
            weatherPlace.style.opacity = 1;

            //display update time

            displayTime();
        }

    }

    function displayTime(){

        let updateTimeDiff = Date.now() - localStorage.getItem('weatherLastUpdate'),
                timePlace = document.getElementById('lastUpdate');

        timePlace.innerText = (updateTimeDiff / 1000 / 60).toFixed() == 0 ? 'right now' : (updateTimeDiff / 1000 / 60).toFixed() + ' minutes ago';
    }


    async function loadData(){

        //load weather data from server

        let   weatherResponce = await fetch(`${url}?${queryString.toString()}`),

        citiesWeather = await weatherResponce.json();

        if(citiesWeather.cnt) {
            let newData = {
                cnt: citiesWeather.cnt,
                list: []
            }

            citiesWeather.list.forEach((city, index) => {
                newData.list.push({
                    name: city.name,
                    temp: city.main.temp,
                    icon: city.weather[0].icon
                });
            });

            setData(newData);
            displayWeather(newData);
        } else {
            let oldData = getData();
            if (oldData){
                displayWeather(oldData);
            }
        }

    }

    // web storage end



    // console.log(citiesWeather);

   
    
    // functions


})();