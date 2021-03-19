var body = document.getElementsByTagName('body')[0];
var deg = 0;

var wrap = body.children[0];
// console.log(wrap)
var divArr = wrap.children;


for (let i = 0; i < divArr.length; i++) {
    divArr[i].style.transform = 'rotateY('+ i * 45 +'deg) translateZ(250px)';
}
var time = setInterval(() => {
    wrap.style.transform = 'rotate3d(1, 1, 0, '+ deg +'deg)';
    deg >= 360 ? deg = 0 : deg ++; 
}, 1000 / 50);
