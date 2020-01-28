var body = document.getElementsByTagName('body')[0];
var deg = 0;
// console.log(body);
// setInterval(() => {
//     body.style.backgroundImage = 'linear-gradient('+ deg +'deg, rgba(255, 208, 0, ' + Math.random() +'), rgba(186, 102, 255, '+ Math.random() +'))';
//     deg >= 360 ? deg = 0 : deg ++;
//     console.log(deg)
// }, 500);
var wrap = body.children[0];
// console.log(wrap)
var divArr = wrap.children;


for (let i = 0; i < divArr.length; i++) {
    divArr[i].style.transform = 'rotateY('+ i * 45 +'deg) translateZ(250px)';
}
var time = setInterval(() => {
    // wrap.style.transform = 'rotate3d(1, 2, 1, '+ deg +'deg)';
    wrap.style.transform = 'rotateY('+ deg +'deg)';
    deg >= 360 ? deg = 0 : deg ++; 
}, 1000 / 50);
