const cards = document.querySelector("#businesscards")

async function fetchData() {
    const response = await fetch("./data/members.json");

    if (!response.ok) {
        throw new Error(`json error! status: ${response.status}`);
    }

    const data = await response.json();

    let spotlight = data.members.filter(member => member.tier >= 2);
    spotlight.sort(() => 0.5 - Math.random());
    let chosen = [];
    while (chosen.length < 2){
        chosen.push(spotlight.pop())
    }
    displayMembers(spotlight)
}


const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let address = document.createElement('p');
    let tier = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = `${member.name}`;

    phone.textContent = `Phone number: ${member.phone}`;
    website.textContent = `Website: ${member.website}`;
    address.textContent = `Address: ${member.address}`;
    tier.textContent = `Membership level: ${member.tier}`;

    image.setAttribute('src', member.image);
    image.setAttribute('alt', `Logo of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(address);
    card.appendChild(tier);
    cards.appendChild(card);
  });
}

fetchData()