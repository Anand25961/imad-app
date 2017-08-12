console.log('Loaded!');
//change the text of main text div
var element=document.getElementById('main-text');
element.innerHTML="new value";
//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=maginLeft+'px';
}
img.onclick=function()
{
var interval=setInterval(moveRight,100);    
};
