let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}
// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
let elements2 = document.querySelectorAll("#liste-competences h2")
console.log(elements2);

let elements = document.querySelectorAll("#liste-soft-skills h2")
console.log(elements);


// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet


let u = 0
for (const a in competences) {
    elements2[u].innerText = elements2[u].innerText + "   =>" + competences[a];
    let competencelength = competences[a].length;
    let short = competences[a].substr(0, competencelength-1 );
    if (short>50 && short <100) {
        elements[u].style.background = 'green'
        elements[u].style.color = 'white'
    }
    u++
}

let i = 0;
for (const e in softSkills) {
    ordre(i, e)
    i++
}
function ordre(i) {
    if (elements[i].innerText == "Trello") {
        elements[i].innerText = elements[i].innerText + " " + "49 %"
    }
    else if (elements[i].innerText == "Git") {
        elements[i].innerText = elements[i].innerText + " " + "87 %"

    }
    else if (elements[i].innerText == "GitHub") {
        elements[i].innerText = elements[i].innerText + " " + "50 %"

    }
    else if (elements[i].innerText == "Discord") {
        elements[i].innerText = elements[i].innerText + " " + "15 %"

    }
}




// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir



