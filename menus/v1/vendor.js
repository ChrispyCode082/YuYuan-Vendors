const menu = [
{
    name:"Plain Hawthorn",
    name_zh:"糖葫芦",
    price:"¥10",
    category:"entrees",
    image:"hawthorn.png"
} , {
    name:"Hawthorn Milk Skin",
    name_zh:"山楂奶皮",
    price:"¥15",
    category:"entrees",
    image:"hawthorn_milk_skin.png"
} , {
    name:"Plain Flat Hawthorn",
    name_zh:"山楂饼",
    price:"¥15",
    category:"entrees",
    image:"hawthorn_milk_skin.png"
} , {
    name:"Flat Hawthorn Milk Skin",
    name_zh:"山楂奶皮饼",
    price:"¥25",
    category:"entrees",
    image:"hawthorn_milk_skin.png"
} , {
    name:"Plain Strawberry",
    name_zh:"草莓",
    price:"¥20",
    category:"desserts",
    image:"strawberry.png"
} , {
    name:"Strawberry Combo",
    name_zh:"草莓拼盘",
    price:"¥20",
    category:"desserts",
    image:"strawberry.png"
} , {
    name:"Blueberry",
    name_zh:"蓝莓",
    price:"¥15",
    category:"desserts",
    image:"blueberry.png"
} , {
    name:"Blueberry Milk Skin",
    name_zh:"蓝莓奶皮",
    price:"¥15",
    category:"desserts",
    image:"blueberry.png"
} , {
    name:"Strawberry Milk Skin",
    name_zh:"草莓奶皮",
    price:"¥35",
    category:"desserts",
    image:"strawberry.png"
} , {
    name:"Strawberry Combo Milk Skin",
    name_zh:"草莓拼盘奶皮",
    price:"¥15",
    category:"desserts",
    image:"strawberry_milk_skin.png"
} , {
    name:"Dry Chewy Strawberry Milk Skin",
    name_zh:"草莓奶皮干",
    price:"¥40",
    category:"desserts",
    image:"strawberry_milk_skin.png"
} , {
    name:"Dry Chewy Yoghurt Milk Skin Combo",
    name_zh:"酸奶奶皮拼盘干",
    price:"¥35",
    category:"desserts",
    image:"yoghurt.png"
} , {
    name:"Small Skewers",
    name_zh:"小串",
    price:"¥7",
    category:"entrees",
    image:"skewers.png"
} , {
    name:"Assorted Box (Pick Any for Whole Box Purchase)",
    name_zh:"什锦盒（整盒任选）",
    price:"¥25/5",
    category:"entrees",
    image:"assorted_box.png"
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

        el.textContent = currentLang==="en" ? el.dataset.en : el.dataset.zh;

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
