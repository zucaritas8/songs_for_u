document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enter").addEventListener("click", function() {
        let nombre = document.getElementById("nombreUsuario").value.trim().toLowerCase();
        let inicio = document.getElementById("inicio");
        let audio = document.getElementById("musica");

        // Ocultar la sección de inicio
        inicio.style.display = "none";

        // Reproducir música
        audio.play();

        // Mostrar la sección correspondiente
        if (nombre === "mariana") {
            document.getElementById("seccion2").style.display = "block";
        } 
        else if (nombre === "andrea") {
            document.getElementById("seccion3").style.display = "block";
        } 
        else if (nombre === "paola") {
            document.getElementById("seccion3").style.display = "block";
        } 
        else if (nombre === "tahis") {
            document.getElementById("seccion4").style.display = "block";
        } 
        else {
            alert("Nombre no reconocido. Intenta de nuevo.");
            inicio.style.display = "block"; // Volver a mostrar si el nombre no es válido
        }
    });
});
