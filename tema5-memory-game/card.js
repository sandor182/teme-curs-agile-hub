const boardContainer = document.querySelector('.board-container');

class Card {
    constructor(card, callback) {
        this.callback = callback;
        this.card = card;
        this.createCardElement(card);
        this.click();
    }

    createCardElement = (card) => {
        this.cardImg = document.createElement('div');
        this.cardImg.setAttribute('data-id', card.id);
        this.cardImg.setAttribute('data-position', card.position);
        this.cardImg.classList.add('card');
        this.cardImg.innerHTML = `
            <img src=${card.back} class="back"/>
            <img src=${card.face} class="face"/>
        `;
        boardContainer.appendChild(this.cardImg);
    };

    click = () => {
        this.cardImg.addEventListener('click', this.handleClick.bind(this));
    };

    handleClick = () => {
        const shouldFlip =
            this.cardImg.querySelector('.face').style.display === 'block';

        if (shouldFlip) return;

        const selectedCardFace = this.cardImg.querySelector('.face');
        const selectedCardBack = this.cardImg.querySelector('.back');
        selectedCardBack.style.display = 'none';
        selectedCardFace.style.display = 'block';

        this.callback({
            id: this.card.id,
            position: this.card.position,
        });
    };
}
