const mainElement = document.querySelector('#main');
mainElement.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
const name = 'YOUR-NAME';
newHeader.innerHTML = `${name} is the champion`;
document.body.appendChild(newHeader);
