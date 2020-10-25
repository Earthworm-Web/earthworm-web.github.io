document.getElementById("countdown").innerHTML = "<p><b>Jumping to the Home. (5s)</b></p><p>正在跳转到主页。（5秒）";
setTimeout("t4","1000");
function t4() {
    document.getElementById("countdown").innerHTML = "<p><b>Jumping to the Home. (4s)</b></p><p>正在跳转到主页。（4秒）";
    setTimeout("t3","1000");
}
function t3() {
    document.getElementById("countdown").innerHTML = "<p><b>Jumping to the Home. (3s)</b></p><p>正在跳转到主页。（3秒）";
    setTimeout("t2","1000");
}
function t2() {
    document.getElementById("countdown").innerHTML = "<p><b>Jumping to the Home. (2s)</b></p><p>正在跳转到主页。（2秒）";
    setTimeout("t1","1000");
}
function t1() {
    document.getElementById("countdown").innerHTML = "<p><b>Jumping to the Home. (1s)</b></p><p>正在跳转到主页。（1秒）";
    setTimeout("t0","1000");
}
function t0() {
    document.getElementById("countdown").innerHTML = "<p><b>Jumping to the Home. (0s)</b></p><p>正在跳转到主页。（0秒）";
    window.location.href = '/';
}