document.addEventListener("DOMContentLoaded", function () {
    var productContainer = document.querySelector("#product-container");
  
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
            let products = data.products.slice(0, 10); // Fetch only 10 items
            renderProducts(products);
        })
        .catch(error => console.error("Failed to fetch products:", error));

    function renderProducts(productsToRender) {
        productContainer.innerHTML = ""; // Clear container

        productsToRender.forEach(function (product) {
            var productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML =
            '<img src="' +
            product.thumbnail +
            '" alt="' +
            product.title +
            '" style="width:100px;">'+
            "<h3>" + product.title + 
            "</h3>" +
            "<p>" +
            product.description +
            "</p>" +
            "<p>Price: $" +
            product.price +
            "</p>" +
            "<p>Rating: " +
            product.rating +
            "</p>" ;

            productContainer.appendChild(productDiv);
        });
    }
});
