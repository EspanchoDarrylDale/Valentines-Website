// Array of different texts for the "No" button
const noTexts = [
    "Are you sure, Boo?",
    "Are you really sure though?",
    "Maybe you should think again?",
    "Last chance, Adi...",
    "Sure na jud?",
    "Mag mahay ka.",
    "Hunaa imong decision please.",
    "This could be a mistake.",
    "Have a heart, Boo..",
    "You're so cold, man...",
    "Maybe now you'll say yes?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart...",
    "This time, yes?",
    "Yes?"
];


// Initialize index to keep track of the current text
let currentIndex = 0;
// Initialize counter to keep track of the number of "No" button clicks
let clickCount = 0;

document.getElementById('no').addEventListener('click', function() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    
    // Get the current text from the array
    const newText = noTexts[currentIndex];
    
    // Change text of "No" button
    noButton.textContent = newText;
    
    // Increase size of "Yes" button by 15% until the 8th click
    if (clickCount < 8) {
        const computedStyle = window.getComputedStyle(yesButton);
        const currentFontSize = parseFloat(computedStyle.fontSize);
        yesButton.style.fontSize = (currentFontSize * 1.2) + 'px'; // Increase font size by 15%
    } else if (clickCount < 16) {
        // Increase size of "Yes" button exponentially after the 8th click
        const computedStyle = window.getComputedStyle(yesButton);
        const currentFontSize = parseFloat(computedStyle.fontSize);
        yesButton.style.fontSize = (currentFontSize * 1.1) + 'px'; // Double the font size
    } else {
        // Hide "No" button and expand "Yes" button to take up entire screen after 17th click
        noButton.style.display = 'none';
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.fontSize = '2em';
    }
    
    // Increment index or reset to 0 when reaching the end of the array
    currentIndex = (currentIndex + 1) % noTexts.length;
    
    // Increment click count
    clickCount++;
});

document.getElementById('yes').addEventListener('click', function() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const text = document.querySelector('h1');
    const gif = document.querySelector('.gif');

    // Hide "Yes" and "No" buttons
    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    // Change text
    text.textContent = "Yay! You will receive your invitation in a few hours!";
    text.style.fontFamily = "Georgia, serif";

    // Change GIF
    gif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"; // Replace with the URL of the new GIF
});
