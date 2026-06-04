let cartCount = 0;
document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        localStorage.setItem("cartCount", cartCount);
        alert("Product added to cart!");
    });
});
window.onload = () => {
    const savedCount = localStorage.getItem("cartCount");
    if(savedCount){
        cartCount = savedCount;
    }
    console.log("Items in Cart:", cartCount);
};