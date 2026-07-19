let links= document.querySelector("#link")
let userinfo= document.querySelector("#user_info")
let user = document.querySelector("#user")
let logout= document.querySelector("#logout")
let allproducts = document.querySelector(".products")
logout.onclick=function(){
    window.location="register.html"
}
if(localStorage.getItem("fname")){
    links.remove()
    userinfo.style.display="flex"
    user.innerHTML="Hi, "+(localStorage.getItem("fname"))
}
let getproduct= localStorage.getItem("productincart");
if(getproduct){
    let item = JSON.parse(getproduct)
    drawitem(item)
}
let additem = JSON.parse(localStorage.getItem("productincart")) || [];
function drawitem(products){

    let y = products.map((item) => {
        return `
        <div class="product_item">
            <div class="divofimg">
                <img class="product_item_img" src="${item.imgurl}" alt="">
            </div>

            <div class="product_description">
                <h2>${item.title}</h2>
                <p>${item.price}</p>
                <span>${item.category}</span>
            </div>

            <div class="product_action">

                <button onclick="decrease(${item.id})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increase(${item.id})">+</button>

                <button class="add_to_cart"
                        onclick="removefromcart(${item.id})">
                    remove
                </button>

            </div>
        </div>
        `;
    });

    allproducts.innerHTML = y.join("");
}
function increase(id){

    let product = additem.find(item => item.id === id);

    product.quantity++;

    localStorage.setItem("productincart", JSON.stringify(additem));

    drawitem(additem);
}
function decrease(id){

    let product = additem.find(item => item.id === id);

    if(product.quantity > 1){

        product.quantity--;

    }else{

        removefromcart(id);

    }

    localStorage.setItem("productincart", JSON.stringify(additem));

    drawitem(additem);
}
////////////////////////////////////////////////////
let favsection = document.querySelector(".favitem")
let getfav= localStorage.getItem("favitem")
if(getfav){
        let favitem= JSON.parse(getfav)
        drawfav(favitem)
}

function drawfav(products){
    let x = products.map((item) => {
        return ` <div class="product_item">
                    <div class="divofimg"><img class="product_item_img" src="${item.imgurl}" alt=""></div>
                    <div class="product_description">
                        <h2>${item.title} </h2>
                        <p> ${item.price}  </p>
                        <span>${item.category} </span>
                    </div>
                    <div class="product_action">
                        <button class="add_ to_cart"  onclick ="removefromfav(${item.id})" > remove</button>
                      
                  </div> 
             </div>`
    })
    favsection.innerHTML= x.join(""); 
}


function removefromfav(id){
             let product = JSON.parse(localStorage.getItem("favitem"))
             product = product.filter((item)=>item.id !==id)
             localStorage.setItem("favitem",JSON.stringify(product))
             drawfav(product)
}

///////////////////////////////////////////
function removefromcart(id){
             let product = JSON.parse(localStorage.getItem("productincart"))
             removingproduct = product.filter((item)=>item.id !==id)
             localStorage.setItem("productincart",JSON.stringify(removingproduct))
             drawitem(removingproduct)
}
///////////////////////////////////////////////////////////////

