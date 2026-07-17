const menu = [
{
    name:"Garlic Oyster",
    name_zh:"蒜蓉生蚝",
    price:"¥20",
    category:"entrees",
    image:"go.png"
} , {
    name:"Big Squid",
    name_zh:"大鱿鱼",
    price:"¥30",
    category:"entrees",
    image:"bs.png"
} , {
    name:"Phoenix Dance Skewer",
    name_zh:"凤舞烤串",
    price:"¥28",
    category:"entrees",
    image: "pds.png"
} , {
    name:"Roasted Fresh Shrimp",
    name_zh:"烤鲜虾",
    price:"¥7",
    category:"entrees",
    image:"rfs.png"
} , {
    name:"Chicken mid wings",
    name_zh:"鸡中翅",
    price:"¥15",
    category:"entrees",
    image:"cmr.png"
} , {
    name:"Bullfrog",
    name_zh:"牛蛙",
    price:"¥25",
    category:"entrees",
    image:"bf.png"
} , {
    name:"Red Willow Lamb",
    name_zh:"红柳烤羊肉",
    price:"¥25",
    category:"entrees",
    image:"rw.png"
} , {
    name:"Garlic chives",
    name_zh:"蒜苔",
    price:"¥5",
    category:"desserts",
    image:"gc.png"
} , {
    name:"Coriander",
    name_zh:"香菜",
    price:"¥5",
    category:"desserts",
    image:"c.png"
} , {
    name:"Little crispy melon",
    name_zh:"脆皮小瓜",
    price:"¥5",
    category:"desserts",
    image:"lcm.png"
} , {
    name:"Silvery Pomfret",
    name_zh:"银鲳鱼",
    price:"¥28",
    category:"entrees",
    image:"sp.png"
} , {
    name:"Potato Chips",
    name_zh:"烤土豆片",
    price:"¥5",
    category:"desserts",
    image:"pc.png"
} , {
    name:"Grasshopper",
    name_zh:"炸蚂蚱",
    price:"¥8",
    category:"desserts",
    image:"g.png"
} , {
    name:"Palm Treasures",
    name_zh:"掌中宝",
    price:"¥6",
    category:"desserts",
    image:"pt.png"
} , {
    name:"Pacific saury",
    name_zh:"秋刀鱼",
    price:"¥15",
    category:"entrees",
    image:"ps.png"
} , {
    name:"Roasted Lamb Skewers",
    name_zh:"烤羊肉串",
    price:"¥38",
    category:"entrees",
    image:"rl.png"
} , {
    name:"Roasted Pork Skewers",
    name_zh:"烤猪肉串",
    price:"¥38",
    category:"entrees",
    image:"rps.png"
} , {
    name:"Flowering sausage",
    name_zh:"花肠",
    price:"¥30",
    category:"entrees",
    image:"fs.png"
} , {
    name:"Roasted Beef Skewers",
    name_zh:"烤牛肉串",
    price:"¥30",
    category:"entrees",
    image:"rbs.png"
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
