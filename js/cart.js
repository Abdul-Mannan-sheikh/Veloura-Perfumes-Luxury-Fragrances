let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ADD TO CART

function addToCart(id){

    let product = products.find(item => item.id === id);


    if(product){

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        alert(product.name + " added to cart");

    }

}





// SHOW CART


function displayCart(){


    let cartContainer = document.querySelector(".cart-items");


    if(!cartContainer) return;



    cartContainer.innerHTML = "";



    let total = 0;



    cart.forEach((item,index)=>{


        total += item.price;



        cartContainer.innerHTML += `


        <div class="cart-box">


        <img src="${item.image}">


        <div>

        <h3>${item.name}</h3>

        <p>$${item.price}</p>


        </div>



        <button onclick="removeCart(${index})"
        class="remove-btn">

        Remove

        </button>


        </div>


        `;


    });



    let totalBox = document.querySelector(".total");


    if(totalBox){

        totalBox.innerHTML = `

        <span>Total</span>

        <span>$${total}</span>

        `;

    }



}





// REMOVE ITEM


function removeCart(index){


    cart.splice(index,1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();


}




document.addEventListener(
"DOMContentLoaded",
displayCart
);























let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];



function addWishlist(id){


let product = products.find(item => item.id === id);



if(product){


wishlist.push(product);


localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);


alert(product.name + " added ❤️");


}

}





function displayWishlist(){


let box = document.querySelector(".wishlist-items");


if(!box) return;



box.innerHTML = "";



wishlist.forEach((item,index)=>{


box.innerHTML += `


<div class="product-card">


<img src="${item.image}">



<div class="product-info">


<h3>
${item.name}
</h3>


<p>
${item.category}
</p>


<span>
$${item.price}
</span>



<button 
onclick="removeWishlist(${index})"
class="remove-btn">

Remove

</button>



</div>


</div>


`;



});


}





function removeWishlist(index){


wishlist.splice(index,1);



localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);



displayWishlist();


}





document.addEventListener(
"DOMContentLoaded",
displayWishlist
);