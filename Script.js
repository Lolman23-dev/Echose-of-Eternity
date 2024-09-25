const header = document.querySelector('header');
const sections = document.querySelectorAll('section');

header.addEventListener('click', () => {
  sections.forEach((section) => {
    section.classList.toggle('active');
  });
});
