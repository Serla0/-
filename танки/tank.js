let tank1 = document.querySelector("#tank_1");
let pul1 = document.querySelector("#pul1");
let pul2 = document.querySelector("#pul2");
let tD = 0;
let tW = 0;
document.addEventListener('keyup', function (event) {
    if (event.code == 'KeyD') {
        if (tD < 1200) {
            tD += 40;
            tank1.style.cssText = 'transform: rotate(90deg); left: ' + tD + 'px; top: ' + tW + 'px;';
        }
    } else if (event.code == 'KeyA') {
        if (tD > 0) {
            tD -= 40;
            tank1.style.cssText = 'transform: rotate(-90deg); left: ' + tD + 'px; top: ' + tW + 'px;';
        }
    } else if (event.code == 'KeyS') {
        if (tW < 560) {
            tW += 40;
            tank1.style.cssText = 'transform: rotate(180deg); left: ' + tD + 'px; top: ' + tW + 'px;';
        }
    } else if (event.code == 'KeyW') {
        if (tW > 0) {
            tW -= 40;
            tank1.style.cssText = 'transform: rotate(0deg); left: ' + tD + 'px; top: ' + tW + 'px;';
        }
    }
});
let tank2 = document.querySelector("#tank_2");
let tT = 520;
let tL = 1200;
document.addEventListener("keyup", function (event) {
    if (event.code == 'ArrowRight') {
        if (tL < 1200) {
            tL += 40;
            tank2.style.cssText = 'transform: rotate(90deg); left: ' + tL + 'px; top: ' + tT + 'px;';
            ///////////////////////////////////////////////////
            // pul2.style.cssText += 'left: ' + tL + 'px;';
            for (let tLp = 0; tLp + tL < 1200; tLp += 1) {
                pul2.style.cssText = 'left: ' + tLp + 'px;';
            }
            // this.createElement
            ///////////////////////////////////////////////////
        }
    } else if (event.code == 'ArrowLeft') {
        if (tL > 0) {
            tL -= 40;
            tank2.style.cssText = 'transform: rotate(-90deg); left: ' + tL + 'px; top: ' + tT + 'px;';
        }
    } else if (event.code == 'ArrowDown') {
        if (tT < 520) {
            tT += 40;
            tank2.style.cssText = 'transform: rotate(180deg); left: ' + tL + 'px; top: ' + tT + 'px;';
        }
    } else if (event.code == 'ArrowUp') {
        if (tT > -40) {
            tT -= 40;
            tank2.style.cssText = 'transform: rotate(0deg); left: ' + tL + 'px; top: ' + tT + 'px;';
        }
    }
});
