document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});
console.log("Mystic Wear Loaded Successfully");