const bootnU = document.getElementById("botonU")
const bootnD = document.getElementById("botonD")
const bootnT = document.getElementById("botonT")

botonU.addEventListener("click", resultadoUno);

function resultadoUno() {
    botonU.classList.add("botonP");
    botonD.classList.add("botonS");
    botonT.classList.add("botonT");
}
