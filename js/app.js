//setter inn input
const inputElement = document.getElementById('product');
//Henter knapp/butoon
const buttonAddElement = document.getElementById('add-button');
//hente liste
const ulShoppingListElement = document.getElementById('shopping-list');

//eventListner som lytter på click hendelse på knapp
// leser verdi av input og legger til i liste. 
buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});

//eventlistner som lytter på tastatur knapp enter
// lese verdi av input text og legge til i list

function renderList() {
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    // bygge en knapp, for å fjerne ting fra listen igjen. Legge til og ta bort. 
    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = '-';
    liElement.appendChild(buttonRemove)
    ulShoppingListElement.appendChild(liElement);
    buttonRemove.addEventListener('click', () => {
        console.log(liElement)
        ulShoppingListElement.removeChild(liElement);
    })
}