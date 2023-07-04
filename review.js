const observer= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function openPopup() {
    window.open("food.html", "Popup", "width=400,height=400");
  }
  //////
  ///////
/////
////////
////////
  ///////
  function closePopup() {
    window.close("food.html", "Popup", "width=400,height=400");
  }