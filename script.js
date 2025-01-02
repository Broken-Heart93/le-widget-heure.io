// Fonction pour afficher l'heure et la date
function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    const year = now.getFullYear();

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${day}/${month}/${year}`;
}

// Fonction pour basculer entre le mode jour/nuit
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.widget').classList.toggle('dark-theme');
    const button = document.getElementById('toggle-theme');
    if (document.body.classList.contains('dark-theme')) {
        button.textContent = '🌞'; // Passer au mode jour
    } else {
        button.textContent = '🌙'; // Passer au mode nuit
    }
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

// Initialiser l'heure au chargement
updateTime();

// Écouter le bouton de bascule de thème
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
