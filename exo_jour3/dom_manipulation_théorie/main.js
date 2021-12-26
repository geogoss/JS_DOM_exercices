let square = document.querySelector('#square')

let para = document.querySelector('p')
//innertext et innerhtml
para.innerText = 'je suis cactus'

para.innerHTML = `je suis <span>cactus</span>`

//classlist
square.classList.add('round')

square.classList.replace('round', 'round2')

square.classList.remove('round2')

//classname
square.className = 'sadaronne'

console.log(square.className);

//setAttributes
console.log(square.attributes);

square.setAttribute('style', 'margin: 350px;')

console.log(square.attributes);

square.id = 'vieux'
