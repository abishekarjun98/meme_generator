function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('dragme');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';

    
    getcoords(event.clientX,event.clientY);
    event.preventDefault();
    return false;

} 
var dm = document.getElementById('dragme'); 
var canvas=document.getElementById("canvas");
dm.addEventListener('dragstart',drag_start,false); 
canvas.addEventListener('dragover',drag_over,false); 
canvas.addEventListener('drop',drop,false); 
