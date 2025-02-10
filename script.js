// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const sparkleBg = document.querySelector('.sparkle-bg');
    const sparkleCount = 200; // Número de chispas
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio para cada chispa
        sparkleBg.appendChild(sparkle);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playMusic").addEventListener("click", function() {
        let audio = document.getElementById("musica");
        let inicio = document.getElementById("first-sec");
        let segundaSeccion = document.getElementById("second-sec");

        // Reproduce la música
        audio.play();

        // Oculta la primera sección
        inicio.style.display = "none";

        // Muestra la segunda sección
        segundaSeccion.style.display = "block";
    });
});
