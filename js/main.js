// DOM elements selected \\
let city_input = document.querySelector('.city_country_text')
let hightemp = document.querySelector('.card-text-high')
let lowtemp = document.querySelector('.card-text-low')
let humidity = document.querySelector('.card-text-humidity')
let weather_des = document.querySelector('.card-text-weather-des')
let city_name = document.querySelector('.name')

// Card weather image \\
// let weatherdisplayicon = document.querySelector(".card-img-top").src ="https://openweathermap.org/img/wn/" +weathericon+ ".png";

//Button query selection and function to get weather api data with promises \\
get_weather_button = document.getElementById("get-weather-btn").addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_input.value+'&appid=f47713e7f80e74c1ca57bf73cdf2010e')
    .then(response => response.json())
    .then(data => {
        let hightempValue = data['main']['temp_max'];
        let lowtempValue = data['main']['temp_min'];
        let descValue = data['weather'][0]['description'];
        let nameValue = data['name'];
        // let weathericon = data['weather']['icon']

        city_name.innerHTML = nameValue;
        weather_des.innerHTML = "Desc - "+descValue;
        hightemp.innerHTML = "Temp: "+hightempValue;
        lowtemp.innerHTML = "Temp: "+lowtempValue;
        city_input.value ="";
        // weatherdisplayicon.innerHTML = weathericon;

})

.catch(err => alert("Wrong city name! Please make sure correct format is entered"));
})


