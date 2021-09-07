const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_real = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".mid_layer");
const mood = document.getElementById('temp_status');

const getInfo =async(event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    if(cityVal === " "){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c0e6660805f40a9f0b80ca50a57a084f`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
            tempMood = arrData[0].weather[0].main;
            mood.innerText=tempMood;

            // if(tempMood == "Clear"){
            //     // temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            // }else if(tempMood == "Clouds"){
            //     // temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            // }else if(tempMood == "Rain"){
            //     // temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            // }else{
            //     // temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #eccc68;'></i>";
            // }
            datahide.classList.remove('data_hide');
            cityVal = "";
        }
        catch{
            cityVal = " ";
            city_name.innerText = `Please enter the proper city name`;
            datahide.classList.add('data_hide');
        }

    }
}
submitBtn.addEventListener('click', getInfo);