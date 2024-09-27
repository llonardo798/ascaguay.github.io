class MenuHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    fetch('header/menu-header.html')
      .then(response => response.text())
      .then(html => {
        shadow.innerHTML = html;

        const stylesheets = ['./styles.css', 'header/menu-header.css',];

        stylesheets.forEach(href => {
          const linkElem = document.createElement('link');
          linkElem.setAttribute('rel', 'stylesheet');
          linkElem.setAttribute('href', href);
          shadow.appendChild(linkElem);
        })
      });
  }
}

customElements.define('menu-header', MenuHeader);


