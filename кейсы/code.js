
let case_1 = document.querySelector(".a_case");
let p = document.querySelector(".p")
let popap = document.querySelector("#popap_1")

let nuller = '';
let bodyw = document.querySelector(".body_1");
case_1.onclick = function open(min, max) {
    min = Math.ceil(1);
    max = Math.floor(21);
    p.innerHTML = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    popap.onclick = function(min, max) {
        if(p.innerHTML < 3) {
            nuller += '<img class="w1" src="кейсы/оружие_7.jpg">';
            localStorage.setItem('key', bodyw.innerHTML = '<a class="w0" href="#popap_1"><img src="кейсы/Кейс.png" class="a_case"></a>' + nuller);
        } else if(p.innerHTML < 5) {
            nuller += '<img class="w1" src="кейсы/оружие_10.jpg">';
            localStorage.setItem('key', bodyw.innerHTML = '<a class="w0" href="#popap_1"><img src="кейсы/Кейс.png" class="a_case"></a>' + nuller);
        } else if(p.innerHTML < 6) {
            nuller += '<img class="w1" src="кейсы/оружие_9.jpg">';
            localStorage.setItem('key', bodyw.innerHTML = '<a class="w0" href="#popap_1"><img src="кейсы/Кейс.png" class="a_case"></a>' + nuller);
        } else if(p.innerHTML == 20) {
            nuller += '<img class="w1" src="кейсы/почка.png">';
            localStorage.setItem('key', bodyw.innerHTML = '<a class="w0" href="#popap_1"><img src="кейсы/Кейс.png" class="a_case"></a>' + nuller);
        }
        min = Math.ceil(1);
        max = Math.floor(21);
        p.innerHTML = Math.floor(Math.random() * (max - min)) + min;
    }
};
// bodyw.innerHTML = 
localStorage.getItem('key');
