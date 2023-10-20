const products = JSON.parse(localStorage.getItem("products")) || []

products.forEach(product => document.write(product.title))