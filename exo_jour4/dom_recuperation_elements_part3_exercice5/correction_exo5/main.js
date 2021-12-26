let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}
// let a;
// let h2 = document.querySelectorAll("#liste-soft-skills h2")
// console.log(h2);
// for (const key in softSkills) {
//     h2.forEach(e => {
//         if (e.innerText == key) {
//             e.innerText = e.innerText + " " + softSkills[key]
//             a = key
//         }

//         let softLength = softSkills[key].length;
//         let skills = softSkills[key].substr(0, softLength-1);
//         if (skills > 50 && skills < 100) {
//             a.style = "background-color: green";
//             a.style = "color: white"
//         }
//         else if (skills == 100) {
//             a.style.background = 'gold'
//             a.style.color = 'black'
//         } 
//         else if (short < 50) {
//             a.style.background = 'red'
//         }

//     });
// }


let elements = document.querySelectorAll('#liste-soft-skills h2');
let h2;

for (const softSkill in softSkills) {
    elements.forEach(skill => {
        if (skill.innerText == softSkill) {
            skill.innerText += ' '+ softSkills[softSkill]
            h2 = skill
        }
    }); 
 
    let softLength = softSkills[softSkill].length
    let short = softSkills[softSkill].substr(0, softLength-1)
    if (short > 50 && short < 100) {
        h2.style.background = 'green'
        h2.style.color = 'white'
    } else if (short == 100) {
        h2.style.background = 'gold'
        h2.style.color = 'black'
    } else if (short < 50) {
        h2.style.background = 'red'
    }
}




