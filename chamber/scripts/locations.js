const cards = document.querySelector("#locations")

async function fetchData() {
        const response = await fetch("./data/discover.json");

        if (!response.ok) {
            throw new Error(`json error! status: ${response.status}`);
        }

        const data = await response.json();
        displayLocations(data.locations);
}


const displayLocations = (locations) => {
  locations.forEach((location) => {
    let card = document.createElement('div');
    let name = document.createElement('h2');
    let address = document.createElement('address');
    let description = document.createElement('p');
    let image = document.createElement('img');
    let learnbtn = document.createElement('button');

    name.textContent = `${location.name}`;

    address.textContent = `${location.address}`;
    description.textContent = `${location.description}`;

    image.setAttribute('src', location.image);
    image.setAttribute('alt', `Logo of ${location.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '300');
    image.setAttribute('height', '200');

    learnbtn.textContent = "Learn More"

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(image);
    card.appendChild(learnbtn);

    cards.appendChild(card);
  });
}

fetchData()
