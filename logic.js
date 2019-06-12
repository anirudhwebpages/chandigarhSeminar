let seminarDay1Time12 = new Date('06/05/2019 12:00:00').getTime();
let seminarDay2Time12 = new Date('06/06/2019 12:00:00').getTime();
let noOfSeconds = 300;
let timerTime = new Date().getTime() + (1000 * noOfSeconds);

var timer1 = setInterval(() => {
    let now = new Date().getTime();
    let diff = seminarDay1Time12 - now;
    if (diff > 0) {
        let sec = diff / 1000;
        let day = Math.floor(sec / 60 / 60 / 24);
        let hour = Math.floor((sec / 60 / 60 ) - (day * 24));
        let minute = Math.floor ((sec / 60) - (hour * 60) - (day * 24 * 60));
        let second = Math.floor(sec - (minute * 60) - (hour * 60 * 60) - (day * 24 * 60 * 60));
        document.querySelector('.seminarDay1Time12 #day h1').innerHTML = day;
        document.querySelector('.seminarDay1Time12 #hour h1').innerHTML = hour;
        document.querySelector('.seminarDay1Time12 #minute h1').innerHTML = minute;
        document.querySelector('.seminarDay1Time12 #second h1').innerHTML = second;
    }
}, 1000);

var timer2 = setInterval(() => {
    let now = new Date().getTime();
    let diff = seminarDay2Time12 - now;
    if (diff > 0) {
        let sec = diff / 1000;
        let day = Math.floor(sec / 60 / 60 / 24);
        let hour = Math.floor((sec / 60 / 60 ) - (day * 24));
        let minute = Math.floor ((sec / 60) - (hour * 60) - (day * 24 * 60));
        let second = Math.floor(sec - (minute * 60) - (hour * 60 * 60) - (day * 24 * 60 * 60));
        document.querySelector('.seminarDay2Time12 #day h1').innerHTML = day;
        document.querySelector('.seminarDay2Time12 #hour h1').innerHTML = hour;
        document.querySelector('.seminarDay2Time12 #minute h1').innerHTML = minute;
        document.querySelector('.seminarDay2Time12 #second h1').innerHTML = second;
    }
}, 1000);


var timerForRegisteration = setInterval(() => {
    let now = new Date().getTime();
    let diff = timerTime - now;
    if (diff > 0) {
        let sec = diff / 1000;
        let day = Math.floor(sec / 60 / 60 / 24);
        let hour = Math.floor((sec / 60 / 60 ) - (day * 24));
        let minute = Math.floor ((sec / 60) - (hour * 60) - (day * 24 * 60));
        let second = Math.floor(sec - (minute * 60) - (hour * 60 * 60) - (day * 24 * 60 * 60));
        document.querySelector('.eventInfo2Div .timer #day').innerHTML = day;
        document.querySelector('.eventInfo2Div .timer #hour').innerHTML = hour;
        document.querySelector('.eventInfo2Div .timer #minute').innerHTML = minute;
        document.querySelector('.eventInfo2Div .timer #second').innerHTML = second;
    }
}, 1000);

let displayRegistrationForm = () => {
    document.getElementById('formContainer').style.display = 'block';
}; 

let hideRegistrationForm = () => {
    document.getElementById('formContainer').style.display = 'none';
}; 

