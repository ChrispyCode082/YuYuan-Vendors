const menu = [
{
    name:"Plain Hawthorn",
    price:"¥10",
    category:"entrees",
    image:"hawthorn.png"
} , {
    name:"Hawthorn Milk Skin",
    price:"¥15",
    category:"entrees",
    image:"hawthorn_milk_skin.png"
} , {
    name:"Plain Flat Hawthorn",
    price:"¥15",
    category:"entrees",
    image:"hawthorn_milk_skin.png"
} , {
    name:"Flat Hawthorn Milk Skin",
    price:"¥25",
    category:"entrees",
    image:"hawthorn_milk_skin.png"
} , {
    name:"Plain Strawberry",
    price:"¥20",
    category:"desserts",
    image:"strawberry.png"
} , {
    name:"Strawberry Combo",
    price:"¥20",
    category:"desserts",
    image:"strawberry.png"
} , {
    name:"Blueberry",
    price:"¥15",
    category:"desserts",
    image:"blueberry.png"
} , {
    name:"Blueberry Milk Skin",
    price:"¥15",
    category:"desserts",
    image:"blueberry.png"
} , {
    name:"Strawberry Milk Skin",
    price:"¥35",
    category:"desserts",
    image:"strawberry.png"
} , {
    name:"Strawberry Combo Milk Skin",
    price:"¥15",
    category:"desserts",
    image:"strawberry_milk_skin.png"
} , {
    name:"Dry Chewy Strawberry Milk Skin",
    price:"¥40",
    category:"desserts",
    image:"strawberry_milk_skin.png"
} , {
    name:"Dry Chewy Yoghurt Milk Skin Combo",
    price:"¥35",
    category:"desserts",
    image:"yoghurt.png"
} , {
    name:"Small Skewers",
    price:"¥7",
    category:"entrees",
    image:"skewers.png"
} , {
    name:"Assorted Box (Pick Any for Whole Box Purchase)",
    price:"¥25/5",
    category:"entrees",
    image:"assorted_box.png"
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