const cards = document.querySelector("#characters")
const modals = document.querySelector("#modals")
const filterBtn = document.querySelector("#filterBtn")
const chosenType = document.querySelector("#types")

let activeModal = ""
let modalDictionary = {}
let nextChar = 0

async function fetchData(type) {
        const response = await fetch("./data/characters.json");

        if (!response.ok) {
            throw new Error(`json error! status: ${response.status}`);
        }

        const data = await response.json();
        //return(data.characters)
        filterCharacters(type, data.characters)

}

const displayCharacters = (characters) => {
  characters.forEach((character) => {
    let card = document.createElement('section');
    let modal = document.createElement('dialog');
    let closeModal = document.createElement('button');
    let image = document.createElement('img');
    let description = document.createElement('p');
    let personality = document.createElement('p');
    let types = document.createElement('p');
    let atk = document.createElement('p');
    let def = document.createElement('p');
    let descriptionLabel = document.createElement('h2');
    let personalityLabel = document.createElement('h2');
    let typeLabel = document.createElement('h2');
    let atkLabel = document.createElement('h2');
    let defLabel = document.createElement('h2');

    descriptionLabel.textContent = `Description:`;
    personalityLabel.textContent = `Personality:`;
    typeLabel.textContent = `Types:`;
    atkLabel.textContent = `Atk:`;
    defLabel.textContent = `Def:`;
    closeModal.textContent = "close"

    description.textContent = `${character.description}`;
    personality.textContent = `${character.personality}`;
    types.textContent = `${character.types}`;
    atk.textContent = `${character.atk}`;
    def.textContent = `${character.def}`;

    image.setAttribute('src', character.image);
    image.setAttribute('alt', `${location.description}`);
    image.setAttribute('width', '300');
    image.setAttribute('height', '300');
    card.setAttribute('loading', 'lazy');
    modal.setAttribute('loading', 'lazy');

    card.setAttribute('class','card');
    card.setAttribute('id',nextChar);
    nextChar += 1;
    modal.setAttribute('class', '');

    const clonedImage = image.cloneNode(true);
    const clonedTypeLabel = typeLabel.cloneNode(true);
    const clonedTypes = types.cloneNode(true);
    const clonedATKLabel = atkLabel.cloneNode(true);
    const clonedATK = atk.cloneNode(true);
    const clonedDEFLabel = defLabel.cloneNode(true);
    const clonedDEF = def.cloneNode(true);

    card.appendChild(clonedImage);
    card.appendChild(clonedTypeLabel);
    card.appendChild(clonedTypes);
    card.appendChild(clonedATKLabel);
    card.appendChild(clonedATK);
    card.appendChild(clonedDEFLabel);
    card.appendChild(clonedDEF);

    modal.appendChild(closeModal);
    modal.appendChild(image);
    modal.appendChild(descriptionLabel);
    modal.appendChild(description);
    modal.appendChild(personalityLabel);
    modal.appendChild(personality);
    modal.appendChild(typeLabel);
    modal.appendChild(types);
    modal.appendChild(atkLabel);
    modal.appendChild(atk);
    modal.appendChild(defLabel);
    modal.appendChild(def);
    

    modalDictionary[card.id] = modal

    closeModal.addEventListener('click', () => {
        activeModal.close();
    });

    card.addEventListener('click', () => {
        let keyId = card.id
        let modal = modalDictionary[keyId]
        modal.showModal()
        activeModal = modal
    });

    cards.appendChild(card);
    modals.appendChild(modal);
  });
}



function filterCharacters(type, data){

    cards.replaceChildren()
    let filteredArray=""

    if(type == ""){
        filteredArray = data
    } else{
        filteredArray = data.filter(character => character.types.includes(type));
    }
    displayCharacters(filteredArray)
}

filterBtn.addEventListener('click', () => {
    fetchData(chosenType.value)
});


function displayModal(){

}

fetchData("")