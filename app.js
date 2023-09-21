//
import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarInfo = document.querySelector('.sidebar-info');
const links = document.querySelectorAll('.nav-link');
const linksContainer = document.querySelector('.nav-links');
const hero = document.querySelector('.hero');
const navSubMenu = document.querySelector('.nav-submenu');
const nav = document.querySelector('.nav');

//sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
  sidebarInfo.innerHTML = sublinks
    .map((item) => {
      const { page, links } = item;
      return `
      <div>
      <h4>${page}</h4>
      <div class="sidebar-links">${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon} sidebar-icons"></i>${link.label}</a>`;
        })
        .join('')}</div>
      </div>
      `;
    })
    .join('');
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
    const linkContXY = linksContainer.getBoundingClientRect();
    const linkXY = link.getBoundingClientRect();

    const top = linkContXY.height;
    const left = linkXY.x + linkXY.width / 2;

    if (e.target.classList.contains('nav-link')) {
      navSubMenu.classList.add('show-submenu');
      navSubMenu.style.top = `${top}px`;
      navSubMenu.style.left = `${left}px`;
    }
  });
});

nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('nav-link')) {
    navSubMenu.classList.remove('show-submenu');
  }
});

hero.addEventListener('mouseover', function () {
  navSubMenu.classList.remove('show-submenu');
});
