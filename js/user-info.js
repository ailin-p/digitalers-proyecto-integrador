
const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const headerUserInfoLogin = document.getElementById("loginHeader")
const headerUserInfoRegister = document.getElementById("registerHeader")
const headerForAdmin = document.getElementById("navbarSupportedContent")

//Si hay un usuario logueado, ponemos nombre y pintamos botón de cerrar sesión
if (currentUser) {
    headerUserInfoLogin.innerText = currentUser.fullname;
    headerUserInfoRegister.innerHTML = `<button onclick="logout()" style="color: #FF7A00; border:0">cerrar sesión</button>`;

    //Si ademas ese usuario es admin, mostrar página admin
    if (currentUser.role === "ROLE_ADMIN") {
        const newNavItem = document.createElement('li');
        newNavItem.classList.add('nav-item');
    
        const newNavLink = document.createElement('a');
        newNavLink.classList.add('nav-link', 'text-reset');
        newNavLink.href = '/pages/admin/admin.html';
        newNavLink.textContent = 'admin';
        // Añade a <a> como hijo de <li>
        newNavItem.appendChild(newNavLink);
        // Captura el nav-bar para que el elemento que se creó anteriormente sea hijo del ul con clase .navbar-nav
        const navList = document.querySelector('.navbar-nav');
        navList.appendChild(newNavItem);
    }
} else {
    headerUserInfoLogin.innerHTML = `<li id="loginHeader"><a class="text-reset text-decoration-none" href="/pages/login/login.html">iniciar sesión</a></li>`;
    headerUserInfoRegister.innerHTML = `<li id="registerHeader"><a class="text-reset text-decoration-none" href="/pages/register/register.html">registrarse</a></li>`;
    
    // Verificamos si existe el elemento "admin" antes de intentar eliminarlo
    const adminNavItem = document.querySelector('a[href="/pages/admin/admin.html"]');
    if (adminNavItem) {
        const navList = document.querySelector('.navbar-nav');
        navList.removeChild(adminNavItem.parentElement);
    }
}


//Función para desloguear
function logout() {
    localStorage.removeItem("currentUser")
    setTimeout(function() {
        window.location.href= "/index.html"
    }, 1500)
}

// Para agregar usuarios: tomar los datos del input del formulario de la página register, hacer un script que tome el evento submit del formulario y guarde en el localStorage el array users


  