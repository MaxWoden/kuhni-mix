function bindTabs(tabsTitleSelector,tabsContentSelector,tabsTitleActiveClass,pageLoadActiveTab = 0){
    const tabsTitles = document.querySelectorAll(tabsTitleSelector);
    const tabsContents = document.querySelectorAll(tabsContentSelector);
    tabsContents.forEach(element => element.classList.add("hidden"));
    for(let i = 0; i < tabsTitles.length; i++){
        let item = tabsTitles[i];
        item.addEventListener("click", () =>{
            if(item.classList.contains(tabsTitleActiveClass)) return;
            tabsTitles.forEach(element => element.classList.remove(tabsTitleActiveClass));
            tabsTitles[i].classList.add(tabsTitleActiveClass);

            tabsContents.forEach(element => element.classList.add("hidden"));
            tabsContents[i].classList.remove("hidden");
        })
        tabsTitles[pageLoadActiveTab].click();
    }
};

bindTabs(
    tabsTitleSelector = ".styles_tabs-title",
    tabsContentSelector =".styles_tabs-content",
    tabsTitleActiveClass = "active-tab"
);
bindTabs(
    tabsTitleSelector = ".popup-model_body__title",
    tabsContentSelector = ".popup-model_body__item",
    tabsTitleActiveClass = "popup-model_body__title_active"
);
bindTabs(
    tabsTitleSelector = ".pp-main_titles__item",
    tabsContentSelector = ".pp-main_content__item",
    tabsTitleActiveClass = "pp-main_titles__item_active"
);


if(document.querySelector(".styles_tabs-content")){
    let tabTitles = document.querySelectorAll(".styles_tabs-title");
    let tabContents = document.querySelectorAll(".styles_tabs-content");

    document.querySelector(".styles_tabs-btn").addEventListener("click", () => {
        tabContents.forEach(item =>{
            let tabItems = item.querySelectorAll(".styles_tab-item");
            tabItems.forEach(item => item.classList.remove("hidden"));
            document.querySelector(".styles_tabs-btn").classList.add("hidden");
        })
    });

    let styleSliderLine = document.querySelector(".popup-style_slider__line");
    for(let i = 0; i < tabContents[0].querySelectorAll(".styles_tab-img").length; i++){
        styleSliderLine.insertAdjacentHTML('beforeend', `<img class="popup-style__img" src="${tabContents[0].querySelectorAll(".styles_tab-img")[i].src}" alt="kitchen">`);
    }

    for(let i = 0; i < tabTitles.length; i++){
        let tabImages = tabContents[i].querySelectorAll(".styles_tab-img");
        tabTitles[i].addEventListener("click", () =>{
            for(let j = 0; j < tabImages.length; j++){
                document.querySelectorAll(".popup-style__img")[j].src = tabImages[j].src; 
            }
        })
    }

    window.addEventListener("resize", event =>{
        if(event.target.window.innerWidth > 1200){
            tabContents.forEach(content => {
                content.querySelectorAll(".styles_tab-item").forEach(item => item.classList.remove("hidden"));
            })
        }
        if(event.target.window.innerWidth > 750) response1();
        if(event.target.window.innerWidth <= 750) response2();
    })
    
    function response1(){
        if(window.innerWidth < 1200){
            tabContents.forEach(item => {
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
            tabContents.forEach(item => {
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
