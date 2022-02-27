
let poisk = document.querySelector('.inp');
let a = document.querySelector('.ar');
document.body.appendChild(a);
function fun () {
    if (poisk.value.toLowerCase() == "sona") {
        document.location.href = "sona.html";
    } else if (poisk.value.toLowerCase() == "vovan") {
        document.location.href = "vovan.html";
    } else if (poisk.value.toLowerCase() == "c++") {
        document.location.href = "C++.html";
    } else {
        alert("Нет такого промокода");
    }
}
