const animatedItems = document.querySelectorAll(
  '.offer-box, .item-box, .card, .service-card'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

animatedItems.forEach(el => {
  el.classList.add('animate');
  observer.observe(el);
});

// HERO BUTTON RIPPLE EFFECT
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});

// SERVICE ICON ROTATE ON HOVER
document.querySelectorAll('.icon-box i').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'rotate(360deg)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'rotate(0deg)';
  });
});
