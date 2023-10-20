const usersStart = [
    {
      id: 1,
      name: "Juan",
      email: "juan@example.com",
      password: "contraseña",
      dateOfBirth: "1990-05-15",
      province: "Madrid",
      role: "ROLE_CLIENT"
    },
    {
      id: 2,
      name: "María",
      email: "maria@example.com",
      password: "contraseña",
      dateOfBirth: "1985-08-20",
      province: "Barcelona",
      role: "ROLE_CLIENT"
    },
    {
      id: 3,
      name: "Carlos",
      email: "admin@admin.com",
      password: "admin",
      dateOfBirth: "1995-02-10",
      province: "Valencia",
      role: "ROLE_ADMIN"
    },
    {
      id: 4,
      name: "Laura",
      email: "laura@example.com",
      password: "contraseña",
      dateOfBirth: "1988-11-25",
      province: "Sevilla",
      role: "ROLE_CLIENT"
    }
  ];

if(localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart))
}

const users = JSON.parse(localStorage.getItem("users"))

const loginForm = document.getElementById("login")
loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    //Capturo los valores de los inputs del login
    const email = evt.target.elements.email.value
    const password = evt.target.elements.email.value

    users.find 

})

// Para agregar usuarios: tomar los datos del input del formulario de la página register, hacer un script que tome el evento submit del formulario y guarde en el localStorage el array users