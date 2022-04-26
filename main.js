

//멘트 정리
let rainMent = '';
let feelMent = '';
let outerEmoji = '';
let topcloEmoji = '';
let btmcloEmoji = '';
let nowEmoji='';

let topcloMent = [
    "히트텍/내복","두꺼운니트","기모후드티","기모맨투맨",
    "니트","후드티","맨투맨",
    "셔츠","블라우스","롱슬리브",
    "반팔티","반팔셔츠","민소매"
];
let btmcloMent = [
    "히트텍/내복","기모바지","코듀로이바지",
    "슬랙스","청바지","면바지","롱치마",
    "린넨바지","냉장고바지","반바지","치마"
];





//지역
let whereLoca = '';
 categoryChange =(e)=> {
    const state = document.getElementById("state");
  
    const gangwon = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
    const gyeonggi = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
    const gyeongsangnam = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
    const gyeongsangbuk = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
    const gwangju = ["광산구", "남구", "동구", "북구", "서구"];
    const daegu = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
    const daejeon = ["대덕구", "동구", "서구", "유성구", "중구"];
    const busan = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
    const seoul = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
    const ulsan = ["남구","동구","북구","중구","울주군"];
    const incheon = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
    const jeonnam = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
    const jeonbuk = ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"];
    const jeju = ["서귀포시","제주시","남제주군","북제주군"];
    const chungbuk = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
    
    if (e.value == "general01") {
        add = gangwon;
      } else if (e.value == "general02") {
        add = gyeonggi;
      } else if (e.value == "general03") {
        add = gyeongsangnam;
      } else if (e.value == "general04") {
        add = gyeongsangbuk;
      } else if (e.value == "general05") {
        add = gwangju;
      } else if (e.value == "general06") {
        add = daegu;
      } else if (e.value == "general07") {
        add = daejeon;
      } else if (e.value == "general08") {
        add = busan;
      } else if (e.value == "general09") {
        add = seoul;
      } else if (e.value == "general10") {
        add = ulsan;
      } else if (e.value == "general11") {
        add = incheon;
      } else if (e.value == "general12") {
        add = jeonnam;
      } else if (e.value == "general13") {
        add = jeonbuk;
      } else if (e.value == "general14") {
        add = jeju;
      } else if (e.value == "general15") {
        add = chungnam;
      } else if (e.value == "general16") {
        add = chungbuk;
      }
      //입력후 초기화
      state.options.length = 0;
      
      // 군/구 갯수;
      for (property in add) {
		let opt = document.createElement("option");
		opt.value = add[property];
		opt.innerHTML = add[property];
		state.appendChild(opt);
	}


    

}

//검색기능


//온도

let nowTemp = 0;
//체감온도
let feelTemp = 0;
//강수량
let rainFall = 0;


//날씨 api불러오는 함수
const getWeather = async() =>{
    let url= new URL(`https://api.openweathermap.org/data/2.5/weather?&q=seoul&units=metric&appid=0f2a48faba1962e4b3b139d11d6c5438&lang=kr`);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    nowTemp = Math.round(data.main.temp);
    feelTemp = Math.round(data.main.feels_like);
    
    if(data.rain){
        rainFall = Object.values(data.rain);
    }else{
        rainFall = 0;
    }
    if(data.snow){
      snowFall = Object.values(data.snow);
  }else{
      snowFall = 0;
  }

    cloud = data.clouds.all;
    whereLoca = data.name;
    minTemp = Math.round(data.main.temp_min);
    maxTemp = Math.round(data.main.temp_max);
    
    console.log("현재지역은",whereLoca);
    console.log("현재온도는",nowTemp,"°");
    console.log("체감온도는",feelTemp,"°");
    console.log("강수량은",rainFall);
    console.log("현재 구름은",cloud,"%");
    console.log("오늘의 최저기온은",minTemp,"°","최고기온은",maxTemp,"°");
    console.log("눈은",snowFall);

    render();
}

getWeather();





//보여주는 함수
const render = () =>{
  if(rainFall>0){
    nowEmoji="🌧"
  }else {
    if(1<cloud<49){
      nowEmoji="🌤"
    }else if(cloud>50){
      nowEmoji="🌥"
    }else{
      if(snow>0){
        nowEmoji="🌨"
    }else{nowEmoji="🌞"}
  }
  }




    let ondoHTML = '';

    ondoHTML = `<p id="now-city">${whereLoca}은 지금!</p> 
    <div class="containerbackground">${nowEmoji}</div>
    <p id="now-ondo">${nowTemp}°<p id="highrow-tem">  ${minTemp}° / ${maxTemp}° </p>`;

    document.getElementById("ondo-thread").innerHTML = ondoHTML;



     //옷차림
     let emojiMent = ["👔","👕👚","👖","🩳"];
     if(30<nowTemp){
         outerEmoji = "👔";

     }else if(nowTemp<4){
         outerEmoji = "🧣🧤🧥";
     }
     else if(4<nowTemp<=11){
         outerEmoji = "🧥";
     }
 


 
     let topcloHTML = '';
     topcloHTML = `<p>👔</p>
     <p>반팔,긴팔</p>`;
 
     document.querySelector(".topclo").innerHTML = topcloHTML;
 
     let btmcloHTML = '';
     btmcloHTML = `<p>👖</p>
     <p>반바지,치마</p>`;
 
     document.querySelector(".btmclo").innerHTML = btmcloHTML;
 
     //강수량
    if(rainFall == 0){
        rainMent = "🌞 비가 오지 않아요!"
    }else if(0<rainFall<=10){
        rainMent = "💧 약한 비가 내려요!"
    }else if(10<rainFall<=29){
        rainMent = "☂ 우산 꼭 챙기세요!"
    }else if(29<rainFall<=50){
        rainMent = "☔ 비가 많이 와요!"
    }else if(50<rainFall){
        rainMent = "🌀 하늘이 미쳤어요!"
    }
    
    let rainHTML = '';
    rainHTML = `<p class="left">강수량</p>
    <p>${rainFall}mm</p>
    <p>${rainMent}</p>`;

    document.querySelector(".rainFall").innerHTML = rainHTML;

    let feelHTML = '';
    feelHTML = `<p class="left">체감온도</p>
    <p>${feelTemp}°</p>
    <p>실제온도와 비슷</p>`;
    document.querySelector(".feelOndo").innerHTML = feelHTML;

    
}

