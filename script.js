var plus = document.querySelectorAll(".fa-plus-circle");
var minus = document.querySelectorAll(".fa-minus-circle");
var heart = document.querySelectorAll(".fas.fa-heart");
var trash = document.querySelectorAll(".fas.fa-trash-alt");
var cardbody = document.querySelectorAll(".card-body");
var card = document.querySelectorAll(".card");
var total = document.querySelector(".total");
var qntty1 = document.getElementById("qntty1");
var qntty2 = document.getElementById("qntty2");
var qntty3 = document.getElementById("qntty3");
var singlePrice = document.querySelectorAll(".unit-price");

function updateTotal() {
    let totalValue = 100 * parseInt(qntty1.value) + 20 * parseInt(qntty2.value) + 50 * parseInt(qntty3.value) ;
    total.value = totalValue+"$";
}

function updatePrice() {
    singlePrice.forEach((priceElement, index) => {
        let quantity;
        if (index === 0) {
            quantity = parseInt(qntty1.value) || 0;
        } else if (index === 1) {
            quantity = parseInt(qntty2.value) || 0;
        } else {
            quantity = parseInt(qntty3.value) || 0;
        }
        let price;
        if (index === 0) {
            price = 100 * quantity; 
        } else if (index === 1) {
            price = 20 * quantity; 
        } else {
            price = 50 * quantity; 
        }
        priceElement.value = price + "$";
    });
}


plus.forEach(plus => {
    plus.addEventListener("click", function() {
        var qntty = this.nextElementSibling;
        qntty.value = parseInt(qntty.value) + 1;
        updateTotal();
        updatePrice();
    }); 
});

minus.forEach(minus => {
    minus.addEventListener("click", function() {
        var qntty = this.previousElementSibling;
        if (parseInt(qntty.value) > 1) { 
            qntty.value = parseInt(qntty.value) - 1;
        }
        
        updateTotal();
        updatePrice();
    });
});

heart.forEach(heart => {
    heart.addEventListener("click", function() {
        // if (heart.classList.contains("fas")) { 
        //     heart.classList.remove("fas");
        //     heart.classList.add("fal");
        // } else {
        //     heart.classList.remove("fal");
        //     heart.classList.add("fas");
        // }
        if (heart.style.color=="red"){
            heart.style.color="black" ;
        } else{
            heart.style.color="red" ;
        }
    });
});

trash.forEach(trash => {
    trash.addEventListener("click", function() {
        var result = confirm("Do you want to delete this product?");
        if (result) { 
            var cardBody = this.closest('.card-body');
            var card=this.closest('.card');
            if (cardBody) {
                cardBody.remove();
                card.remove();
                alert("Product deleted.");
            }
        } else {
            alert("Product not deleted.");
        }
        updateTotal();
    });
});

