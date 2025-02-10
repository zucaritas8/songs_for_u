document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playMusic").addEventListener("click", function() {
        let nombre = document.getElementById("nombreUsuario").value.trim().toLowerCase();
        let inicio = document.getElementById("first-sec");
        let audio = document.getElementById("musica");

        // Ocultar la sección de inicio
        inicio.style.display = "none";

        // Reproducir música
        audio.play();

        if (nombre === "Mariana") {
            document.getElementById("second-sec").style.display = "block";
        } else if (nombre === "Andrea") {
            document.getElementById("third-sec").style.display = "block";
        } else if (nombre === "Tahis") {
            document.getElementById("fourth-sec").style.display = "block";
        } else {
            alert("Nombre no reconocido. Intenta de nuevo.");
            inicio.style.display = "block"; // Volver a mostrar si el nombre no es válido
        }
    });
});
