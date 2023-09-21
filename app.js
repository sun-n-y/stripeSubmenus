//
import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarInfo = document.querySelector('.sidebar-info');
const links = document.querySelectorAll('.nav-link');
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
    const linkXY = link.getBoundingClientRect();
    const top = linkXY.height + 7;
    const left = linkXY.left + linkXY.width / 2;
    const label = e.target.textContent;

    const filteredInfo = sublinks.filter((item) => item.page === label);
    const { page, links } = filteredInfo[0];

    let column = 'col-2';

    if (links.length === 3) {
      column = 'col-3';
    }

    if (links.length > 3) {
      column = 'col-4';
    }

    navSubMenu.innerHTML = `
    <h4 class="submenu-title">${page}</h4>
    <div class="submenu-links ${column}">${links
      .map((link) => {
        return `<a href="${link.url}" class="submenu-link"><i class="${link.icon} submenu-icons"></i>${link.label}</a>`;
      })
      .join('')}</div>
    `;

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
