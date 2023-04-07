
function bindTabs(tabsTitleSelector,tabsContentSelector,tabsTitleActiveClass,pageLoadActiveTab = 0){
    const tabsTitle = document.querySelectorAll(tabsTitleSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);
    tabsContent.forEach(element => element.classList.add("hidden"));
    for(let i = 0; i < tabsTitle.length; i++){
        let item = tabsTitle[i];
        item.addEventListener("click", ()=> {
            if(item.classList.contains(tabsTitleActiveClass))
                return;
            tabsTitle.forEach(element => element.classList.remove(tabsTitleActiveClass));
            tabsTitle[i].classList.add(tabsTitleActiveClass);

            tabsContent.forEach(element => element.classList.add("hidden"));
            tabsContent[i].classList.remove("hidden");
        })
        tabsTitle[pageLoadActiveTab].classList.add(tabsTitleActiveClass);
        tabsContent[pageLoadActiveTab].classList.remove("hidden");
    }
};

bindTabs
    (
    tabsTitleSelector = ".styles_tabs-title",
    tabsContentSelector =".styles_tabs-content",
    tabsTitleActiveClass = "active-tab"
);

bindTabs
(
    tabsTitleSelector = ".popup-model_body__title",
    tabsContentSelector = ".popup-model_body__item",
    tabsTitleActiveClass = "popup-model_body__title_active"
);
bindTabs(
    tabsTitleSelector = ".pp-main_titles__item",
    tabsContentSelector = ".pp-main_content__item",
    tabsTitleActiveClass = "pp-main_titles__item_active",
    1
);




if(document.querySelector(".styles_tabs-content")){
    let tabTitles = document.querySelectorAll(".styles_tabs-title");
    let tabContens = document.querySelectorAll(".styles_tabs-content");

    document.querySelector(".styles_tabs-btn").addEventListener("click", () => {
        tabContens.forEach(item =>{
            let tabItems = item.querySelectorAll(".styles_tab-item");
            tabItems.forEach(item => item.classList.remove("hidden"));
            document.querySelector(".styles_tabs-btn").classList.add("hidden");
        })
    });

    let styleSliderLine = document.querySelector(".popup-style_slider__line");
    for(let i = 0; i < tabContens[0].querySelectorAll(".styles_tab-img").length; i++){
        styleSliderLine.insertAdjacentHTML('beforeend', `<img class="popup-style__img" src="${tabContens[0].querySelectorAll(".styles_tab-img")[i].src}" alt="kitchen">`);
    }

    for(let i = 0; i < tabTitles.length; i++){
        let tabImages = tabContens[i].querySelectorAll(".styles_tab-img");
        tabTitles[i].addEventListener("click", () =>{
            for(let j = 0; j < tabImages.length; j++){
                document.querySelectorAll(".popup-style__img")[j].src = tabImages[j].src; 
            }
        })
    }

    window.addEventListener("resize", event =>{
        if(event.target.window.innerWidth > 1200){
            tabContens.forEach(content => {
                content.querySelectorAll(".styles_tab-item").forEach(item => item.classList.remove("hidden"));
            })
        }
        if(event.target.window.innerWidth > 750) response1();
        if(event.target.window.innerWidth <= 750) response2();
    })
    
    function response1(){
        if(window.innerWidth < 1200){
            tabContens.forEach(item => {
                let tabItems = item.querySelectorAll(".styles_tab-item");
                tabItems.forEach(item => item.classList.remove("hidden"));
                for(let i = 4; i < tabItems.length; i++){
                    tabItems[i].classList.add("hidden");
                }
            })
            if(document.querySelector(".styles_tabs-btn").classList.contains("hidden"))
                document.querySelector(".styles_tabs-btn").classList.remove("hidden");
        }
    }
    response1();
    
    function response2(){
        if(window.innerWidth <= 750){
            tabContens.forEach(item => {
                let tabItems = item.querySelectorAll(".styles_tab-item");
                tabItems.forEach(item => item.classList.remove("hidden"));
                for(let i = 3; i < tabItems.length; i++){
                    tabItems[i].classList.add("hidden");
                }
            })
            if(document.querySelector(".styles_tabs-btn").classList.contains("hidden"))
                document.querySelector(".styles_tabs-btn").classList.remove("hidden");
        }
    }
    response2();
}



