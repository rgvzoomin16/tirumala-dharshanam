const revealBtn = document.getElementById('revealBtn');
const promise = document.getElementById('promise');
const steps = Array.from(document.querySelectorAll('.step'));
const actionButtons = Array.from(document.querySelectorAll('[data-action]'));
const actionStatus = document.getElementById('actionStatus');

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

const refreshActionStatus = () => {
  const doneCount = actionButtons.filter((button) => button.classList.contains('done')).length;
  actionStatus.textContent = `${doneCount} of ${actionButtons.length} completed`;

  if (doneCount === actionButtons.length) {
    actionStatus.textContent = '3 of 3 completed — Our devotional date is complete 💖';
  }
};

actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('done');
    refreshActionStatus();
  });
});
