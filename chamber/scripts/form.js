const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

const timestamp = myInfo.get('timestamp')
timestamp.value = new Date()

document.querySelector("#results").innerHTML = `<p>Applicant: ${myInfo.get('first')} ${myInfo.get('last')}, ${myInfo.get('title')} at ${myInfo.get('company')}</p><p>Membership Level: ${myInfo.get('tier')}</p><p>Phone: ${myInfo.get('phone')}</p><p>Email: ${myInfo.get('email')}</p>`
