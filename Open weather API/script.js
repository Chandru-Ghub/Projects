function initAPP(){
const apiKey = 'ebd3f17fb8cc2328925eeec13a25afe9';
const search = document.querySelector('#inputdata');
const submit = document.querySelector('#submit');
const error = document.querySelector('.locerror');
submit.addEventListener('submit',(()=>{
    event.preventDefault();
    fetchApi(search.value);
}))




function fetchApi(city){

  
   let a =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((data)=>data.json()).then((weatherData)=>{
       
    renderdata(weatherData)}).catch((error)=>(console.log(error)));
      
}




function renderdata(rawfile){
    error.innerHTML = '';
    if(rawfile.cod =='404'){
        error.innerHTML = 'invalid city name!'
    }
    document.querySelector('.error').style.display='none'
    let card = document.querySelector('.container')
    weatherDetail = `
                <span class = 'bck'>   
                    <p class="lat">lat: ${rawfile.coord.lat}/</p>
                    <p class="lon">lon: ${rawfile.coord.lon}</p>
                    <p class="hum">humidity: ${rawfile.main.humidity}%</p>
                <p class="speed">Wind Speed: ${rawfile.wind.speed}km/hr</p>
                </spam>
                

            </div>
            <div class="con">
                <p class="description">${rawfile.weather[0].description}</p>
            </div>
                        `

    card.innerHTML = weatherDetail;
   
 state(rawfile.name)
    let card2 = document.querySelector('.weather');

    weather = `
                <img class="icon" src="https://openweathermap.org/img/wn/${rawfile.weather[0].icon}@2x.png" alt="image "'>
            </div>
           
            <div class="temperature">
                <p class="temp">${Math.round(rawfile.main.temp)}°c</p>
            </div>
            <div class="place">
                <p class="name"> ${rawfile.name}</p>
            </div>    
           
            <div class="content">
                <p class="main">Country: ${rawfile.sys.country}</p>
            </div>
            <p class="state">State:</p>
            `

    card2.innerHTML = weather;
    card.style.display = 'block'
    card2.style.display = 'block'
       
    
}

function state(cityName){
    cityName=='Salem'?a=4:a=0;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}&limit=5`)
 
.then((response) => response.json()).then((jsonData) => {
    jsonData.length == 0? stateName = cityName
    : stateName =  jsonData[a].state;
    document.querySelector('.state').innerHTML = `State: ${stateName}`;
    
})
}
}
initAPP()