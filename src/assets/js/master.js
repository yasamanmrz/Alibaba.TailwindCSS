const originInput = document.getElementById("originInput")
const originMenu = document.getElementById("originMenu")
const destinationInput = document.getElementById("destinationInput")
const destinationMenu = document.getElementById("destinationMenu")

originInput.addEventListener("click", function (e) {
    e.stopPropagation()
    originMenu.classList.toggle("hidden")
    destinationMenu.classList.add("hidden")
})

destinationInput.addEventListener("click", function(e){
   e.stopPropagation()
   destinationMenu.classList.toggle("hidden")
   originMenu.classList.add("hidden")
})

document.addEventListener("click", function () {
    originMenu.classList.add("hidden")
    destinationMenu.classList.add("hidden")
})
originMenu.addEventListener("click", function(e){
    e.stopPropagation()
})

destinationMenu.addEventListener("click", function(e){
    e.stopPropagation()
})



const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("translate-x-[100%]");
});

