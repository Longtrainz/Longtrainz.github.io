// Variables
const rank = document.getElementById('rank');
const getTitleBtn = document.querySelector('.btn-2c');

let titles = [ 
    "card1",
    'card2',
    'card3',
    'card4',
    'card52',
]



// Listeners
getTitleBtn.addEventListener('click', () => {
    rank.textContent = getTitle();
}); 
    


// Functions

let getTitle = () => {
    let title = Math.floor(Math.random() * titles.length);
    return titles[title];
 };

console.log(getTitle());