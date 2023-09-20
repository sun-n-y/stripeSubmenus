//
import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.nav-link');
const linksContainer = document.querySelector('.nav-links');
const navSubMenu = document.querySelector('.nav-submenu');
const nav = document.querySelector('.nav');

//sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) {
    sidebar.classList.remove('show-sidebar');
  }
});

// mouse over submenus
links.forEach((link) => {
  link.addEventListener('mouseover', (e) => {
    if (e.currentTarget.classList.contains('nav-link')) {
      navSubMenu.classList.add('show-submenu');
    }
  });
});

nav.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('nav-link')) {
    navSubMenu.classList.remove('show-submenu');
  }
});
