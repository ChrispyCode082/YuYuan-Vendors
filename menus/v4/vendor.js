const menu = [
{
    name:"Chives and Egg Dumplings",
    price:"¥20",
    category:"entrees",
    image:"c&ed.png"
} , {
    name:"Beef Hot & Sour Noodle Soup",
    price:"¥24",
    category:"desserts",
    image:"bh&sns.png"
} , {
    name:"Crab King Soup Dumplings",
    price:"¥21",
    category:"entrees",
    image:"cksd.png"
} , {
    name:"Shanghai Soup Dumpling",
    price:"¥30",
    category:"entrees",
    image:"ssd.png"
} , {
    name:"Bruised Beef Noodle Soup",
    price:"¥20",
    category:"desserts",
    image:"bbns.png"
} , {
    name:"Shepherd's Purse & Pork Wontons",
    price:"¥25",
    category:"entrees",
    image:"sp&pw.png"
} , {
    name:"Minced Pork Wontons",
    price:"¥20",
    category:"entrees",
    image:"mpw.png"
} , {
    name:"Braised Pork Knuckle Rice",
    price:"¥30",
    category:"drinks",
    image:"bpkr.png"
} , {
    name:"Crab Roe Noodles",
    price:"¥66",
    category:"desserts",
    image:"crn.png"
} , {
    name:"Pea Fried Sauce mixed with Noodles",
    price:"¥26",
    category:"desserts",
    image:"pfsmwn.png"
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
