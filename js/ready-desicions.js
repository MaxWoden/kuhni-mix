const popupReadyDesicions = new popup(".popup-ready-desicions");

const styleSlider = document.querySelector(".popup-style_slider");
const styleSliderLine = document.querySelector(".popup-style_slider__line");

for(let i = 0; i < document.querySelectorAll(".rd-main_list__img").length; i++){
    document.querySelector(".popup-style_slider__line").insertAdjacentHTML('beforeend', `<img class="popup-style__img" src="${document.querySelectorAll(".rd-main_list__img")[i].src}" alt="kitchen">`);
}

let styleSliderCount = 0;
for(let i = 0; i < document.querySelectorAll(".rd-main_list__plus-wrapper").length; i++){
    document.querySelectorAll(".rd-main_list__plus-wrapper")[i].addEventListener("click", () =>{
        styleSliderCount = i;
        rollSlider();
        popupReadyDesicions.open();
    });
}

const styleItems = document.querySelectorAll(".popup-style__img");
let styleSliderHeight = styleItems[0].offsetHeight;
window.addEventListener("resize", () =>{
    styleSliderHeight = styleItems[0].offsetHeight;
    rollSlider();
})

function rollSlider(){
    styleSliderLine.style.transform = `translateY(${-styleSliderCount * styleSliderHeight}px)`;
}

const styleSliderBtnPrev = document.querySelector(".popup-style_slider-wrapper_btn_prev");
styleSliderBtnPrev.addEventListener("click", () =>{
    styleSliderCount--;
    if(styleSliderCount < 0) styleSliderCount = styleItems.length - 1;
    rollSlider();
});

const styleSliderBtnNext = document.querySelector(".popup-style_slider-wrapper_btn_next");
styleSliderBtnNext.addEventListener("click", () =>{
    styleSliderCount++;
    if(styleSliderCount > styleItems.length - 1) styleSliderCount = 0;
    rollSlider();
});
