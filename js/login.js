const users = JSON.parse(localStorage.getItem("users"))

const loginForm = document.getElementById("login")
loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log(evt)
    //Capturo los valores de los inputs del login
    const email = evt.target.elements.email.value.trim()
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

    setTimeout(function () {
        window.location.href = "/index.html"
    }, 1500)



})