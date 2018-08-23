// Variables
const rank = document.getElementById('rank');
const getTitleBtn = document.querySelector('.btn-2c');



// Listeners
getTitleBtn.addEventListener('click', () => {
    let titlesArray = [];

    for(let i = 0; i < 3; i++) {
        let title = getTitle();
        if (!titlesArray.includes(title)) {
            titlesArray.push(title);
        } else {
            i--;
        }
    }
    rank.style.backgroundColor = 'bisque';
    rank.textContent = titlesArray[0] + ', ' + titlesArray[1] + ', ' + titlesArray[2] ;
}); 
    


// Functions
let getTitle = () => {
    const titles = getRanks();
    let randomIndex = Math.floor(Math.random() * titles.length);

    return titles[randomIndex];
 };

console.log(getTitle());