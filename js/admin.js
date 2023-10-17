const products = [
    {
        id: '96d4f329-29ee-44a9-9cc9-6a797f990000',
        image: '/assets/images/prod1.png',
        title: 'Piedras sanitarias Sanicat',
        description: 'Arena gruesa aglomerante para mantener las patas y los suelos limpios.',
        price: 5000,
        category: 'Accesorios Gatos',
        creationDate: '13/05/2023'
    },
    {
        id: '11c30647-1abd-4a16-87b6-29765d45b59c',
        image: '/assets/images/prod2.png',
        title: 'Pelota con plumas',
        description: 'Clásica pelota de hilo con plumas para entretener a tus mascotas.',
        price: 1000,
        category: 'Accesorios Gatos',
        creationDate: '13/05/2023'
    },
    {
        id: '83f7ff8a-b02e-4c89-8695-ff0fe0c05943',
        image: '/assets/images/prod3.png',
        title: 'Nutrique perro adulto 7.5kg',
        description: 'Alimento para perro adulto Nutrique de 7.5 kg.',
        price: 25000,
        category: 'Comida Perros',
        creationDate: '13/05/2023'
    },
    {
        id: 'c18ab182-b8be-4c00-91dc-bd7b3a17a6b5',
        image: '/assets/images/prod4.png',
        title: 'Rascador chico para gato',
        description: 'Rascador ideal para que tus michis no rasquen tus sillas.',
        price: 10600,
        category: 'Accesorios Gatos',
        creationDate: '13/05/2023'
    },
]

//Obtenemos la tabla de productos desde el HTML
const tableProductBody = document.querySelector("#table-product-body")

//Cargamos los productos predeterminados
displayProducts()

const inputFilterHTML = document.getElementById("filter")

const formProductsHTML = document.getElementById("formProduct")

formProductsHTML.addEventListener('submit', (evt) => {
    // Prevenimos el evento que recarga el form
    evt.preventDefault()

    // Guardamos en una constante el acceso a los elementos del formulario
    const element = formProductsHTML.elements


    const newProduct = {
        id: crypto.randomUUID(),
        image: element.image.value,
        title: element.title.value,
        description: element.description.value,
        price: element.price.valueAsNumber,
        category: element.category.value,
        creationDate: getEntryDate()
    }

    products.push(newProduct)
    displayProducts()

    formProductsHTML.reset()
    element.title.focus()

})

function getEntryDate() {
    const date = new Date()
    const year = date.getFullYear
    let month = date.getMonth() +1
    if(month < 10) {
        month = '0'+month
    }
    let day = date.getDate
    if(day < 10) {
        day = '0'+day
    }
    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
}

function displayProducts() {
    tableProductBody.innerHTML = ""
    products.forEach(function(product, index) {
    tableProductBody.innerHTML += `
    <tr>
        <td class="table-img">
        <img src="${product.image}" alt="${product.title}">
        </td>
        <td class="table-title">${product.title}</td>
        <td class="table-description">${product.description}</td>
        <td class="table-price">${product.price}</td>
        <td class="table-category">${product.category}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="removeProducts(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
  </tr>`
    })
}

//Función para filtrar/buscar productos

inputFilterHTML.addEventListener('keyup', (evt) => {

})

function removeProducts(productIndex) {
    products.splice(productIndex, 1)
    displayProducts()
}

