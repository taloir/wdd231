const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

document.querySelector("#command").innerHTML = `
<h3>Copy the text below and paste it into the Metamon discord server to finish creating your character!</h3>
<p>!setup</p>
<p>Description: ${myInfo.get('description')}</p>
<p>Personality: ${myInfo.get('personality')}</p>
<p>Types: ${myInfo.get('type')}</p>
<p>Atk: ${myInfo.get('attack')}</p>
<p>Def: ${myInfo.get('defense')}</p>
`