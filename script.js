const timeElement = document.getElementById('time');
const styles = [
    'style-1', 'style-2', 'style-3', 'style-4', 'style-5',
    'style-6', 'style-7', 'style-8', 'style-9', 'style-10'
];
let currentStyleIndex = 0;

// Changer de style
document.getElementById('change-style').addEventListener('click', () => {
    timeElement.classList.remove(styles[currentStyleIndex]);
    currentStyleIndex = (currentStyleIndex + 1) % styles.length;
    timeElement.classList.add(styles[currentStyleIndex]);
});

// Basculer le thème
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.widget').classList.toggle('dark-theme');
    timeElement.classList.toggle('dark-theme');
    document.getElementById('date').classList.toggle('dark-theme');
});