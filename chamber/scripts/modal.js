const nonprofitBtn = document.getElementById('nonprofitBtn')
const bronzeBtn = document.getElementById('bronzeBtn')
const silverBtn = document.getElementById('silverBtn')
const goldBtn = document.getElementById('goldBtn')

const nonprofit = document.getElementById('nonprofit')
const bronze = document.getElementById('bronze')
const silver = document.getElementById('silver')
const gold = document.getElementById('gold')

const closeNonprofit = document.getElementById('closeNonprofit')
const closeBronze = document.getElementById('closeBronze')
const closeSilver = document.getElementById('closeSilver')
const closeGold = document.getElementById('closeGold')


let activeModal = "";


nonprofitBtn.addEventListener('click', () => {
  nonprofit.showModal();
  activeModal = nonprofit
});
bronzeBtn.addEventListener('click', () => {
  bronze.showModal();
  activeModal = bronze
});
silverBtn.addEventListener('click', () => {
  silver.showModal();
  activeModal = silver
});
goldBtn.addEventListener('click', () => {
  gold.showModal();
  activeModal = gold
});


closeNonprofit.addEventListener('click', () => {
  activeModal.close();
});
closeBronze.addEventListener('click', () => {
  activeModal.close();
});
closeSilver.addEventListener('click', () => {
  activeModal.close();
});
closeGold.addEventListener('click', () => {
  activeModal.close();
});