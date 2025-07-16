const cards = document.querySelector("#businesscards")

async function fetchData() {
        const response = await fetch("./data/members.json");

        if (!response.ok) {
            throw new Error(`json error! status: ${response.status}`);
        }

        const data = await response.json();
        displayMembers(data.members);
}


const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = `${member.name}`;

    phone.textContent = `Phone number: ${member.phone}`;
    website.textContent = `Website: ${member.website}`;

    image.setAttribute('src', member.image);
    image.setAttribute('alt', `Logo of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
  });
}

fetchData()


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");
});
