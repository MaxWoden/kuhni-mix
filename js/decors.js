const searchBtn =
`<div class="container_content__btn container_content__btn-inner">
    <img src="../img/svg/search-yellow.svg" alt="open" class="container_content__search-img">
</div>`;

//МАТОВЫЕ
const matteSources = [];
for(let i = 1; i <= 67; i++)
    matteSources.push(`../img/decors/декоры мдф/матовые/img (${i}).png`)

const grayContainer = document.querySelector(".container-bg-gray_content");

//МЕТАЛЛИК
const metallicSources = [];
for(let i = 1; i <= 29; i++)
    metallicSources.push( `../img/decors/декоры мдф/металлик/img (${i}).png`)

const yellowContainer = document.querySelector(".container-bg-yellow_content");

//ГЛЯНЕНЦ
const glossSources = [];
for(let i = 1; i <= 23; i++)
    glossSources.push(`../img/decors/декоры мдф/глянец/img (${i}).png`)

const whiteContainer = document.querySelector(".container-bg-white_content");


const ldspTitles = ["Дуб баррик светлый","Аруба венге","Дуб сонома","Дуб баррик темный","Венге Конго","Ноче Мария Луиза","Ольха 40","Слива валлис","Ольха 75","Дуб французкий","Орех донской","Бук невский","Ясень шимо светлый","Дуб гауди","Ноче экко","Бук бавария 109","Бук бавария 55","Бук натуральный","Линум Венге","Ноче Гварнери","Клен танзау","Орех миланский","Орех испанский","Дуб атланта","Вишня оксфорд","Дуб арденский","Яблоня локарно","Ясень шимо темный","Уни металлик","Дуб паллада","Ноче Ногаро темный","Алюминий","Вишня академия","Ноче Ногаро светлый","Венге светлый","Дуб млечный","Махагон","Фисташковый","Серый","Голубой","Салатовый","Бежевый","Красный","Крем","Светло синий","Уни нерро","Белый"]
const ldsp = [];
for(let i = 1; i <= 47; i++){
    ldsp.push({
        src: `../img/decors/декоры лдсп/img (${i}).png`,
        title: ldspTitles.sort()[i - 1]
    })
}

const arpaTitles = ["ARPA 4512 ALEVE","ARPA 4514 ALEVE","ARPA 4519 ALEVE","ARPA 4521 ALEVE","ARPA 4526 ALEVE","ARPA 4536 ALEVE","ARPA 4538 ALEVE","ARPA 4539 ALEVE","ARPA 4571 ALEVE","ARPA 4572 ALEVE","ARPA 4573 ALEVE","ARPA 4574 ALEVE","ARPA 0001 ERRE","ARPA 0200 ERRE","ARPA 0211 ERRE","ARPA 0225 ERRE","ARPA 0254 ERRE","ARPA 0509 ERRE","ARPA 0553 ERRE","ARPA 0561 ERRE","ARPA 0571 ERRE","ARPA 0593 ERRE","ARPA 0595 ERRE","ARPA 0605 ERRE","ARPA 0619 ERRE","ARPA 0637 ERRE","ARPA 0648 ERRE","ARPA 0660 ERRE","ARPA 0682 ERRE","ARPA 0698 ERRE","ARPA 0699 ERRE","ARPA 0700 ERRE","ARPA 0709 ERRE","ARPA 1886 ERRE","ARPA 1930 ERRE","ARPA 1934 ERRE","ARPA 2206 ERRE","ARPA 3194 ERRE","ARPA 3195 ERRE","ARPA 3236 ERRE","ARPA 3237 ERRE","ARPA 3241 ERRE","ARPA 4071 ERRE","ARPA 4123 ERRE","ARPA 4177 ERRE","ARPA 4367 ERRE","ARPA 4384 ERRE","ARPA 4412 ERRE"]
const arpa = [];
for(let i = 1; i <= 48; i++){
    arpa.push({
        src: `../img/decors/пластик arpa/img (${i}).png`,
        title: arpaTitles.sort()[i - 1]
    })
}

