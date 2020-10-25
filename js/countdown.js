document.getElementById("countdown").innerHTML="<div id='center'><p><b>Jumping to the Home. (5s)</b></p><p>正在跳转到主页。（5秒）</div>";
setTimeout("t4()","1000");
function t4() {
    document.getElementById("countdown").innerHTML="<div id='center'><p><b>Jumping to the Home. (4s)</b></p><p>正在跳转到主页。（4秒）</div>";
    setTimeout("t3()","1000");
}
function t3() {
    document.getElementById("countdown").innerHTML="<div id='center'><p><b>Jumping to the Home. (3s)</b></p><p>正在跳转到主页。（3秒）</div>";
    setTimeout("t2()","1000");
}
function t2() {
    document.getElementById("countdown").innerHTML="<div id='center'><p><b>Jumping to the Home. (2s)</b></p><p>正在跳转到主页。（2秒）</div>";
    setTimeout("t1()","1000");
}
function t1() {
    document.getElementById("countdown").innerHTML="<div id='center'><p><b>Jumping to the Home. (1s)</b></p><p>正在跳转到主页。（1秒）</div>";
    setTimeout("t0()","1000");
}
function t0() {
    document.getElementById("countdown").innerHTML="<div id='center'><p><b>Jumping to the Home. (0s)</b></p><p>正在跳转到主页。（0秒）</div>";
    window.location.href = '/';
}