


// navbar scroll  fix navbar on scroll 

let nav = document.querySelector(".navbar");
window.onscroll = function()
{
    if(document.documentElement.scrollTop >100)
    {
        nav.classList.add("nav-scroll");
    }
    else
    {
        nav.classList.remove("nav-scroll");
    }
}








// close manu when click on link 

let navbar = document.querySelectorAll(".nav-link");
let collaps = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a)
{
    a.addEventListener("click", function(){
        collaps.classList.remove("show")
        closeicon.classList.add("hide");
        mobilemanue.classList.remove("hide")
    })
})










// add active class to clicked link active linke  

let activeClass = document.querySelectorAll(".navbar ul li a");


for (item of activeClass) {
    item.addEventListener('click', (e) => {
        activeClass.forEach(elem => {

            elem.classList.remove('active');
        });
        e.target.classList.add("active")
    });
};

// mobile icon close change section 

let mobilemanue = document.getElementById("mobile-manue");
let closeicon = document.getElementById("close-icon");
mobilemanue.addEventListener("click", function(){
closeicon.classList.remove("hide");
mobilemanue.classList.add("hide")

})
closeicon.addEventListener("click", function(){
    closeicon.classList.add("hide");
    mobilemanue.classList.remove("hide")
    
    })