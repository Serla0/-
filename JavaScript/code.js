
let poisk = document.querySelector('.inp');
let a = document.querySelector('a');
document.body.appendChild(a);
function fun () {
    if (poisk.value == "sona") {
        document.location.href = "sona.html";
    } else {
        alert("Нет такого промокода")
    }
}