const marshallplastTitles = ["60G","90SPG","200G","Дуб баррик темный","400SPG","900APG","900G","1115BG","1725AG","1763AG","1759AG","1757AG","1789AG","1799AG","2706G","2709G","2712G","2715G","2718G","2745AG","2745BG","2745CG","2745DG","2751AG","2755AG","2757AG","2759AG","2760AG","2761G","200FT","200POG","200ZT","400ELM","400FT","400POG","400ZT","900POG","1114AG","1169ACT","1176AG","1176BG","1179AG","1179BG","1190BG","1196BG","1554ANT","1555ANT",];
const marshallplast = [];
for(let i = 1; i <= 47; i++){
    marshallplast.push({
        src: `../img/decors/пластик marshallplast/img (${i}).png`,
        title: marshallplastTitles.sort()[i - 1]
    })
}

const countertopTitles = ["Аламбра 4026 гл.","Аламбра 4026","Аламбра тёмная 4035","Алюминиевая полоса 5014 гл.","Алюминиевая полоса 5014","Андромеда белая 7001","Андромеда черная 7002","Антарес 4040","Арвика 4075","Ардезия 4052","Аттика 4023","Балканский сланец рыжий 2332","Балканский сланец черный 2333","Бамбук 2042","Белый 1011 гл.","Белый 1111 Q","Белый 1110 S","Бетао 3045","Бисер светлый 4033 гл.","Бисер светлый 4033","Бук 2019","Бук баденский 3254","Венге 2017 гл.","Венге 2017","Винтаж 2326","Галактика 4018","Галия 2946","Гранит Сардинский светлый 3022 гл.","Гранит Сардинский светлый 3022 ","Гренобль 4042","Древесный брус 2044","Дуб выбеленный 2022","Дуб Карпентер 7120","Дуб Соуберисветлый 7141","Дуб Соуберисерый 7144","Дуб Соубери темный 7142","Итальянская мозаика 4051","Каза Стрип 2016","Калакатта 4030 гл.","Калакатта 4030 ","Камешки 4025","Кантри 2047","Кастилло 4045 гл.","Кастилло 4045 ","Кастилло тёмный 4046","Корень вяза 2021 гл.","Корень вяза 2021","Кристалл бархатный 7043",]
const countertop = [];
for(let i = 1; i <= 48; i++){
    countertop.push({
        src: `../img/decors/декоры столешниц/img (${i}).png`,
        title: countertopTitles.sort()[i - 1]
    })
}

const sourcesArray = {
    1: ldsp, 
    3: arpa,
    4: marshallplast,
    5: countertop
}

const PopupDecors = new popup(".popup-decors");


const tabTitles = document.querySelectorAll(".main_titles__item");
const tabItems = document.querySelectorAll(".main_content__item");


const slider = document.querySelector(".popup-style_slider");
const sliderLine = document.querySelector(".popup-style_slider__line");

let sliderCount = 0;
let sliderHeight = document.querySelector(".popup-style_slider__item").offsetHeight;
slider.style.height = sliderHeight + "px";

window.addEventListener("resize", () =>{
    if(document.querySelector(".popup-style_slider__item")){
        sliderHeight = document.querySelector(".popup-style_slider__item").offsetHeight;
        slider.style.height = sliderHeight + "px";
        sliderLine.style.height = sliderHeight + "px";
        rollSlider();
    }
})

function rollSlider(){
    sliderLine.style.transform = `translateY(${-sliderCount * sliderHeight}px)`;
}

const sliderBtnPrev = document.querySelector(".popup-style_slider-wrapper_btn_prev");
sliderBtnPrev.addEventListener("click", () =>{
    sliderCount--;
    if(sliderCount < 0 ) sliderCount = sliderLine.children.length - 1;
    rollSlider();
});

const sliderBtnNext = document.querySelector(".popup-style_slider-wrapper_btn_next");
sliderBtnNext.addEventListener("click", () =>{
    sliderCount++;
    if(sliderCount > sliderLine.children.length - 1) sliderCount = 0;
    rollSlider();
});




