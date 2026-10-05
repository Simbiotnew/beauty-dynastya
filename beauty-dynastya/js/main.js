// ===== 1. Burger menu =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  burger.setAttribute('aria-expanded', isOpen);
  // labels come from data-attributes, so each language page has its own text
  burger.setAttribute('aria-label', isOpen ? burger.dataset.labelClose : burger.dataset.labelOpen);
});

// close menu after clicking a link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', burger.dataset.labelOpen);
  });
});

// ===== 2. Judges filter =====
// Only .judge cards are filtered — participants use .participant, so they stay visible
const filterButtons = document.querySelectorAll('.filter__btn');
const judges = document.querySelectorAll('.judge');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    filterButtons.forEach((btn) => btn.setAttribute('aria-pressed', btn === button));

    judges.forEach((judge) => {
      judge.hidden = category !== 'all' && judge.dataset.category !== category;
    });
  });
});

// ===== 3. Photo not found -> show initials =====
document.querySelectorAll('.photo img').forEach((img) => {
  const removeImg = () => img.remove();

  if (img.complete && img.naturalWidth === 0) {
    removeImg(); // already failed before the script ran
  } else {
    img.addEventListener('error', removeImg);
  }
});

// ===== 4. Current year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();
