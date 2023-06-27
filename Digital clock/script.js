function time(){
    const currtime = new Date();
    let hour =currtime.getHours()
    let minutes = currtime.getMinutes()
    let second = currtime.getSeconds()
    if(minutes<10){
      minutes  = ('0'+minutes)
     
    }
    if(second<10){
        second = ('0'+second);
    }
    if(hour>12){
        d = ('PM');
    }
    if(hour<12){
        d = ('AM');
    }
    if(hour > 12){
        hour = ('0'+hour%12)
    }
  
    document.querySelector('.card').innerHTML = `Time${hour}:${minutes}:${second} ${d}`
}
setInterval(time,1000)


function fw(){

    let dl = document.querySelector('.location');
   navigator.geolocation.getCurrentPosition((position=>{
      
   function fn1(){ return lat = position.coords.latitude;}
   function fn2(){return lat = position.coords.longitude;}
  
 
        // lng = position.coords.longitude;
        dl.innerHTML = "latitude: "+fn1()+' longitude: '+fn2();

        // console.log("latitude: "+lat);
        // console.log('longitude: '+lng);
        weatherData(fn1(),fn2())
    }));
}
fw();
function weatherData(lat,lon){
       
     var APIkey = 'ebd3f17fb8cc2328925eeec13a25afe9'
     let weather = document.querySelector('.weather');
    //  let icon = document.querySelector('.icon');
    //  let place = document.querySelector('.place');
    //  let wind = document.querySelector('.wind');
    //  let temp = document.querySelector('.temp');
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`).then((response)=> response.json()).then((data)=>{
        console.log(data)
       
      wt = ` 
      <div class="weather">${data.weather[0].description}</div>
      <div class="temp">${data.main.temp+' deg'}</div>
      <div class="feels">${data.main.feels_like+' deg'}  </div>
      <img class="icon" src="${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}" alt="icon">
      <div class="place"><span class="material-symbols-outlined">
pin_drop
</span> ${data.name}</div>
      <div class="country">Country: ${data.sys.country}</div>
      <div class="humidity">Humidity: ${data.main.humidity} %</div>
      <div class="pressure">Pressure: ${data.main.pressure} kg/cm2</div>
      <div class="visiblity">Visiblity: ${data.visibility} Km</div>
      <div class="timezone">Timezone: ${data.timezone}  GMT+0530</div>`
      

    document.querySelector('.pack').innerHTML=wt

    })
  
  
}
