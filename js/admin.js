let productsStart = [
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

//Si no encuentra nada, se pinta el array que tenemos con los productos predeterminados (de otra manera devolvería null y daría error)

let products = JSON.parse(localStorage.getItem("products")) || productsStart

//Si nunca hemos guadado en el localStorage, lo creamos en este if
if(JSON.parse(localStorage.getItem("products")) === null ) {
    localStorage.setItem("products", JSON.stringify(products))
}

let idToEdit
let btn = document.querySelector('button.btn[type="submit"]')

//Obtenemos la tabla de productos desde el HTML
const tableProductBody = document.querySelector("#table-product-body")

//Cargamos los productos predeterminados
displayProducts(products)

let inputFilterHTML = document.getElementById("filter")

const formProductsHTML = document.getElementById("formProduct")

const modalProducts = document.getElementById('formModal')

formProductsHTML.addEventListener('submit', (evt) => {
    // Prevenimos el evento que recarga el form
    evt.preventDefault()

    // Guardamos en una constante el acceso a los elementos del formulario
    const element = formProductsHTML.elements

    //Si es undefined le asignamos un random ID, sino el id es igual a lo que tenía previamente idToEdit en la función de editar
    const id = idToEdit === undefined ? crypto.randomUUID() : idToEdit

    const newProduct = {
        id: id,
        image: element.image.value,
        title: element.title.value,
        description: element.description.value,
        price: element.price.valueAsNumber,
        category: element.category.value,
        creationDate: getEntryDate()
    }

    if (idToEdit) {
        const index = products.findIndex(product => {
            return product.id === idToEdit
        })

        products[index] = newProduct
        idToEdit = undefined

        btn.innerText = "Agregar"
        btn.classList.remove("btn-success")

    } else {
        products.push(newProduct)

    }
    displayProducts(products)
    localStorage.setItem("products", JSON.stringify(products))
    
    Swal.fire({
        icon: 'success',
        title: 'Producto agregado/modificado correctamente',
        text: 'El producto se actualizó o modificó correctamente'
    })

    formProductsHTML.reset()
})

function getEntryDate() {
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }
    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
}

function displayProducts(arrayToDisplay) {
    tableProductBody.innerHTML = ""
    arrayToDisplay.forEach(function (product) {
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
        <div class="d-flex gap-1">
        <button class="btn-delete btn btn-danger btn-sm" onclick="removeProducts('${product.id}')">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class="btn btn-success btn-sm" onclick="editProduct('${product.id}')" data-bs-toggle="modal" data-bs-target="#formModal">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
    </div>
        </td>
  </tr>`
    })
}

//Función para filtrar/buscar productos
inputFilterHTML.addEventListener('keyup', (evt) => {
    const search = evt.target.value.toLowerCase();

    const result = products.filter(product => product.title.toLowerCase().includes(search));

    displayProducts(result)
});


function removeProducts(idToFind) {

    Swal.fire({
        title: 'Desea borrar producto',
        icon: 'error',
        text: 'Realmente desea elminar el producto?',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            const indexFound = products.findIndex((product) => {
                if (product.id === idToFind) {
                    return true
                }
                return false
            })
            products.splice(indexFound, 1)
            displayProducts(products)
            //Seteamos en el localStorage el array actualizado con un producto menos
            localStorage.setItem("products", JSON.stringify(products))
            Swal.fire('¡BORRADO!', 'Producto borrado exitosamente', 'success')
            inputFilterHTML.value = ""
        }

    })




}


const editProduct = function (recdID) {
    const productToEdit = products.find((product) => {
        if (product.id === recdID) {
            return true
        }
    })

    //Resguardo por si find devuelve undefined
    if (!productToEdit) return

    idToEdit = productToEdit.id

    const element = formProductsHTML.elements
    element.title.value = productToEdit.title
    element.price.value = productToEdit.price
    element.category.value = productToEdit.category
    element.image.value = productToEdit.image
    element.description.value = productToEdit.description

    btn.innerText = "Editar"
    btn.classList.add("btn-success")


}

modalProducts.addEventListener('hidden.bs.modal', event => {
  formProductsHTML.reset()
})