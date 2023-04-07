class popup{
    constructor(popupSelector){
        if(document.querySelector(popupSelector)){
            this.popup = document.querySelector(popupSelector);
            this.popupBody = this.popup.querySelector(".popup_body");
            this.body = document.body;
            this.widthScroll = window.innerWidth - this.popup.offsetWidth + "px";
            this.CloseBtn = this.popup.querySelector(".popup__close");
        }
    }

    open(){
        this.popup.classList.add("popup_active");
        this.popupBody.classList.add("popup_body_active");
        this.body.style.overflow = "hidden";
        this.body.style.paddingRight = this.widthScroll;
    }
    
    close(){
        this.popup.classList.remove("popup_active");
        this.popupBody.classList.remove("popup_body_active");
        setTimeout(() => {
            this.body.style.overflow = "visible";
            this.body.style.paddingRight = "0px";
        }, 200);
    }
}

const popupSuccess = new popup(".popup-success");


const popupCall = new popup(".popup-call");
document.querySelectorAll(".call-btn").forEach(btn => btn.addEventListener("click", () => popupCall.open()));


const popupModel = new popup(".popup-model");
const models = document.querySelectorAll(".models-item");
for(let item of models){
    item.addEventListener("click", () => {
        popupModel.popup.querySelector(".popup-model_body__mainimg").src =
        popupModel.popup.querySelector(".popup-model_body__img").src =
        popupModel.popup.querySelector(".popup-model_product__img").src =
        item.querySelector(".models__img").src

        popupModel.popup.querySelector(".popup-model_body__price-old").textContent = 
        popupModel.popup.querySelector(".popup-model_product__price-old").textContent = 
        item.querySelector(".models__price-old").textContent

        popupModel.popup.querySelector(".popup-model_body__price-new").textContent = 
        popupModel.popup.querySelector(".popup-model_product__price-new").textContent = 
        item.querySelector(".models__price-new").textContent

        popupModel.popup.querySelector(".popup-model_body__name").textContent = 
        popupModel.popup.querySelector(".popup-model_product__name").textContent = 
        item.querySelector(".models__name").textContent;

        popupModel.open();
    })
}

if(document.querySelector(".popup-model")){
    document.querySelectorAll(".popup-model__img").forEach(img => img.addEventListener("click", () => {
        popupModel.popup.querySelector(".popup-model_body__mainimg").src = img.src;
    }));
    
    document.querySelector(".popup-model_body__bth").addEventListener("click", () =>{
        document.querySelector(".popup-model_body").style.display = "none";
        document.querySelector(".popup-model_application").style.display = "block";
    });
    
    popupModel.popup.querySelectorAll(".popup__close").forEach(btn => btn.addEventListener("click", () =>{
        popupModel.close();
        document.querySelector(".popup-model_body").style.display = "flex";
        document.querySelector(".popup-model_application").style.display = "none";
    }));

    document.querySelector(".popup-model__form").addEventListener("submit", () =>{
        document.querySelector(".popup-model_body").style.display = "flex";
        document.querySelector(".popup-model_application").style.display = "none";
    });
}


const popupMaterial = new popup(".popup-material");
const materialCardsBtns = document.querySelectorAll(".materials_cards__btn");
for(let i = 0; i < materialCardsBtns.length; i++){
    materialCardsBtns[i].addEventListener("click", () =>{
        document.querySelector(".popup-material_product__img").src = document.querySelectorAll(".materials_cards__img")[i].src;
        document.querySelector(".popup-material_product__title").textContent = `КУХНИ ИЗ ${document.querySelectorAll(".materials_cards__title")[i].textContent}`;
        if(i === 2){
            document.querySelector(".popup-material_product__title").textContent = "КУХНИ ИЗ ЭМАЛИ";
        }
        if(i > 2){
            document.querySelector(".popup-material_product__title").textContent = `КУХНИ C ФУРНИТОЙ 
            ${document.querySelectorAll(".materials_cards__title")[i].textContent.split(" ")[1]}`;
        }

        popupMaterial.open();
    })
}


const popupStyle = new popup(".popup-style");
//ВЫЗОВЫ В SLIDER.JS
//СМЕНА КАРТИНКИ В TABS.JS

let popupArr = [popupSuccess, popupCall, popupModel, popupMaterial, popupStyle];
popupArr.forEach(item => {
    if(item.CloseBtn) item.CloseBtn.addEventListener("click", () => { item.close()})
});


function bindForm(formSelector, popup = null){
    if(document.querySelector(formSelector)){
        document.querySelector(formSelector).addEventListener("submit", event =>{
            event.preventDefault();
            if(popup) popup.close();
            setTimeout(() => {
                popupSuccess.open();
            }, 300);
            document.querySelector(formSelector).reset();
        })
    }
}

bindForm(".styles_contact-form");
bindForm(".consult-form");
bindForm(".popup-call_body_form", popupCall);
bindForm(".popup-model__form", popupModel);
bindForm(".popup-material_body_form", popupMaterial);
bindForm(".quiz_end__form");
bindForm(".popup-style_form", popupStyle);



















