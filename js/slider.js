const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider_line");
const items = document.querySelectorAll(".slider__item");
const sliderBtnPrev = document.querySelector(".slider-wrapper_btn_prev");
const sliderBtnNext = document.querySelector(".slider-wrapper_btn_next");

let sliderWidth = (items[1].offsetLeft + items[0].offsetLeft - items[0].offsetWidth) + items[0].offsetWidth;
let sliderCount = 3;
let showingItemsCount = Math.floor(slider.offsetWidth / items[0].offsetWidth);

function rollSlider(){
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;

    if(sliderCount < items.length - showingItemsCount){
        sliderBtnNext.disabled = false;
        sliderBtnNext.style.opacity = "1";
        sliderBtnNext.style.cursor = "pointer";
    }
    if(sliderCount > 0){
        sliderBtnPrev.disabled = false;
        sliderBtnPrev.style.opacity = "1";
        sliderBtnPrev.style.cursor = "pointer";
    }
}

function nextSlide(){
    sliderCount++;
    if(sliderCount >= items.length - showingItemsCount){
        sliderBtnNext.disabled = true;
        sliderBtnNext.style.opacity = ".6";
        sliderBtnNext.style.cursor = "not-allowed";
    }
    rollSlider();
}

function prevSlide(){
    sliderCount--;
    if(sliderCount <= 0){
        sliderBtnPrev.disabled = true;
        sliderBtnPrev.style.opacity = ".6";
        sliderBtnPrev.style.cursor = "not-allowed";
    }
    rollSlider();
}

sliderBtnPrev.addEventListener("click", prevSlide);
sliderBtnNext.addEventListener("click", nextSlide);

rollSlider();

window.addEventListener("resize", ()=>{
    sliderWidth = (items[1].offsetLeft + items[0].offsetLeft - items[0].offsetWidth) + items[0].offsetWidth;
    showingItemsCount = Math.floor(slider.offsetWidth / items[0].offsetWidth);
    rollSlider();
})


const styleSlider = document.querySelector(".popup-style_slider");
const styleSliderLine = document.querySelector(".popup-style_slider__line");
const styleItems = document.querySelectorAll(".popup-style__img");

const styleSliderBtnPrev = document.querySelector(".popup-style_slider-wrapper_btn_prev");
const styleSliderBtnNext = document.querySelector(".popup-style_slider-wrapper_btn_next");

let styleSliderCount = 0;
const styleTabs = document.querySelectorAll(".styles_tabs-content");
styleTabs.forEach(tab => {
    const styleSearches = tab.querySelectorAll(".styles_tab-search");
    for(let i = 0; i < styleSearches.length; i++){
        styleSearches[i].addEventListener("click", () =>{
            styleSliderCount = i;
            rollStyleSlider();
            popupStyle.open();
        })
    }
})

let styleSliderHeight = styleItems[0].offsetHeight;
window.addEventListener("resize", () =>{
    styleSliderHeight = styleItems[0].offsetHeight;
    rollStyleSlider();
})

function rollStyleSlider(){
    styleSliderLine.style.transform = `translateY(${-styleSliderCount * styleSliderHeight}px)`;
}

styleSliderBtnPrev.addEventListener("click", () =>{
    styleSliderCount--;
    if(styleSliderCount < 0) styleSliderCount = styleItems.length - 1;
    rollStyleSlider();
});

styleSliderBtnNext.addEventListener("click", () =>{
    styleSliderCount++;
    if(styleSliderCount > styleItems.length - 1) styleSliderCount = 0;
    rollStyleSlider();
});


