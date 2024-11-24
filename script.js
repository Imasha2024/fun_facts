document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        { "fact": "Honey never spoils." },
        { "fact": "A single strand of spaghetti is called a spaghetto." },
        { "fact": "Octopuses have three hearts." },
        { "fact": "Bananas are berries, but strawberries aren't." },
        { "fact": "A group of flamingos is called a 'flamboyance'." },
        { "fact": "The Eiffel Tower can be 15 cm taller during the summer." },
        { "fact": "Some cats are allergic to humans." },
        { "fact": "The majority of your brain is fat." },
        { "fact": "The unicorn is the national animal of Scotland." },
        { "fact": "Bees sometimes sting other bees." }
    ];

    const factDisplay = document.getElementById('fact-display');
    const newFactButton = document.getElementById('new-fact-button');

    newFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex].fact;
    });
});
