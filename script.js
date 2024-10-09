function wrapCharacters(element) {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}


function animateText(element, delay = 50) {
    const letters = element.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.display = 'inline-block';
        letter.style.opacity = '0';
        letter.style.transform = 'translateY(20px)';
        letter.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
        
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
        }, index * delay);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1'); 
    const subtext = document.querySelector('p'); 

    
    wrapCharacters(heading);
    wrapCharacters(subtext);
    
    animateText(heading);
    setTimeout(() => animateText(subtext), heading.textContent.length * 50);
});
