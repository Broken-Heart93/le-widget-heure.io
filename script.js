/* Mode jour (par défaut) */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffffff; /* Fond blanc */
}

.widget {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0; /* Fond clair pour la boîte */
}

.time {
    font-size: 2.5rem;
    margin: 10px 0;
    color: #000; /* Texte noir */
}

.date {
    font-size: 1.2rem;
    margin: 10px 0;
    color: #000; /* Texte noir */
}

button.toggle-theme, button.change-style {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 5px;
}

/* Mode sombre */
body.dark-theme {
    background-color: #191919; /* Fond sombre */
}

.widget.dark-theme {
    background-color: #ffffff; /* Fond blanc pour la boîte */
}

.time.dark-theme, 
.date.dark-theme {
    color: #000; /* Texte noir */
}

/* Styles pour les différents modèles d'affichage de l'heure */
.time.style-1 { font-family: 'Courier New', Courier, monospace; }
.time.style-2 { font-family: 'Georgia', serif; font-style: italic; }
.time.style-3 { font-family: 'Impact', sans-serif; text-transform: uppercase; }
.time.style-4 { font-family: 'Tahoma', sans-serif; }
.time.style-5 { font-family: 'Verdana', sans-serif; letter-spacing: 2px; }
.time.style-6 { font-family: 'Times New Roman', Times, serif; font-weight: bold; }
.time.style-7 { font-family: 'Lucida Console', Monaco, monospace; }
.time.style-8 { font-family: 'Arial Black', Gadget, sans-serif; }
.time.style-9 { font-family: 'Comic Sans MS', cursive, sans-serif; }
.time.style-10 { font-family: 'Trebuchet MS', Helvetica, sans-serif; }

/* Bouton en forme de flèche pour changer le style */
button.change-style {
    font-size: 1.8rem;
    cursor: pointer;
    color: red; /* Bouton rouge */
    position: relative;
    margin-right: 5px; /* Décalé légèrement vers la gauche */
    display: inline-flex;
    align-items: center;
}
