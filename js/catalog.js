const cataloBtn = document.querySelector(".catalog__btn");
const catalogModels = Array.from(document.querySelectorAll(".models-item"));
const filter = document.querySelector(".catalog_filter");
const catalog = document.querySelector(".models-popular");
const catalogCount = document.querySelector(".catalog__info__count");
let visibleModelsCount = 18;


for(let i = 0; i < catalog.children.length; i++){
    catalog.children[i].setAttribute("index", i);
}

function showVisibleModelsCount(){
    if(visibleModelsCount === catalogModels.length)
        catalogCount.textContent = `Отображаются все ${catalog.children.length} результатов`;
    else
        catalogCount.textContent = `Отображаются ${visibleModelsCount} результатов из ${catalog.children.length}`;
}

//Нормально сделать кнопку показать ещё, чтобы он адеекаватно работала с сортировкой по цене:
//При сортировке по ценам скрываются элементы по индексу

window.addEventListener("resize", event =>{
    if(event.target.window.innerWidth > 750) response1();
    if(event.target.window.innerWidth <= 750) response2();
})

function response1(){
    if(window.innerWidth > 750){
        if(catalog.children.length !== visibleModelsCount) visibleModelsCount = 18;
        for(let i = 0; i < catalog.children.length; i++){
            catalog.children[i].classList.add("hidden");
        }
        for(let i = 0; i < visibleModelsCount; i++){
            catalog.children[i].classList.remove("hidden");
        }
        showVisibleModelsCount();
        function btnShowMore(){
            cataloBtn.textContent = "Показать еще";
            cataloBtn.classList.remove("btn-green");

            cataloBtn.addEventListener("click", () => {
                catalogModels.forEach(item => item.classList.remove("hidden"));
                visibleModelsCount = catalog.children.length;
                showVisibleModelsCount();
                btnHide();
            })
        }

        function btnHide(){
            cataloBtn.textContent = "Скрыть";
            cataloBtn.classList.add("btn-green");

            cataloBtn.addEventListener("click", () => {
                for(let i = catalog.children.length - 1; i >= 18 ; i--){
                    catalog.children[i].classList.add("hidden");
                }
                visibleModelsCount = 18;
                showVisibleModelsCount();
                btnShowMore();
            })
        }
        if(visibleModelsCount === catalog.children.length) btnHide();
        else btnShowMore();
    }
}
response1();

function response2(){
    if(window.innerWidth <= 750){
        if(catalog.children.length !== visibleModelsCount) visibleModelsCount = 12;
        for(let i = 0; i < catalog.children.length; i++){
            catalog.children[i].classList.add("hidden");
        }
        for(let i = 0; i < visibleModelsCount; i++){
            catalog.children[i].classList.remove("hidden");
        }
        showVisibleModelsCount();
        function btnShowMore(){
            cataloBtn.textContent = "Показать еще";
            cataloBtn.classList.remove("btn-green");

            cataloBtn.addEventListener("click", () => {
                catalogModels.forEach(item => item.classList.remove("hidden"));
                visibleModelsCount = catalog.children.length;
                showVisibleModelsCount();
                btnHide();
            })
        }

        function btnHide(){
            cataloBtn.textContent = "Скрыть";
            cataloBtn.classList.add("btn-green");

            cataloBtn.addEventListener("click", () => {
                for(let i = catalog.children.length - 1; i >= 12 ; i--){
                    catalog.children[i].classList.add("hidden");
                }
                visibleModelsCount = 12;
                showVisibleModelsCount();
                btnShowMore();
            })
        }
        if(visibleModelsCount === catalog.children.length) btnHide();
        else btnShowMore();
    }
}
response2();

filter.addEventListener("change", () => {
    switch(filter.value){
        case "increase":
            for(let i = 0; i < catalog.children.length; i++){
                for(let j = i + 1; j < catalog.children.length; j++){
                    let firstItemPrice = parseInt(catalog.children[i].querySelector(".models__price-new").textContent.replace(/\D/g, ""), 10);
                    let secondItemPrice = parseInt(catalog.children[j].querySelector(".models__price-new").textContent.replace(/\D/g, ""), 10);
                    if(firstItemPrice >= secondItemPrice){
                        replaceNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
                        insertAfter(replaceNode, catalog.children[i]);
                    }
                    
                }
            }
            filter.id = "catalog_filter_increase";
            break;

        case "decrease":
            for(let i = 0; i < catalog.children.length; i++){
                for(let j = i + 1; j < catalog.children.length; j++){
                    let firstItemPrice = parseInt(catalog.children[i].querySelector(".models__price-new").textContent.replace(/\D/g, ""), 10);
                    let secondItemPrice = parseInt(catalog.children[j].querySelector(".models__price-new").textContent.replace(/\D/g, ""), 10);
                    
                    if(firstItemPrice <= secondItemPrice){
                        replaceNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
                        insertAfter(replaceNode, catalog.children[i]);
                    }
                }
            }
            filter.id = "catalog_filter_decrease";
            break;
        
        default:
            for(let i = 0; i < catalog.children.length; i++){
                for(let j = i + 1; j < catalog.children.length; j++){
                    let firstItemIndex = parseInt(catalog.children[i].getAttribute("index"), 10);
                    let secondItemIndex = parseInt(catalog.children[j].getAttribute("index"), 10);
                    
                    if(firstItemIndex >= secondItemIndex){
                        replaceNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
                        insertAfter(replaceNode, catalog.children[i]);
                    }
                }
            }
            filter.id = "catalog_filter_default";
            break;
    }
    response1();
    response2();
})

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


