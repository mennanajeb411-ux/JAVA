let links= document.querySelector("#link")
let userinfo= document.querySelector("#user_info")
let user = document.querySelector("#user")
let logout= document.querySelector("#logout")
logout.onclick=function(){
    window.location="register.html"
}
if(localStorage.getItem("fname")){
    links.remove()
    userinfo.style.display="flex"
    user.innerHTML="Hi, "+(localStorage.getItem("fname"))


}

////////////////////////////////////////////////////////////
let allproducts = document.querySelector(".products")
let products = [
    {
        id : 1,
        title : "Black shose",
        price : ("price: ")+200+("$"),
        category : ("category: ")+"Shose",
       
         imgurl: "img/Women's & Men's Clothing, Shop Online Fashion.jpg"
    },
    {
        id : 2,
        title : "Braclets",
        price : ("price: ")+100+("$"),
        category : ("category: ")+"Jewls",
        imgurl: "img/download (40).jpg"
    },
    {
        id : 3,
        title : "Blouver",
       price : ("price: ")+150+("$"),
        category : ("category: ")+"Clothes",
       
          imgurl: "img/download (36).jpg"
    },
     {
        id : 4,
        title : "Rings",
        price : ("price: ")+50+("$"),
        category : ("category: ")+"Jewls",
        imgurl: "img/download (35).jpg"

    },
     {
        id : 5,
        title : "Top clothe",
        price : ("price: ")+150+("$"),
        category : ("category: ")+"Clothes",
        imgurl: "img/download (38).jpg"
    },
     {
        id : 6,
        title : "Dress",
         price : ("price: ")+150+("$"),
        category : ("category: ")+"Clothes",
        imgurl: "img/Verdusa Women's Long Sleeve Sweetheart Neck Lantern Sleeve Ruched Bust Ruffle Trim Mini Dress.jpg"
    },
     {
        id : 7,
        title : "Black Heels",
         price : ("price: ")+150+("$"),
        category : ("category: ")+"Shose",
        imgurl: "img/download (39).jpg"
    },
     {
        id : 8,
        title : "Black Heels",
        price : ("price: ")+150+("$"),
        category : ("category: ")+"Shose",
        imgurl: "img/Women's Pointed Toe Chunky Heel Single Shoes.jpg"
    },
     {
        id : 9,
        title : "Necklace",
         price : ("price: ")+150+("$"),
        category : ("category: ")+"Jewls",
         imgurl: "img/Shell Stacked_ Coastal Pearls & Nautical Charms.jpg"
    }
    
]
function drawitems(data){
    let y = data.map((item) => {
        return ` <div class="product_item">
                    <div class="divofimg"><img class="product_item_img" src="${item.imgurl}" alt=""></div>
                    <div class="product_description">
                        <h2>${item.title} </h2>
                        <p> ${item.price}  </p>
                        <span>${item.category} </span>
                    </div>
                    <div class="product_action">
                        <button class="add_to_cart"   onclick ="addtocart(${item.id})" > Add to cart</button>
                        <i class="far fa-heart fav "  onclick="addtofav(${item.id})"></i>
                  </div> 
             </div>`
    })
    allproducts.innerHTML= y.join(""); 
}
drawitems(products)
// ////////////////////////////////////////////
// let search = document.getElementById("search");
// let searchCategory = document.getElementById("search-category");

// search.addEventListener("input", function () {

//     let value = this.value.toLowerCase();

//     let result;

//     if (searchCategory.value.toLowerCase() === "title") {

//         result = products.filter(item =>
//             item.title.toLowerCase().includes(value)
//         );

//     } else {

//         result = products.filter(item =>
//             item.category.toLowerCase().includes(value)
//         );

//     }

//     drawitems(result); 
// });


/////////////////////////////
let search = document.getElementById("search");
let searchCategory = document.getElementById("search-category")

search.addEventListener("input", function(){
    
    let value = this.value.toLowerCase ()

    let result;

     if (searchCategory.value.toLowerCase() === "title") {

        result = products.filter(item =>
            item.title.toLowerCase().includes(value)
        );

    } else {

        result = products.filter(item =>
            item.category.toLowerCase().includes(value)
        );

    }

    drawitems(result); 
});

///////////////////////////////////////////////////////////
let cartproducts = document.querySelector(".carts_products")
let cartproduct = document.querySelector(".carts_products div")
let number = document.querySelector(".badge")
let additem = localStorage.getItem("productincart") ? JSON.parse(localStorage.getItem("productincart")):[];
if(additem){
    additem.map(item =>{
          cartproduct.innerHTML +=`<p>${item.title}</p>`
          let lengthofp=document.querySelectorAll(".carts_products div p")
             number.innerHTML = lengthofp.length
             
         
    })
    
}
///////////////////////////////////////////////////////////////////////////////////
let addfav = localStorage.getItem("favitem") ? JSON.parse(localStorage.getItem("favitem")):[];
function addtofav(id){
             if (!localStorage.getItem("fname")) {
        window.location = "login.html";

    } 
    else{
        let exists = addfav.some ( favitem=> favitem.id ===id)
         let favitem = products.find((item)=> item.id == id)
        if(!exists){
            addfav.push(favitem)
    

       
      
        console.log(addfav)
        localStorage.setItem("favitem",JSON.stringify(addfav))

    }

}}
///////////////////////////////////////////////////////////////////////////////////////

function addtocart(id){

    if (!localStorage.getItem("fname")) {
        window.location = "login.html";
    } 
    else{

        let choosenitem = products.find(item => item.id === id);

        let exists = additem.find(item => item.id === id);

        if(exists){
            exists.quantity++;
        }else{
            choosenitem.quantity = 1;
            additem.push(choosenitem);
        }

        localStorage.setItem("productincart", JSON.stringify(additem));

        cartproduct.innerHTML += `<p>${choosenitem.title}</p>`;

        let lengthofp = document.querySelectorAll(".carts_products div p");
        number.innerHTML = lengthofp.length;
    }
}


////////////////////////////////////////////////////////////////////
let cart =document.querySelector(".shopping_cart")
cart.onclick= function(){
    if(cartproducts.style.display=="block"){
        cartproducts.style.display="none"
    }
    else{
        cartproducts.style.display="block"
    }
    
}