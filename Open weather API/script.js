function initAPP(){
const apiKey = 'ebd3f17fb8cc2328925eeec13a25afe9';
const search = document.querySelector('#inputdata');
const submit = document.querySelector('#submit');

submit.addEventListener('submit',(()=>{
    event.preventDefault();
    fetchApi(search.value);
}))




function fetchApi(city){

  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((data)=>data.json()).then((weatherData)=>{
     
        renderdata(weatherData); 
    console.log(weatherData)}).catch((error)=>(error));
      }
}




function renderdata(rawfile){
    document.querySelector('.error').style.display='none'
    let card = document.querySelector('.container')
    console.log(rawfile.coord.lat)
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
            </div>`
    
    card2.innerHTML = weather;
    card.style.display = 'block'
    card2.style.display = 'block'
       
    
}

initAPP()