for(let i = 0; i < tabTitles.length; i++){
    tabTitles[i].addEventListener("click", () =>{
        if(tabTitles[i].classList.contains("main_titles__item_active")) return;

        tabItems.forEach(item => item.classList.add("hidden"));
        tabItems[i].classList.remove("hidden");

        tabTitles.forEach(title => title.classList.remove("main_titles__item_active"));
        tabTitles[i].classList.add("main_titles__item_active");

        document.querySelectorAll(".tabs__item").forEach(item => item.classList.remove("tabs__item_active"));

        if(i === 0){
            document.querySelector(".container-bg-yellow").classList.remove("hidden");
            document.querySelector(".container-bg-white").classList.remove("hidden");
            document.querySelector(".container-bg-gray__heading").textContent = "Все";
            tabItems0();
            return;
        }

        if(i === 2){
            document.querySelector(".container-bg-gray").classList.add("hidden");
            document.querySelector(".container-bg-yellow").classList.add("hidden");
            document.querySelector(".container-bg-white").classList.add("hidden");
            return;
        }

        document.querySelector(".container-bg-yellow").classList.add("hidden");
        document.querySelector(".container-bg-white").classList.add("hidden");
        document.querySelector(".container-bg-gray").classList.remove("hidden");

        const tabs = tabItems[i].querySelectorAll(".tabs__item");
        const tabsSelect = tabItems[i].querySelector(".tabs-select");

        let array = sourcesArray[i];

        document.querySelector(".popup-style__close").classList.add("popup-style__close_tall");

        for(let j = 0; j < tabs.length; j++){
            tabs[j].addEventListener("click", () =>{
                if(tabs[j].classList.contains("tabs__item_active")) return;
                grayContainer.innerHTML = "";

                tabs.forEach(tab => tab.classList.remove("tabs__item_active"));
                tabs[j].classList.add("tabs__item_active");

                tabsSelect.querySelectorAll("option")[j].selected = "selected";

                document.querySelector(".container-bg-gray__heading").textContent = tabs[j].textContent;

                if(j === 0){
                    for(let k = 0; k < array.length; k++){
                        grayContainer.insertAdjacentHTML("beforeend", 
                        `<li class="container_content__item">
                            <img class="container_content__img container_content__img_tall" src="${array[k].src}" alt="МАТОВОЕ">
                            <p class="container_content__title">${array[k].title}</p>
                            ${searchBtn} 
                        </li>`)
                    }
                }
                else{
                    cf = Math.ceil(array.length / (tabs.length - 1));

                    for(let k = (j - 1) * cf; k < j * cf; k++){
                        if(!array[k]) break;

                        grayContainer.insertAdjacentHTML("beforeend", 
                        `<li class="container_content__item">
                            <img class="container_content__img container_content__img_tall" src="${array[k].src}" alt="МАТОВОЕ">
                            <p class="container_content__title">${array[k].title}</p>
                            ${searchBtn} 
                        </li>`)
                    }
                }
                
                sliderLine.innerHTML = "";
                
                grayContainer.querySelectorAll(".container_content__item").forEach(item => {
                    sliderLine.insertAdjacentHTML("beforeend", 
                    `<div class="popup-style_slider__item">
                        <h2 class="popup-style_slider__title">${item.querySelector(".container_content__title").textContent}</h2>
                        <img class="slider_line__img slider_line__img_tall" src="${item.querySelector(".container_content__img").src}">
                    </div>`
                )});

                sliderHeight = document.querySelector(".popup-style_slider__item").offsetHeight;
                slider.style.height = sliderHeight + "px";

                const grayContainerBtns = grayContainer.querySelectorAll(".container_content__btn");
                // console.log(grayContainerBtns, grayContainerBtns.length)
                for(let i = 0; i < grayContainerBtns.length; i++){
                    grayContainerBtns[i].addEventListener("click", () =>{
                        document.querySelectorAll(".container-bg-gray_content__item").forEach(item => {
                            sliderLine.insertAdjacentHTML("beforeend", 
                            `<div class="popup-style_slider__item">
                                <h2 class="popup-style_slider__title">${item.querySelector(".container_content__title").textContent}</h2>
                                <img class="slider_line__img slider_line__img_tall" src="${item.querySelector(".container_content__img").src}">
                            </div>`
                        )});
    
                        sliderHeight = document.querySelector(".popup-style_slider__item").offsetHeight;
                        slider.style.height = sliderHeight + "px";
    
                        sliderCount = i;
                        rollSlider();
                        PopupDecors.open();
                    })
                }

            })
        }
        window.addEventListener("resize", event =>{
            if(event.target.window.innerWidth <= 600) response();
        })
        
        function response(){
            if(window.innerWidth > 600) return;
            tabsSelect.addEventListener("change", () =>{
                let index = tabsSelect.selectedIndex;
                tabs[index].click();
            })
        }
        response();

        tabs[0].click();
    })
}
tabTitles[0].click();



