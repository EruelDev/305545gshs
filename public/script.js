feather.replace();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const icon = mobileMenuButton.querySelector('i');
  if (mobileMenu.classList.contains('hidden')) {
    feather.replace();
  } else {
    icon.setAttribute('data-feather', 'x');
    feather.replace();
  };
});

function acadsFn() {
  document.getElementById("acadsDropdown").classList.toggle("show");
};

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var acadsDropdown = document.getElementById("acadsDropdown");
    if (acadsDropdown.classList.contains('show')) {
      acadsDropdown.classList.remove('show');
    };
  };
};

document.addEventListener('DOMContentLoaded', function () {
  feather.replace();

  const gradeLevel = document.getElementById('grade_level');
  const strandContainer = document.getElementById('strand_container');

  gradeLevel.addEventListener('change', function () {
    if (this.value >= 11) {
      strandContainer.classList.remove('hidden');
    } else {
      strandContainer.classList.add('hidden');
    }
  });

  const form = document.getElementById('application_form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    form.reset();
    strandContainer.classList.add('hidden');
  });
});