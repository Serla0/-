let clicked = 0;    
let sx = 90;
let sy = 90;
let time;
let win;
document.querySelector('.button_2').onclick = function () {
    time = 600;
    win = "Нормальный"
    let timerId = setInterval(function () {
        let sadp = Math.random();
        let sadp2 = Math.random();
        let sadp3 = Math.random();
        let sadp4 = Math.random();
        if (circle.style.marginLeft = "0vw",
        circle.style.marginTop = "0vh",
        circle.style.marginRight = "0vw",
        circle.style.marginBottom = "0vh") {
        circle.style.marginLeft = (sx*sadp)+"vw";
        circle.style.marginTop = (sx*sadp2)+"vh";
        circle.style.marginRight = (sx*sadp3)+"vw";
        circle.style.marginBottom = (sx*sadp4)+"vh";
        }}, time)
        circle.style.width = "10vw";
        circle.style.height = "10vw";
        circly.style.width = "0vw";
        circly.style.height = "0vw";
}
document.querySelector(".button_1").onclick = function () {
    time = 1200;
    win = "Легко"
    let timerId = setInterval(function () {
        let sadp = Math.random();
        let sadp2 = Math.random();
        let sadp3 = Math.random();
        let sadp4 = Math.random();
        if (circle.style.marginLeft = "0vw",
        circle.style.marginTop = "0vh",
        circle.style.marginRight = "0vw",
        circle.style.marginBottom = "0vh") {
        circle.style.marginLeft = (sx*sadp)+"vw";
        circle.style.marginTop = (sx*sadp2)+"vh";
        circle.style.marginRight = (sx*sadp3)+"vw";
        circle.style.marginBottom = (sx*sadp4)+"vh";
        }}, time)
        circle.style.width = "10vw";
        circle.style.height = "10vw";
        circly.style.width = "0vw";
        circly.style.height = "0vw";
}
document.querySelector(".button_3").onclick = function () {
    time = 200;
    win = "Сложно"
    let timerId = setInterval(function () {
        let sadp = Math.random();
        let sadp2 = Math.random();
        let sadp3 = Math.random();
        let sadp4 = Math.random();
        if (circle.style.marginLeft = "0vw",
        circle.style.marginTop = "0vh",
        circle.style.marginRight = "0vw",
        circle.style.marginBottom = "0vh") {
        circle.style.marginLeft = (sx*sadp)+"vw";
        circle.style.marginTop = (sx*sadp2)+"vh";
        circle.style.marginRight = (sx*sadp3)+"vw";
        circle.style.marginBottom = (sx*sadp4)+"vh";
        }}, time)
        circle.style.width = "10vw";
        circle.style.height = "10vw";
        circly.style.width = "0vw";
        circly.style.height = "0vw";
}
function gut() {
    document.body.innerHTML += '<div id="popap_2"><div class="ton_conteiner"><p>Победа уровень ' + win + '</p></div></div>'
    let elem = document.getElementById("circle");
    elem.parentNode.removeChild(elem);
}