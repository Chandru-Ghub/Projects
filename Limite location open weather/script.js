var APIkey = 'ebd3f17fb8cc2328925eeec13a25afe9';
cityName = 'london';
limit = 5;
city = 'nangavalli';
let t=5;
let err = document.querySelector('.error');
renderCity();

 
function renderCity(){
    if(t==5){
        cityName = city
    }else{
    cityName = val.value;}
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${APIkey}`)
 
.then((response) => response.json()).then((jsonData) => {
  console.log(jsonData);
  err.innerHTML = '';
  if(jsonData.length == 0){
    err.innerHTML = 'invalid city name'
    console.log('hi');
  };
 
  let data = '';
 
  jsonData.forEach((render)=>{
    
    if(render.local_names == undefined || render.local_names.ta == undefined){
        tame = 'Data not Provided'
    }
    else{
        tame = render.local_names.ta
    }

    data += ` <div class="cnty">
    <p class="country">Country: ${render.country}</p>
    <p class="name">Name: ${render.name}</p>
    <p class="lat">Lattitude: ${render.lat}</p>
    <p class="lon">Longitude: ${render.lon}</p>
    <p class="state">State: ${render.state}</p>
    <p class="tname">Tamil: ${tame}</p>
     <p id="temp">temperature:${limit} </p>
   
</div>`

  })
  document.querySelector('.card').innerHTML = data;

});
}



function fw(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`).then((weather)=> weather.json()).then((wjson)=>{
        console.log(wjson);
        console.log(lat,lon);
        console.log(wjson.main.temp)
        return (wjson.main.temp)
       
       
        
       
    })
}

let searchCity = document.querySelector('.submit');
let val = document.querySelector('.inputdata');
searchCity.addEventListener('submit',()=>{
    event.preventDefault();
    t=0;
    renderCity();
   
})