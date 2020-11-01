const boardContainerElement = document.querySelector('.board-container');
const newGameButton = document.querySelector('.new-game-btn');
const triesCounterView = document.querySelector('.tries-counter');

class View {
    constructor() {
        this.displayCards();
        this.hideButton();
    }

    displayCards = () => {
        const game = new Game();
        game.createCards();
    };

    hideButton = () => {
        newGameButton.style.display = 'none';
    };
}

const view = new View();

newGameButton.addEventListener('click', () => {
    boardContainerElement.innerHTML = '';
    triesCounterView.innerHTML = '0';
    new View();
});
