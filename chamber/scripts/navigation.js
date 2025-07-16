const navBtn = document.querySelector("#ham-btn")

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("show");
    navBar.classList.toggle('show');
})

const navBar = document.querySelector('#nav-bar');