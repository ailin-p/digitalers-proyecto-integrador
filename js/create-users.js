// Inputs a mostrar: nombre, email, provincia, fecha de nacimiento, boton de borrar

const registerForm = document.querySelector(".contact-form")

const passwordField = document.getElementById("password")
const repeatPasswordField = document.getElementById("repeatPassword")
const passwordMatch = document.querySelector(".password-match")

function validatePasswords() {
    const password = passwordField.value
    const repeatPassword = repeatPasswordField.value

    if (password === repeatPassword) {
        passwordMatch.textContent = "Las contraseñas coinciden."
        passwordMatch.style.color = "green" // Cambia el color del texto a verde

        // Borra el mensaje de coincidencia después de 5 segundos
        setTimeout(() => {
            passwordMatch.textContent = ""
        }, 2000)
    } else {
        passwordMatch.textContent = "Las contraseñas no coinciden."
        passwordMatch.style.color = "red" // Cambia el color del texto a rojo
    }
}

passwordField.addEventListener("input", validatePasswords)
repeatPasswordField.addEventListener("input", validatePasswords)




//Capturo evento submit del form
// ...

registerForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    // Obtengo los valores del formulario
    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const dateOfBirth = document.getElementById("dateOfBirth").value
    const province = document.getElementById("province").value
    const observations = document.getElementById("observations").value

    // Genera un UUID único para el ID del usuario
    const userId = crypto.randomUUID()

    // Define el rol por defecto como "ROLE_CLIENT"
    const role = "ROLE_CLIENT"

    // Verifica si ya existe un usuario con el mismo email en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || []
    const existingUser = users.find((user) => user.email === email)

    // Si existe, manda una alerta de ello y resetea el form
    if (existingUser) {
        Swal.fire('ERROR!', 'Ya existe un usuario con ese correo electrónico. Intente nuevamente', 'error')
        registerForm.reset()
    } else {
        // Crea un nuevo usuario con el UUID como ID único
        const newUser = {
            id: userId, // Agrega el ID único
            fullname,
            email,
            password,
            dateOfBirth,
            province,
            observations,
            role, // Establece el rol como "ROLE_CLIENT"
        }

        // Agrega el nuevo usuario al array de usuarios
        users.push(newUser)

        // Almacena el array de usuarios en localStorage
        localStorage.setItem("users", JSON.stringify(users))
        registerForm.reset()

        Swal.fire('', 'Cuenta creada con éxito!', 'success')
    }

    setTimeout(() => {
        document.location.href = "/index.html"
    }, 3000)
})