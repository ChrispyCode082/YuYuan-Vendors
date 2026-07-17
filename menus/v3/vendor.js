const menu = [
{
    name:"Signature Fresh Meat Wonton (Small)",
    price:"¥25",
    category:"entrees",
    image:"fmw.png"
} , {
    name:"Shepherd's Purse and Fresh Meat Wonton (Small)",
    price:"¥25",
    category:"entrees",
    image:"sp&fmw.png"
} , {
    name:"Shrimp and Fresh Meat Wonton (Small)",
    price:"¥25",
    category:"entrees",
    image:"sp&sw.png"
} , {
    name:"Shepherd's Purse and Fresh Meat Wonton (Large)",
    price:"¥28",
    category:"entrees",
    image:"sp&fmw.png"
} , {
    name:"Shepherd's Purse and Shrimp Wonton (Large)",
    price:"¥35",
    category:"entrees",
    image:"sp&sw.png"
} , {
    name:"Mushroom and Fresh Meat Wonton (Large)",
    price:"¥30",
    category:"entrees",
    image:"m&fm.png"
} , {
    name:"Mushroom and Shrimp Wonton (Large)",
    price:"¥35",
    category:"entrees",
    image:"m&fm.png"
} , {
    name:"Braised Beef Noodles in Spicy Sauce",
    price:"¥30",
    category:"desserts",
    image:"bbnss.png"
} , {
    name:"Old Duck and Vermicellli Soup",
    price:"¥28",
    category:"desserts",
    image:"od&vs.png"
} , {
    name:"Wonton Noodles",
    price:"¥25",
    category:"desserts",
    image:"wn.png"
} , {
    name:"Crab Roe Noodles",
    price:"¥68",
    category:"desserts",
    image:"crn.png"
} , {
    name:"Dry Chewy Yoghurt Milk Skin Combo",
    price:"¥35",
    category:"desserts",
    image:"images/mango.jpg"
}
];

function createCard(item){

    return `

    <div class="menu-item">
        <div class="menu-image">
            <img src="${item.image}" alt="${item.name}">
        </div>

        <div>
            <h3>${item.name}</h3>
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

        if(!item.name.toLowerCase().includes(filter.toLowerCase()))
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

renderMenu();