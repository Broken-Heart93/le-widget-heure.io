document.addEventListener("DOMContentLoaded", () => {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const toggleThemeButton = document.getElementById("toggle-theme");
    const changeStyleButton = document.getElementById("change-style");

    let currentStyleIndex = 0;
    const styles = [
        "style-1", "style-2", "style-3", "style-4", "style-5",
        "style-6", "style-7", "style-8", "style-9", "style-10"
    ];

    // Fonction pour mettre à jour l'heure et la date
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString("fr-FR", { hour12: false });
        const dateString = now.toLocaleDateString("fr-FR");

        timeElement.textContent = timeString;
        dateElement.textContent = dateString;
    }

    // Changer de style pour l'heure
    changeStyleButton.addEventListener("click", () => {
        timeElement.classList.remove(styles[currentStyleIndex]);
        currentStyleIndex = (currentStyleIndex + 1) % styles.length;
        timeElement.classList.add(styles[currentStyleIndex]);
    });

    // Basculer entre thème clair et sombre
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const icon = toggleThemeButton.textContent === "🌞" ? "🌙" : "🌞";
        toggleThemeButton.textContent = icon;
    });

    // Mettre à jour l'heure chaque seconde
    setInterval(updateTime, 1000);

    // Mise à jour initiale
    updateTime();
});
