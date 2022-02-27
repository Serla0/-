let main = document.querySelector(".main");
let input_1 = document.querySelector(".input_1");
let but_1 = document.querySelector(".but_1");
function glava() {
    // отследить Enter
    localStorage.setItem("ret", "<p>" + document.querySelector(".input_1").value + "</p>");
    main.innerHTML += localStorage.getItem("ret");
    localStorage.setItem("rey", main.innerHTML);
}
main.innerHTML = localStorage.getItem("rey");
// localStorage.clear();