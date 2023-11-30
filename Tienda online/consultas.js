const $submit = document.getElementById("submit"),
    $name = document.getElementById("name"),
    $apellido = document.getElementById("apellido"),
    $email = document.getElementById("email"),
    $consulta = document.getElementById("consulta");

function validateInputs() {
    if ($name.value === "") {
        alert("Por favor ingresa un nombre");
    }
    if ($apellido.value === "") {
        alert("Por favor ingresa un apellido");
    }
    if ($email.value === "") {
        alert("Por favor ingresa una direccion de correo");
    }
    if ($consulta.value === "") {
        alert("Por favor ingresa una consulta");
    }

}

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        validateInputs();
        e.preventDefault();
    }
})