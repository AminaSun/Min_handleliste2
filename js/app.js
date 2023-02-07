//setter inn input
const inputElement = document.getElementById('product');
//Henter knapp/butoon
const buttonAddElement = document.getElementById('add-button');
//hente liste
const ulShoppingListElement = document.getElementById('shopping-list');

//eventListner som lytter på click hendelse på knapp
// lese verdi av input text og legge til i list (Dette er fra Carlo sin gihub må prøve den selv)
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
    ulShoppingListElement.appendChild(liElement);
}