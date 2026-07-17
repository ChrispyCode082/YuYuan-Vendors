const menu = [
{
    name:"Chives and Egg Dumplings",
    name_zh:"韭菜鸡蛋饺",
    price:"¥20",
    category:"entrees",
    image:"c&ed.png"
} , {
    name:"Beef Hot & Sour Noodle Soup",
    name_zh:"牛肉酸辣面",
    price:"¥24",
    category:"desserts",
    image:"bh&sns.png"
} , {
    name:"Crab King Soup Dumplings",
    name_zh:"蟹皇灌汤包",
    price:"¥21",
    category:"entrees",
    image:"cksd.png"
} , {
    name:"Shanghai Soup Dumpling",
    name_zh:"上海小笼包",
    price:"¥30",
    category:"entrees",
    image:"ssd.png"
} , {
    name:"Bruised Beef Noodle Soup",
    name_zh:"卤牛肉面",
    price:"¥20",
    category:"desserts",
    image:"bbns.png"
} , {
    name:"Shepherd's Purse & Pork Wontons",
    name_zh:"荠菜猪肉馄饨",
    price:"¥25",
    category:"entrees",
    image:"sp&pw.png"
} , {
    name:"Minced Pork Wontons",
    name_zh:"肉末馄饨",
    price:"¥20",
    category:"entrees",
    image:"mpw.png"
} , {
    name:"Braised Pork Knuckle Rice",
    name_zh:"卤蹄膀饭",
    price:"¥30",
    category:"drinks",
    image:"bpkr.png"
} , {
    name:"Crab Roe Noodles",
    name_zh:"蟹黄面",
    price:"¥66",
    category:"desserts",
    image:"crn.png"
} , {
    name:"Pea Fried Sauce mixed with Noodles",
    name_zh:"豌豆炸酱拌面",
    price:"¥26",
    category:"desserts",
    image:"pfsmwn.png"
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
