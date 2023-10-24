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