/*const gallery = document.getElementById("gallery");//diri mag link ang gallery na div sa js

window.onmousemove = e =>{ // e stand for event
    const mouseX= e.clientX, //clientX,Y is used para mo navigate ang mouse per pixel
    mouseY=e.clientY;



 const xDecimal = mouseX / window.innerWidth,
       yDecimal = mouseY / window.innerHeight;

const maxX= gallery.offsetWidth- window.innerWidth,
      maxY=gallery.offsetHeight-window.innerHeight;


const panX= maxX * xDecimal * -1,
      panY=maxY* yDecimal * -1;

gallery.style.transform= `translate(${ panX }px, ${panY}px)`
}*/
const gallery = document.getElementById("gallery");

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}