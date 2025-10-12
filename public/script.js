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