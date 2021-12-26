let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

let elements = document.querySelectorAll('#liste-competences h2')
let i = 0;

for (const competence in competences) {
    elements[i].innerText += ' ' + competences[competence]
    let competenceLength = competences[competence].length
    let short = competences[competence].substr(0, competenceLength-1)
    if (short > 50 && short < 100) {
        elements[i].style.background = 'green'
        elements[i].style.color = 'white'
    } else if (short == 100) {
        elements[i].style.background = 'gold'
    } else if (short < 50) {
        elements[i].style.background = 'red'
    }
    i++
}
