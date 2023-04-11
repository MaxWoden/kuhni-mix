const popupPhotoPrinting = new popup(".popup-photo-printing");

const slider = document.querySelector(".popup-style_slider");
const sliderLine = document.querySelector(".popup-style_slider__line");

const tabTitles = document.querySelectorAll(".pp-main_titles__item");
const tabContents = document.querySelectorAll(".pp-main_content__item");

//WIDTH < 710
const titlesSelect = document.querySelector(".pp-main_titles-select");


for(let i = 0; i < tabTitles.length; i++){
    tabTitles[i].addEventListener("click", () =>{
        const tabImages = tabContents[i].querySelectorAll(".pp-main_content__img");
        let sliderCount = 0;

        //WIDTH < 710
        titlesSelect.querySelectorAll("option")[i].selected = "selected";

        sliderLine.innerHTML = "";

        for(let j = 0; j < tabImages.length; j++){
            sliderLine.insertAdjacentHTML('beforeend', `<img class="popup-photo-printing__img" 
            src="${tabImages[j].src}" alt="Фотопечать">`);

            tabImages[j].addEventListener("click", () =>{
                sliderCount = j;
                rollSlider();
                popupStyle.open();
            });
        }

        let sliderHeight = document.querySelector(".popup-photo-printing__img").offsetHeight;
        sliderLine.style.height = sliderHeight + "px";

        window.addEventListener("resize", () =>{
            sliderHeight = document.querySelector(".popup-photo-printing__img").offsetHeight;
            sliderLine.style.height = sliderHeight + "px";
            rollSlider();
        })

        function rollSlider(){
            sliderLine.style.transform = `translateY(${-sliderCount * sliderHeight}px)`;
        }

        const sliderBtnPrev = document.querySelector(".popup-style_slider-wrapper_btn_prev");
        sliderBtnPrev.addEventListener("click", () =>{
            sliderCount--;
            if(sliderCount < 0) sliderCount = tabImages.length - 1;
            rollSlider();
        });

        const sliderBtnNext = document.querySelector(".popup-style_slider-wrapper_btn_next");
        sliderBtnNext.addEventListener("click", () =>{
            sliderCount++;
            if(sliderCount > tabImages.length - 1) sliderCount = 0;
            rollSlider();
        });
    })
}
tabTitles[1].click();

window.addEventListener("resize", event =>{
    if(event.target.window.innerWidth <= 710) response710();
})

function response710(){
    if(window.innerWidth > 710) return;
    titlesSelect.addEventListener("change", () =>{
        let index = titlesSelect.selectedIndex;
        tabTitles[index].click();
    })
}
response710();



