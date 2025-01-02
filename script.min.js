const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const toggleThemeButton = document.getElementById('toggle-theme');
const changeStyleButton = document.getElementById('change-style');
const body = document.body;

// Gestion des thèmes (clair/sombre)
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleThemeButton.textContent = body.classList.contains('dark-theme') ? '🌙' : '🌞';
});

// Gestion des styles d'affichage (10 styles disponibles)
const styles = [
    'style-1', 'style-2', 'style-3', 'style-4', 'style-5',
    'style-6', 'style-7', 'style-8', 'style-9', 'style-10'
];

let currentStyleIndex = 0;

changeStyleButton.addEventListener('click', () => {
    // Supprimer l'ancien style
    styles.forEach(style => timeElement.classList.remove(style));

    // Appliquer le style suivant
    currentStyleIndex = (currentStyleIndex + 1) % styles.length;
    timeElement.classList.add(styles[currentStyleIndex]);
});

// Mise à jour de l'heure et de la date
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${day}/${month}/${year}`;
}

setInterval(updateTime, 1000);
updateTime(); // Appel initial
