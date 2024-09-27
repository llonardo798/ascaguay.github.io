class ProjectReconstructing extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      fetch('projects/reconstructing/reconstructing.html')
        .then(response => response.text())
        .then(html => {
          shadow.innerHTML = html;
  
          const stylesheets = ['../styles.css', 'projects/reconstructing/reconstructing.css',];
  
          stylesheets.forEach(href => {
            const linkElem = document.createElement('link');
            linkElem.setAttribute('rel', 'stylesheet');
            linkElem.setAttribute('href', href);
            shadow.appendChild(linkElem);
          })
        });
    }
  }
  
  customElements.define('project-reconstructing', ProjectReconstructing);