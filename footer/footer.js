class Footer extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({mode: 'open'}); 
  
      fetch('footer/footer.html')
        .then(response => response.text())
        .then(html => {
          shadow.innerHTML = html; 

          const stylesheets = ['../styles.css', 'footer/footer.css', ];
                stylesheets.forEach(href => {
                    const linkElem = document.createElement('link');
                    linkElem.setAttribute('rel', 'stylesheet');
                    linkElem.setAttribute('href', href);
                    shadow.appendChild(linkElem);
                });
        });
    }
  }
  
  customElements.define('section-footer', Footer);