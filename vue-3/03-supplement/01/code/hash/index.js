document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', (event) => {
    console.log('哈希值发生了变化', window.location.hash);

    renderPage(window.location.hash);
  });
});

function renderPage(hash) {
  let oContent = document.querySelector('#content');
  oContent.innerHTML = hash;
}

renderPage(window.location.hash || '#home');
