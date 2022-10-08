const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switcher');

checkbox.addEventListener('change', function() {
  body.classList.toggle('dark-theme');
});