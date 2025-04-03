document.addEventListener("DOMContentLoaded", function () {
    const text = "Callacos"; // Texte à afficher
    const speed = 90; // Vitesse d'écriture en ms
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-effect").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); // Démarre l'animation
});