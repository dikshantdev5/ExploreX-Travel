// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Smooth active nav highlighting using IntersectionObserver
const sections = document.querySelectorAll('main section, #home');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = { root: null, rootMargin: '0px', threshold: 0.52 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const id = entry.target.id;
      const link = document.querySelector('.main-nav a[href="#' + id + '"]');
      if (link) link.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach(sec => observer.observe(sec));

// Destination modal
const viewBtns = document.querySelectorAll('.view-btn');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

viewBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.dest-card');
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});

// Contact form handling (client-side only)
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    formMsg.style.color = 'crimson';
    formMsg.textContent = 'Please fill all fields.';
    return;
  }

  // Simulate sending
  formMsg.style.color = 'green';
  formMsg.textContent = 'Thanks — your message has been sent (demo).';
  this.reset();

  // Clear message after 4 sec
  setTimeout(() => { formMsg.textContent = ''; }, 4000);
});
