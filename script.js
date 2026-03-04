const revealBtn = document.getElementById('revealBtn');
const promise = document.getElementById('promise');
const steps = Array.from(document.querySelectorAll('.step'));

revealBtn.addEventListener('click', () => {
  promise.classList.toggle('hidden');
  revealBtn.textContent = promise.classList.contains('hidden')
    ? 'Tap to reveal my promise'
    : 'Hide promise';
});

let current = 0;
setInterval(() => {
  steps[current].classList.remove('active');
  current = (current + 1) % steps.length;
  steps[current].classList.add('active');
}, 2200);
