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
    "Je reviendrai. - Terminator",
    "Que la Force soit avec toi. - Star Wars",
    "Tu vois, le monde se divise en deux catégories : ceux qui ont un pistolet chargé et ceux qui creusent. Toi, tu creuses. - Le bon, la brute et le truand",
    "Il y a deux sortes d'hommes : ceux qui ont un pistolet chargé, et ceux qui creusent. Toi, tu creuses. - Il était une fois dans l'Ouest",
    "La vie, c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber. - Forrest Gump",
    "J'ai toujours détesté les gens qui ne m'ont pas respecté. - Le parrain",
    "Je suis le roi du monde ! - Titanic",
    "T'es un magicien Harry. - Harry Potter à l'école des sorciers",
    "Il faut que tu te lèves, que tu te fasses beau et que tu te dises que tu es un bon à rien. Parce que sinon tu n'es rien. - Le fabuleux destin d'Amélie Poulain",
    "Je suis ton père. - Star Wars : Épisode V - L'Empire contre-attaque",
    "La vérité, tu ne peux pas la supporter ! - A few good men",
    "C'est un oiseau ? C'est un avion ? Non, c'est Superman ! - Superman",
    "Hakuna Matata. - Le Roi Lion",
    "Je t'aime. - Le parrain",
    "Au revoir, Monsieur le Président. - Independence Day",
    "J'ai fait un rêve bizarre, j'ai rêvé que je mangeais un gros marshmallow, mais quand je me suis réveillé, mon oreiller avait disparu. - Ghostbusters",
    "Tu ne peux pas combattre ici ! C'est la salle de guerre ! - Docteur Folamour",
    "La liberté, c'est de pouvoir choisir la personne qu'on aime. - Moulin Rouge !",
    "Nous serons éternellement reconnaissants. - Harry Potter et la Chambre des Secrets",
    "Fais-le, ou ne le fais pas. Il n'y a pas d'essai. - Star Wars : Épisode V - L'Empire contre-attaque",
    "C'est le commencement d'une belle amitié. - Casablanca",
    "La vie trouve toujours un chemin. - Jurassic Park",
    "Je m'appelle Inigo Montoya. Tu as tué mon père. Prépare-toi à mourir. - Princess Bride",
    "On est fait l'un pour l'autre, comme deux poissons dans l'eau. - Là-haut",
    "Je suis Groot. - Les Gardiens de la Galaxie",
    "C'est pas faux. - Kaamelott",
    "Hasta la vista, baby. - Terminator 2 : Le Jugement dernier",
    "Je suis le roi du monde ! - Titanic",
    "C'est moi qui ai tué le Loup-Garou de Londres. - Le Loup-Garou de Londres",
    "Tu veux jouer ? Viens jouer avec moi. - Shining",
    "Je suis destiné à de grandes choses. - Loki"
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
