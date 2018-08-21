// Variables
const rank = document.getElementById('rank');
const getTitleBtn = document.querySelector('.btn-2c');



// Listeners
getTitleBtn.addEventListener('click', () => {
    rank.textContent = getTitle() + ', ' + getTitle() + ', ' + getTitle() ;
}); 
    


// Functions
let getTitle = () => {
    const titles = getRanks();
    let randomIndex = Math.floor(Math.random() * titles.length);

    return titles[randomIndex];
 };

console.log(getTitle());