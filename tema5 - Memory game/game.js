const triesCounter = document.querySelector('.tries-counter');
const newGameBtn = document.querySelector('.new-game-btn');

const cards = [
    {
        id: 1,
        face: './images/img1.jpg',
        back: './images/card-back.png',
        position: 'first',
    },
    {
        id: 1,
        face: './images/img1.jpg',
        back: './images/card-back.png',
        position: 'second',
    },
    {
        id: 2,
        face: './images/img2.jpg',
        back: './images/card-back.png',
        position: 'first',
    },
    {
        id: 2,
        face: './images/img2.jpg',
        back: './images/card-back.png',
        position: 'second',
    },
    {
        id: 3,
        face: './images/img3.jpg',
        back: './images/card-back.png',
        position: 'first',
    },
    {
        id: 3,
        face: './images/img3.jpg',
        back: './images/card-back.png',
        position: 'second',
    },
    {
        id: 4,
        face: './images/img4.jpg',
        back: './images/card-back.png',
        position: 'first',
    },
    {
        id: 4,
        face: './images/img4.jpg',
        back: './images/card-back.png',
        position: 'second',
    },
    {
        id: 5,
        face: './images/img5.jpg',
        back: './images/card-back.png',
        position: 'first',
    },
    {
        id: 5,
        face: './images/img5.jpg',
        back: './images/card-back.png',
        position: 'second',
    },
];

class Game {
    constructor() {
        this.cardElements = [];
        this.cardStatus = [];
        this.rightMoves = 0;
        this.cards = cards;
        this.tries = 0;
    }

    createCards = () => {
        const cards = this.mixCards();
        cards.map((card) => {
            this.cardElements.push(
                new Card(card, this.onUserSelect.bind(this))
            );
        });
    };

    onUserSelect = (data) => {
        this.setTries();
        console.log('here1: ', this.cardStatus);
        this.cardStatus.push(data);

        console.log('here2: ', this.cardStatus);

        if (this.cardStatus.length === 3) {
            if (
                this.cardStatus[0].id !== this.cardStatus[1].id &&
                this.tries % 2 === 1
            ) {
                const cardsToCheck = this.cardStatus.splice(0, 2);

                cardsToCheck.forEach((selectedCard) => {
                    const cards = document.querySelectorAll(
                        `[data-id='${selectedCard.id}']`
                    );
                    const cardDataPosition = cards[0].getAttribute(
                        'data-position'
                    );

                    cardDataPosition === selectedCard.position
                        ? this.verifyCard(cards, 0)
                        : this.verifyCard(cards, 1);
                });
            } else {
                this.cardStatus = [this.cardStatus[2]];
                this.rightMoves++;
            }
        }

        this.wonMessage();
    };

    mixCards = () => {
        // console.log(this.cards);
        let cardsNr = this.cards.length;

        while (cardsNr) {
            console.log(cardsNr);
            this.cards.push(this.cards.splice(this.setRandomNr(cardsNr), 1)[0]);
            cardsNr -= 1;
        }
        // console.log(this.cards);
        return this.cards;
    };

    setTries = () => {
        this.tries++;
        triesCounter.innerHTML = this.tries;
    };

    setRandomNr = (upperLimit) => Math.floor(Math.random() * upperLimit);

    verifyCard = (cards, index) => {
        const selectedCardFace = cards[index].querySelector('.face');
        const selectedCardBack = cards[index].querySelector('.back');
        selectedCardBack.style.display = 'block';
        selectedCardFace.style.display = 'none';
    };

    wonMessage = () => {
        if (
            this.rightMoves + 1 === this.cards.length / 2 &&
            this.cardStatus.length === 2
        ) {
            alert(`You won! You solved it in ${this.tries} moves!`);
            newGameButton.style.display = 'block';
        }
    };
}
