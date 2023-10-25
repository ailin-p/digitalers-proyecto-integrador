document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("table-users-body")

    function deleteUser(userId, row) {
        Swal.fire({
            title: '¿Desea borrar usuario?',
            icon: 'error',
            text: '¿Realmente desea eliminar el usuario?',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const users = JSON.parse(localStorage.getItem("users")) || []
                const userIndex = users.findIndex((user) => user.id === userId)

                if (userIndex !== -1) {
                    users.splice(userIndex, 1)
                    localStorage.setItem("users", JSON.stringify(users))
                    tableBody.removeChild(row)
                    Swal.fire('¡BORRADO!', 'Usuario eliminado exitosamente', 'success')
                }
            }
        })
    }


    const users = JSON.parse(localStorage.getItem("users")) || []

    users.forEach((user) => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn-delete btn btn-danger btn-sm" data-userid="${user.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `

        const deleteButton = row.querySelector(".btn-delete")
        deleteButton.addEventListener("click", () => {
            const userIdToDelete = deleteButton.getAttribute("data-userid")
            deleteUser(userIdToDelete, row)
        })

        tableBody.appendChild(row)
    })

})