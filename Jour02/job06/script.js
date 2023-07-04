const konamiCode = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

let konamiIndex = 0;

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (key === konamiCode[konamiIndex]) {
    konamiIndex++;

    if (konamiIndex === konamiCode.length) {
      document.body.classList.add('konami');
      document.querySelector('header').classList.add('konami');
      document.querySelector('main').classList.add('konami');
      document.querySelector('footer').classList.add('konami');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});