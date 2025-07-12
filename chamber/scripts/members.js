const cards = document.querySelector(".businesscards")

async function fetchData() {
        const response = await fetch();

        if (!response.ok) {
            throw new Error(`json error! status: ${response.status}`);
        }

        const data = await response.json();
        displayMembers(data);
}


const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let contact = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = `${member.name}`;

    contact.textContent = `Address: ${member.address}\nPhone number:${member.phone}\nWebsite:${member.website}`;

    image.setAttribute('src', member.imageurl);
    image.setAttribute('alt', `Logo of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(contact);
    card.appendChild(image);

    cards.appendChild(card);
  });
}

fetchData()