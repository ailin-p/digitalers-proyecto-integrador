
const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const headerUserInfoLogin = document.getElementById("loginHeader")
const headerUserInfoRegister = document.getElementById("registerHeader")
const headerForAdmin = document.getElementById("navbarSupportedContent")

// Si hay un usuario logueado, ponemos nombre y pintamos botón de cerrar sesión
if (currentUser) {
    headerUserInfoLogin.innerText = currentUser.fullname;
    headerUserInfoRegister.innerHTML = `<button onclick="logout()" style="color: #FF7A00; border:0">cerrar sesión</button>`;

    // Si además ese usuario es admin, mostrar página admin
    if (currentUser.role === "ROLE_ADMIN") {
        const productsNavItem = document.querySelector('a[href="/pages/admin/admin.html"]');
        if (!productsNavItem) {
            const newProductsNavItem = createNavItem('productos', '/pages/admin/admin.html');
            insertNavItem(newProductsNavItem);
        }
        
        const usersNavItem = document.querySelector('a[href="/pages/users/users.html"]');
        if (!usersNavItem) {
            const newUsersNavItem = createNavItem('usuarios', '/pages/users/users.html');
            insertNavItem(newUsersNavItem);
        }
    }
} else {
    headerUserInfoLogin.innerHTML = `<li id="loginHeader"><a class="text-reset text-decoration-none" href="/pages/login/login.html">iniciar sesión</a></li>`;
    headerUserInfoRegister.innerHTML = `<li id="registerHeader"><a class="text-reset text-decoration-none" href="/pages/register/register.html">registrarse</a></li>`;
    
    // Verificamos si existen los elementos "productos" y "usuarios" antes de intentar eliminarlos
    const productsNavItem = document.querySelector('a[href="/pages/admin/admin.html"]');
    const usersNavItem = document.querySelector('a[href="/pages/users/users.html"]');
    if (productsNavItem) {
        const navList = document.querySelector('.navbar-nav');
        navList.removeChild(productsNavItem.parentElement);
    }
    if (usersNavItem) {
        const navList = document.querySelector('.navbar-nav');
        navList.removeChild(usersNavItem.parentElement);
    }
}

// Función para crear un nuevo elemento de navegación
function createNavItem(text, href) {
    const newNavItem = document.createElement('li');
    newNavItem.classList.add('nav-item');
    
    const newNavLink = document.createElement('a');
    newNavLink.classList.add('nav-link', 'text-reset');
    newNavLink.href = href;
    newNavLink.textContent = text;
    
    newNavItem.appendChild(newNavLink);
    return newNavItem;
}

// Función para insertar un elemento de navegación en la barra de navegación
function insertNavItem(navItem) {
    const navList = document.querySelector('.navbar-nav');
    navList.appendChild(navItem);
}



//Función para desloguear
function logout() {
    localStorage.removeItem("currentUser")
    setTimeout(function() {
        window.location.href= "/index.html"
    }, 1500)
}

// Para agregar usuarios: tomar los datos del input del formulario de la página register, hacer un script que tome el evento submit del formulario y guarde en el localStorage el array users


  