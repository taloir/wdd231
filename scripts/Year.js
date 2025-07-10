const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `Copyright ${today.getFullYear()}, Landon McConnell, USA`;