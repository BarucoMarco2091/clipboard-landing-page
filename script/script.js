const cardData = [
    {icon: "../assets/logo-google.png"},
    {icon: "../assets/logo-ibm.png"},
    {icon: "../assets/logo-microsoft.png"},
    {icon: "../assets/logo-hp.png"},
    {icon: "../assets/logo-vector-graphics.png"},
];

function createCards() {
    const gridContainer = document.querySelector('.second-grid-container');
    cardData.forEach((item) => {
        const newGridContainer = document.createElement('div');
        newGridContainer.className = 'new-grid';
        const newCard = document.createElement('div');
        newCard.className = 'new-card';
        newCard.innerHTML = 
        `
        <img class="new-card-img" src="${item.icon}" alt="icon" loading="lazy">
        `
        gridContainer.appendChild(newGridContainer);
        newGridContainer.appendChild(newCard);
    });
};

document.addEventListener('DOMContentLoaded', createCards());