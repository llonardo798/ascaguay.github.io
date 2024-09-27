class ElGuayabo extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      fetch('history/memories/el_guayabo.html')
        .then(response => response.text())
        .then(html => {
          shadow.innerHTML = html;
  
          const stylesheets = ['./styles.css', 'history/memories/el_guayabo.css',];
  
          stylesheets.forEach(href => {
            const linkElem = document.createElement('link');
            linkElem.setAttribute('rel', 'stylesheet');
            linkElem.setAttribute('href', href);
            shadow.appendChild(linkElem);
          })
        });
    }
  }
  
  customElements.define('section-el-guayabo', ElGuayabo);
  
  
  