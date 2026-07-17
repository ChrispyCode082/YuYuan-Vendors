const menu = [
{
    name:"Signature Fresh Meat Wonton (Small)",
    name_zh:"招牌鲜肉馄饨（小）",
    price:"¥25",
    category:"entrees",
    image:"fmw.png"
} , {
    name:"Shepherd's Purse and Fresh Meat Wonton (Small)",
    name_zh:"荠菜鲜肉馄饨（小）",
    price:"¥25",
    category:"entrees",
    image:"sp&fmw.png"
} , {
    name:"Shrimp and Fresh Meat Wonton (Small)",
    name_zh:"虾仁鲜肉馄饨（小）",
    price:"¥25",
    category:"entrees",
    image:"sp&sw.png"
} , {
    name:"Shepherd's Purse and Fresh Meat Wonton (Large)",
    name_zh:"荠菜鲜肉馄饨（大）",
    price:"¥28",
    category:"entrees",
    image:"sp&fmw.png"
} , {
    name:"Shepherd's Purse and Shrimp Wonton (Large)",
    name_zh:"荠菜虾仁馄饨（大）",
    price:"¥35",
    category:"entrees",
    image:"sp&sw.png"
} , {
    name:"Mushroom and Fresh Meat Wonton (Large)",
    name_zh:"香菇鲜肉馄饨（大）",
    price:"¥30",
    category:"entrees",
    image:"m&fm.png"
} , {
    name:"Mushroom and Shrimp Wonton (Large)",
    name_zh:"香菇虾仁馄饨（大）",
    price:"¥35",
    category:"entrees",
    image:"m&fm.png"
} , {
    name:"Braised Beef Noodles in Spicy Sauce",
    name_zh:"麻辣红烧牛肉面",
    price:"¥30",
    category:"desserts",
    image:"bbnss.png"
} , {
    name:"Old Duck and Vermicellli Soup",
    name_zh:"老鸭粉丝汤",
    price:"¥28",
    category:"desserts",
    image:"od&vs.png"
} , {
    name:"Wonton Noodles",
    name_zh:"馄饨面",
    price:"¥25",
    category:"desserts",
    image:"wn.png"
} , {
    name:"Crab Roe Noodles",
    name_zh:"蟹黄面",
    price:"¥68",
    category:"desserts",
    image:"crn.png"
} , {
    name:"Spare Rib Noodles / Rice Noodles",
    name_zh:"排骨面/排骨米粉",
    price:"¥32",
    category:"desserts",
    image:"srn.png"
} , {
    name:"Spicy Chicken Giblet Rice/Noodles",
    name_zh:"麻辣鸡杂饭/面",
    price:"¥25",
    category:"drinks",
    image:"scgr.png"
} , {
    name:"Stir Fried Pork Rice/Noodles",
    name_zh:"炒肉饭/面",
    price:"¥26",
    category:"drinks",
    image:"sfpr.png"
} , {
    name:"Pork Chop Rice/Noodles",
    name_zh:"猪排饭/面",
    price:"¥26",
    category:"drinks",
    image:"pcr.png"
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
