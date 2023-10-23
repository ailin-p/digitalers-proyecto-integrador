const indexProducts = JSON.parse(localStorage.getItem("products")) || []
const cardContainer = document.querySelector(".card-container")
indexProducts.forEach(product => {
    cardContainer.innerHTML += `<article class="card-product">
                <div class="card-product-header">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="card-main">
                    <h5>${product.title}</h5>
                    <div class="card-description">
                        <p>${product.description}</p>
                    </div>
                    <div class="card-prices">
                        <div class="admission-date">${product.creationDate}</div>
                        <div class="card-price">$${product.price}</div>
                    </div>
                </div>
                <div class="card-product-footer">
                    <a href="/pages/product/description.html?id=${product.id}"><button class="card-details"><i class="fa-solid fa-magnifying-glass"></i></button><a>
                    <button class="card-buy">Comprar</button>
                </div>
            </article>`
})