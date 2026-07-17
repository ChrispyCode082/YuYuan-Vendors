const menu = [
{
    name:"Duck Head",
    name_zh:"鸭头",
    price:"¥7",
    category:"entrees",
    image:"dh.jpg"
} , {
    name:"Duck Neck",
    name_zh:"鸭脖",
    price:"¥7",
    category:"entrees",
    image:"dn.png"
} , {
    name:"Duck Leg",
    name_zh:"鸭腿",
    price:"¥9",
    category:"entrees",
    image:"dl.png"
} , {
    name:"Duck Wings",
    name_zh:"鸭翅",
    price:"¥3",
    category:"entrees",
    image:"dw.png"
} , {
    name:"Duck Gizzard",
    name_zh:"鸭胗",
    price:"¥5",
    category:"entrees",
    image:"dg.png"
} , {
    name:"Vegetable Dish",
    name_zh:"素菜",
    price:"¥2",
    category:"desserts",
    image:"vd.png"
} , {
    name:"Meat Skewers",
    name_zh:"肉串",
    price:"¥3",
    category:"desserts",
    image:"ms.png"
} , {
    name:"Chicken Feet",
    name_zh:"鸡爪",
    price:"¥4",
    category:"desserts",
    image:"df.png"
} , {
    name:"Duck Feet",
    name_zh:"鸭掌",
    price:"¥4",
    category:"desserts",
    image:"df.png"
} , {
    name:"Duck Sausage",
    name_zh:"鸭肉香肠",
    price:"¥5",
    category:"desserts",
    image:"ds.png"
} , {
    name:"Duck collarbone",
    name_zh:"鸭锁骨",
    price:"¥4",
    category:"desserts",
    image:"dc.png"
}
];

let currentLang = "en";

function createCard(item){

    const displayName = currentLang==="en" ? item.name : item.name_zh;

    return `

    <div class="menu-item">
        <div class="menu-image">
            <img src="${item.image}" alt="${displayName}">
        </div>

        <div>
            <h3>${displayName}</h3>
        </div>

        <div class="price">${item.price}</div>
    </div>

    `;

}

function renderMenu(filter=""){

    const entree=document.getElementById("entree-list");
    const dessert=document.getElementById("dessert-list");
    const drink=document.getElementById("drink-list");

    entree.innerHTML="";
    dessert.innerHTML="";
    drink.innerHTML="";

    menu.forEach(item=>{

        const itemName = currentLang==="en" ? item.name : item.name_zh;

        if(!itemName.toLowerCase().includes(filter.toLowerCase()))
            return;

        if(item.category==="entrees")
            entree.innerHTML+=createCard(item);

        if(item.category==="desserts")
            dessert.innerHTML+=createCard(item);

        if(item.category==="drinks")
            drink.innerHTML+=createCard(item);

    });

}

document.getElementById("search").addEventListener("input",(e)=>{

    renderMenu(e.target.value);

});

function scrollToSection(id){

    document.getElementById(id).scrollIntoView({

        behavior:"smooth"

    });

}

function applyStaticTranslations(){

    document.querySelectorAll("[data-en]").forEach(el=>{

        el.innerHTML = currentLang==="en" ? el.dataset.en : el.dataset.zh;

    });

    const search=document.getElementById("search");
    search.placeholder = currentLang==="en" ? "Search dishes..." : "搜索菜品...";

    const toggle=document.getElementById("lang-toggle");
    toggle.textContent = currentLang==="en" ? "中文" : "English";

}

document.getElementById("lang-toggle").addEventListener("click",()=>{

    currentLang = currentLang==="en" ? "zh" : "en";

    applyStaticTranslations();
    renderMenu(document.getElementById("search").value);

});

renderMenu();
