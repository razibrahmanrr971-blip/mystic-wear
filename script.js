// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const buttons = document.querySelectorAll(".product-card button");
buttons.forEach(button => {
button.addEventListener("click", () => {
const card = button.parentElement;
const product = {
name: card.querySelector("h3").innerText,
price: card.querySelector("p").innerText
};
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
alert(product.name + " added to cart!");
updateCartCount();
});
});
function updateCartCount(){
const cartIcon = document.querySelector(".fa-cart-shopping");
if(cartIcon){
cartIcon.setAttribute(
"data-count",
cart.length
);
}
}
updateCartCount();
// SEARCH SYSTEM
const searchInput = document.querySelector("input");
if(searchInput){
searchInput.addEventListener("keyup", () => {
let value = searchInput.value.toLowerCase();
document.querySelectorAll(".product-card").forEach(card => {
let text = card.innerText.toLowerCase();
card.style.display =
text.includes(value)
? "block"
: "none";
});
});
}
// WELCOME MESSAGE
console.log("Mystic Wear Loaded Successfully");