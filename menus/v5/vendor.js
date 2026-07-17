const menu = [
{
    name:"Duck Head",
    price:"¥7",
    category:"entrees",
    image:"dh.jpg"
} , {
    name:"Duck Neck",
    price:"¥7",
    category:"entrees",
    image:"dn.png"
} , {
    name:"Duck Leg",
    price:"¥9",
    category:"entrees",
    image:"dl.png"
} , {
    name:"Duck Wings",
    price:"¥3",
    category:"entrees",
    image:"dw.png"
} , {
    name:"Duck Gizzard",
    price:"¥5",
    category:"entrees",
    image:"dg.png"
} , {
    name:"Vegetable Dish",
    price:"¥2",
    category:"desserts",
    image:"vd.png"
} , {
    name:"Meat Skewers",
    price:"¥3",
    category:"desserts",
    image:"ms.png"
} , {
    name:"Chicken Feet",
    price:"¥4",
    category:"desserts",
    image:"df.png"
} , {
    name:"Duck Feet",
    price:"¥4",
    category:"desserts",
    image:"df.png"
} , {
    name:"Duck Sausage",
    price:"¥5",
    category:"desserts",
    image:"ds.png"
} , {
    name:"Duck collarbone",
    price:"¥4",
    category:"desserts",
    image:"dc.png"
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
