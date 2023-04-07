const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    document.querySelector(".header-nav").classList.toggle("open");
});
