
const getwhather= async() =>{
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=0f2a48faba1962e4b3b139d11d6c5438`);
    let response= await fetch(url);

    let data = await response.json();
    console.log(data);
}

getwhather();