// toggle style switcher

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler")

styleSwitcherToggler.addEventListener('click', ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll

window.addEventListener('scroll', ()=>{
    if (document.querySelector(".style-switcher").classList.contains("open")
    ) {
        document.querySelector(".style-switcher").classList.remove("open");
 
    }

    if (document.querySelector(".mobile-navbar").classList.contains("hidden")) {
        document.querySelector(".mobile-navbar").classList.add("hidden")        
        
    }
});

// ==============================theme colors=======================================

const alternateStyles = document.querySelectorAll('.alternate-style');

 function setActiveStyle (color)
 {
    alternateStyles.forEach((style)=>{
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            
        }else{
            style.setAttribute("disabled", "true");

        }
    })
 }

//  setActiveStyle();


// light and dark modes

const dayLight= document.querySelector(".day-night");
window.addEventListener("load", ()=>{
    document.querySelector('#About').classList.add('hidden');
    document.querySelector('#services').classList.add('hidden');
    document.querySelector('#portfolio').classList.add('hidden');
    document.querySelector('#contact').classList.add('hidden');
    

    if (document.body.classList.contains('dark')) 
    {
        dayLight.querySelector("i").classList.add('fa-sun');
        
    } else{
        dayLight.querySelector("i").classList.add('fa-moon');
    }


});

document.querySelector('.home').addEventListener("load", ()=>{
    document.querySelector('.home-link').style.pointerEvents='none'
});


dayLight.addEventListener('click', ()=>{
    dayLight.querySelector("i").classList.add('fa-sun');

    dayLight.querySelector("i").classList.add('fa-moon');

    document.body.classList.toggle("dark")
});

