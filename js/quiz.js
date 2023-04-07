//SLIDER
function bindSlider(sliderSelector, start){
    let slider = document.querySelector(sliderSelector);

    noUiSlider.create(slider, {
        start: [0, start],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 500
        }
    })
    slider.noUiSlider.disable(0);
}
bindSlider(".quiz_size__slider-1", 280),
bindSlider(".quiz_size__slider-2", 0),
bindSlider(".quiz_size__slider-3", 450)


let sliderArr = document.querySelectorAll(".quiz_size__slider");
let data = document.querySelectorAll(".quiz_size__data");

for(let i = 0; i < sliderArr.length; i++){
    sliderArr[i].noUiSlider.on("update", function(){
        data[i].textContent = Number(sliderArr[i].querySelector(".noUi-handle-upper").getAttribute("aria-valuenow"));
    })
    data[i].textContent = Number(sliderArr[i].querySelector(".noUi-handle-upper").getAttribute("aria-valuenow"));
}
// SLIDER


quizItems = document.querySelectorAll(".quiz__item");
quizItems.forEach(item => item.classList.add("hidden"));

let activeQuiz = 0;

quizItems[activeQuiz].classList.remove("hidden");

let quizBtnsNext = document.querySelectorAll(".quiz__btn-next");
quizBtnsNext.forEach(item => item.addEventListener("click", nextQuiz));

let quizBtnsBack = document.querySelectorAll(".quiz_nav__btn-back");
quizBtnsBack.forEach(item => item.addEventListener("click", backQuiz));

document.querySelector(".quiz_form-layout").addEventListener("submit", event =>{
    event.preventDefault();
    let layoutInput = document.querySelector(".quiz_form-layout").querySelectorAll(".quiz__input");
    let src = document.querySelector("input[name='layout']:checked").value;
    document.querySelector(".quiz_size__img").src = src;
    let sizeSides = document.querySelectorAll(".quiz_size__item");
    sizeSides.forEach(item => item.classList.remove("hidden"));
    switch(src){
        case layoutInput[0].value:
            sizeSides[1].classList.add("hidden");
            sizeSides[2].classList.add("hidden");
            break;
        case layoutInput[1].value:
            sizeSides[2].classList.add("hidden");
            break;
    }
    nextQuiz();
});

document.querySelector(".quiz_furniture__btn").addEventListener("click", event =>{
    event.preventDefault();
    count = document.querySelector(".quiz_furniture").querySelectorAll(".quiz__input:checked").length;
    if(count === 0) alert("Выбери хотя бы один вариант бытовой техники, которая будет установлена на кухне");
    else nextQuiz();
})

document.querySelector(".quiz_budget").addEventListener("submit", event =>{
    event.preventDefault();
    nextQuiz();
})

if(document.querySelector(".quiz_end__form")){
    document.querySelector(".quiz_end__form").addEventListener("submit", event =>{
        nextQuiz();
        document.querySelector(".quiz").querySelectorAll("form").forEach(form => form.reset());
    })
}

function nextQuiz(){
    quizItems[activeQuiz].classList.add("hidden");
    activeQuiz++;
    if(activeQuiz === quizItems.length) activeQuiz = 0;
    quizItems[activeQuiz].classList.remove("hidden");
}

function backQuiz(){
    quizItems[activeQuiz].classList.add("hidden");
    activeQuiz--;
    quizItems[activeQuiz].classList.remove("hidden");
}



