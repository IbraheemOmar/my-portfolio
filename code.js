let arrow  = document.getElementById("down-arrow");
let counter = 0;

arrow.addEventListener("click",()=>{
    window.scrollTo(0, document.body.getElementById("about").scrollHeight)
    console.log(window.scrollY);
})

