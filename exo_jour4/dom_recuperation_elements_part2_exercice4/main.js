let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}


// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-competences"

var elements = document.querySelectorAll('#liste-competences h2')
console.log(elements);


// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet

// var i = 0
// for (const competence in competences) {
//         elements[i].innerText += " " +  competences[competence]
//         i++
// }

let i = 0;

for (const competence in competences) {
    elements[i].innerText += ' ' + competences[competence]
    let competenceLength = competences[competence].length
    let short = competences[competence].substr(0, competenceLength-1)
    // if (short > 50 && short < 100) {
    //     elements[i].style.background = 'green'
    //     elements[i].style.color = 'white'
    // } 
    // else if (short == 100) {
    //     elements[i].style.background = 'gold'
    // } 
    // else if (short < 50) {
    //     elements[i].style.background = 'red'
    // }
    i++
}


// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir

