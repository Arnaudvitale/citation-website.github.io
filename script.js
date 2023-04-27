const citations = [
    "La vie, c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber. - Forrest Gump",
    "Quoi qu'il arrive, un sourire est la meilleure façon de se sortir de la merde, même si c'est un sourire de con. - Intouchables",
    "Un grand pouvoir implique de grandes responsabilités. - Spider-Man",
    "Je suis le roi du monde ! - Titanic",
    "Que la Force soit avec toi. - Star Wars",
    "Il faut toujours viser la lune, car même en cas d'échec, on atterrit dans les étoiles. - Le Loup de Wall Street",
    "Fais-le ou ne le fais pas. Il n'y a pas d'essai. - Star Wars, L'Empire contre-attaque",
    "La peur est le chemin vers le côté obscur : la peur mène à la colère, la colère mène à la haine, la haine... mène à la souffrance. - Star Wars, La Menace fantôme",
    "Le hasard, c'est Dieu qui se promène incognito. - Imitation Game",
    "Garder ses rêves, c'est ce qu'il y a de plus beau. - La Cité de la peur",
    "quoicoubeh",
    "les deux en même temps. -Fabien"
];

document.getElementById('generer').addEventListener('click', function() {
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
    animerTexte(citationAleatoire);
});

let intervalId = null;

function animerTexte(texte) {
    const elementCitation = document.getElementById('citation');
    elementCitation.innerHTML = '';
    elementCitation.style.minHeight = '0';
    let index = 0;

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(function() {
        const charSpan = document.createElement('span');
        charSpan.innerText = texte[index];
        elementCitation.appendChild(charSpan);
        index++;

        if (index >= texte.length) {
            clearInterval(intervalId);
            intervalId = null;
            elementCitation.style.minHeight = '0.5em';
        }
    }, 35);
}