function tabItems0(){
    const tabs = tabItems[0].querySelectorAll(".tabs__item");
    const tabsSelect = tabItems[0].querySelector(".tabs-select");

    document.querySelector(".popup-style__close").classList.remove("popup-style__close_tall");
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", () =>{
            if(tabs[i].classList.contains("tabs__item_active")) return;
            tabs.forEach(tab => tab.classList.remove("tabs__item_active"));
            tabs[i].classList.add("tabs__item_active");

            tabsSelect.querySelectorAll("option")[i].selected = "selected";

            grayContainer.innerHTML = yellowContainer.innerHTML = whiteContainer.innerHTML = "";

            if(i === 0){
                for(let j = 0; j < matteSources.length; j++){
                    grayContainer.insertAdjacentHTML("beforeend", 
                    `<li class="container_content__item container-bg-gray_content__item">
                        <img class="container_content__img" src="${matteSources[j]}" alt="МАТОВОЕ">
                        <div class="container_content__btn">
                            <img src="../img/svg/search-yellow.svg" alt="open" class="container_content__search-img">
                        </div>
                    </li>`)
                }
                for(let j = 0; j < metallicSources.length; j++){
                    yellowContainer.insertAdjacentHTML("beforeend", 
                    `<li class="container_content__item container-bg-yellow_content__item">
                        <img class="container_content__img" src="${metallicSources[j]}" alt="МЕТАЛЛИК">  
                        <div class="container_content__btn">
                            <img src="../img/svg/search-yellow.svg" alt="open" class="container_content__search-img">
                        </div>
                    </li>`)
                }
                for(let j = 0; j < glossSources.length; j++){
                    whiteContainer.insertAdjacentHTML("beforeend", 
                    `<li class="container_content__item container-bg-white_content__item">
                        <img class="container_content__img" src="${glossSources[j]}" alt="ГЛЯНЕЦ">  
                        <div class="container_content__btn">
                            <img src="../img/svg/search-yellow.svg" alt="open" class="container_content__search-img">
                        </div>
                    </li>`)
                }
            }
            else{
                const matteCf = Math.ceil(matteSources.length / (tabs.length - 1));
                const metallicCf = Math.ceil(metallicSources.length / (tabs.length - 1));
                const glossCf = Math.ceil(glossSources.length / (tabs.length - 1));

                for(let j = (i - 1) * matteCf; j < i * matteCf; j++){
                    if(!matteSources[j]) break;
                    grayContainer.insertAdjacentHTML("beforeend", 
                    `<li class="container_content__item container-bg-gray_content__item">
                        <img class="container_content__img" src="${matteSources[j]}" alt="МАТОВОЕ">
                        <div class="container_content__btn">
                            <img src="../img/svg/search-yellow.svg" alt="open" class="container_content__search-img">
                        </div>
                    </li>`)
                }
                for(let j = (i - 1) * metallicCf; j < i * metallicCf; j++){
                    if(!metallicSources[j]) break;
                    yellowContainer.insertAdjacentHTML("beforeend", 
                    `<li class="container_content__item container-bg-yellow_content__item">
                        <img class="container_content__img" src="${metallicSources[j]}" alt="МЕТАЛЛИК">
                        <div class="container_content__btn">
                            <img src="../img/svg/search-yellow.svg" alt="open" class="container_content__search-img">
                        </div>
                    </li>`)
                }
                for(let j = (i - 1) * glossCf; j < i * glossCf; j++){
                    if(!glossSources[j]) break;
                    whiteContainer.insertAdjacentHTML("beforeend", 
                    `<li class="container_content__item container-bg-white_content__item">
                        <img class="container_content__img" src="${glossSources[j]}" alt="МЕТАЛЛИК">
                        <div class="container_content__btn">
                            <img src="../img/svg/search-yellow.svg" alt="open" class="container_content__search-img">
                        </div>
                    </li>`)
                }
            }

            sliderLine.innerHTML = "";

            const grayContainerBtns = grayContainer.querySelectorAll(".container_content__btn");
            for(let i = 0; i < grayContainerBtns.length; i++){
                grayContainerBtns[i].addEventListener("click", () =>{
                    document.querySelectorAll(".container-bg-gray_content__item").forEach(item => {
                        sliderLine.insertAdjacentHTML("beforeend", 
                        `<div class="popup-style_slider__item popup-style_slider__item_wide">
                            <img class="slider_line__img slider_line__img_wide" src="${item.querySelector(".container_content__img").src}">
                        </div>`
                    )});

                    sliderHeight = document.querySelector(".popup-style_slider__item").offsetHeight;
                    slider.style.height = sliderHeight + "px";

                    sliderCount = i;
                    rollSlider();
                    PopupDecors.open();
                })
            }

            const yellowContainerBtns = yellowContainer.querySelectorAll(".container_content__btn");
            for(let i = 0; i < yellowContainerBtns.length; i++){
                yellowContainerBtns[i].addEventListener("click", () =>{
                    document.querySelectorAll(".container-bg-yellow_content__item").forEach(item => {
                        sliderLine.insertAdjacentHTML("beforeend", 
                        `<div class="popup-style_slider__item popup-style_slider__item_wide">
                            <img class="slider_line__img slider_line__img_wide" src="${item.querySelector(".container_content__img").src}">
                        </div>`
                    )});

                    sliderHeight = document.querySelector(".popup-style_slider__item").offsetHeight;
                    slider.style.height = sliderHeight + "px";

                    sliderCount = i;
                    rollSlider();
                    PopupDecors.open();
                })
            }

            const whiteContainerBtns = whiteContainer.querySelectorAll(".container_content__btn");
            for(let i = 0; i < whiteContainerBtns.length; i++){
                whiteContainerBtns[i].addEventListener("click", () =>{
                    document.querySelectorAll(".container-bg-white_content__item").forEach(item => {
                        sliderLine.insertAdjacentHTML("beforeend", 
                        `<div class="popup-style_slider__item popup-style_slider__item_wide">
                            <img class="slider_line__img slider_line__img_wide" src="${item.querySelector(".container_content__img").src}">
                        </div>`
                    )});

                    sliderHeight = document.querySelector(".popup-style_slider__item").offsetHeight;
                    slider.style.height = sliderHeight + "px";

                    sliderCount = i;
                    rollSlider();
                    PopupDecors.open();
                })
            }
        });
    }

    window.addEventListener("resize", event =>{
        if(event.target.window.innerWidth <= 600) response();
    })
    function response(){
        if(window.innerWidth > 600) return;
        tabsSelect.addEventListener("change", () =>{
            let index = tabsSelect.selectedIndex;
            tabs[index].click();
        })
    }
    response();

    tabs[0].click();
}


//ACCORDION(TAB-3)
const accordionTitles = document.querySelectorAll(".accordion_item__title");
const accordionItems = document.querySelectorAll(".accordion_item__content");
accordionItems.forEach(item => item.classList.add("hidden"));
for(let i = 0; i < accordionTitles.length; i++){
    accordionTitles[i].addEventListener("click", () =>{
        accordionTitles[i].classList.toggle("accordion_item__title_active");
        accordionItems[i].classList.toggle("hidden");
    })
}
accordionTitles[0].click();
