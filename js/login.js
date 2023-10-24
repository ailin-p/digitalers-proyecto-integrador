const usersStart = [{
        id: '1a8469c8-9235-4779-b927-1838eb281ba5',
        fullname: "Juan Pérez",
        email: "juan@example.com",
        password: "contraseña",
        dateOfBirth: "1990-05-15",
        province: "Río Negro",
        role: "ROLE_CLIENT"
    },
    {
        id: '56b785e9-d90f-4605-96d8-40f098c1f576',
        fullname: "María López",
        email: "maria@example.com",
        password: "contraseña",
        dateOfBirth: "1985-08-20",
        province: "Buenos Aires",
        role: "ROLE_CLIENT"
    },
    {
        id: 'f52805f9-dd28-4bd9-b7c0-2ec20a3367a1',
        fullname: "Carlos González",
        email: "admin@admin.com",
        password: "admin",
        dateOfBirth: "1995-02-10",
        province: "Jujuy",
        role: "ROLE_ADMIN"
    },
    {
        id: 'a7a7d803-c335-4884-b318-80cec013e658',
        fullname: "Laura Sosa",
        email: "laura@example.com",
        password: "contraseña",
        dateOfBirth: "1988-11-25",
        province: "Mendoza",
        role: "ROLE_CLIENT"
    }
]

if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart))
}

const users = JSON.parse(localStorage.getItem("users"))

const loginForm = document.getElementById("login")
loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log(evt)
    //Capturo los valores de los inputs del login
    const email = evt.target.elements.email.value.trim();
    const password = evt.target.elements.password.value

    const userExist = users.find(usr => {
        if (usr.email === email) {
            return true
        }
    })

    if (!userExist || userExist.password !== password) {
        Swal.fire("Los datos son incorrectos", "", "error")
        loginForm.reset()
        return
    }

    Swal.fire("Login correcto", "", "success")
    delete userExist.password
    localStorage.setItem("currentUser", JSON.stringify(userExist))

    setTimeout(function() {
        window.location.href = "/index.html"
    },  1500 )

    

})