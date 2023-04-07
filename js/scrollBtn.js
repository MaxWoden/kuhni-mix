document.querySelector(".btn-up").addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

document.addEventListener("scroll", () =>{
    if(scrollY > document.querySelector("body").clientHeight / 2)
        document.querySelector(".btn-up").classList.remove("hidden");
    else if(scrollY < document.querySelector("body").clientHeight / 4)
        document.querySelector(".btn-up").classList.add("hidden");
})