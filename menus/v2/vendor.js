const menu = [
{
    name:"Garlic Oyster",
    price:"¥20",
    category:"entrees",
    image:"go.png"
} , {
    name:"Big Squid",
    price:"¥30",
    category:"entrees",
    image:"bs.png"
} , {
    name:"Phoenix Dance Skewer",
    price:"¥28",
    category:"entrees",
    image: "pds.png"
} , {
    name:"Roasted Fresh Shrimp",
    price:"¥7",
    category:"entrees",
    image:"rfs.png"
} , {
    name:"Chicken mid wings",
    price:"¥15",
    category:"entrees",
    image:"cmr.png"
} , {
    name:"Bullfrog",
    price:"¥25",
    category:"entrees",
    image:"bf.png"
} , {
    name:"Red Willow Lamb",
    price:"¥25",
    category:"entrees",
    image:"rw.png"
} , {
    name:"Garlic chives",
    price:"¥5",
    category:"desserts",
    image:"gc.png"
} , {
    name:"Coriander",
    price:"¥5",
    category:"desserts",
    image:"c.png"
} , {
    name:"Little crispy melon",
    price:"¥5",
    category:"desserts",
    image:"lcm.png"
} , {
    name:"Silvery Pomfret",
    price:"¥28",
    category:"entrees",
    image:"sp.png"
} , {
    name:"Potato Chips",
    price:"¥5",
    category:"desserts",
    image:"pc.png"
} , {
    name:"Grasshopper",
    price:"¥8",
    category:"desserts",
    image:"g.png"
} , {
    name:"Palm Treasures",
    price:"¥6",
    category:"desserts",
    image:"pt.png"
} , {
    name:"Pacific saury",
    price:"¥15",
    category:"entrees",
    image:"ps.png"
} , {
    name:"Roasted Lamb Skewers",
    price:"¥38",
    category:"entrees",
    image:"rl.png"
} , {
    name:"Roasted Pork Skewers",
    price:"¥38",
    category:"entrees",
    image:"rps.png"
} , {
    name:"Flowering sausage",
    price:"¥30",
    category:"entrees",
    image:"fs.png"
} , {
    name:"Roasted Beef Skewers",
    price:"¥30",
    category:"entrees",
    image:"rbs.png"
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