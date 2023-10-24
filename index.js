const cups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => toggleCup(idx));
});

function toggleCup(idx) {
    cups[idx].classList.toggle('full');

    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = cups.length;

    updatePercentage(fullCups, totalCups);
    updateRemaining(fullCups);
}

function updatePercentage(fullCups, totalCups) {
    const percent = (fullCups / totalCups) * 100;
    percentage.style.height = `${percent}%`;
    percentage.innerText = `${percent}%`;
    percentage.style.visibility = fullCups === 0 ? 'hidden' : 'visible';
}

function updateRemaining(fullCups) {
    const remainingLiters = 2 - (0.25 * fullCups);
    liters.innerText = `${remainingLiters}L`;
    remained.style.visibility = fullCups === cups.length ? 'hidden' : 'visible';
}
