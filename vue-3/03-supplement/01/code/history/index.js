document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[data-link]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // 阻止默认事件
      e.preventDefault();

      const href = link.getAttribute('href');
      history.pushState(null, null, href);
      renderPage(href);
    });
  });
});

function renderPage(hash) {
  let oContent = document.querySelector('#content');
  oContent.innerHTML = hash;
}

renderPage(window.location.pathname || '/home');