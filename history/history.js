class History extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    fetch('history/history.html')
      .then(response => response.text())
      .then(html => {
        shadow.innerHTML = html;

        const stylesheets = ['../styles.css', 'history/history.css',];

        stylesheets.forEach(href => {
          const linkElem = document.createElement('link');
          linkElem.setAttribute('rel', 'stylesheet');
          linkElem.setAttribute('href', href);
          shadow.appendChild(linkElem);
        })
      });
  }
}

customElements.define('section-history', History);


// function handleInternalLinks() {
//   debugger;
//   const shadowHosts = document.querySelectorAll('section-history');
//   shadowHosts.forEach(host => {
//       if (host.shadowRoot) {
//           const internalLinks = host.shadowRoot.querySelectorAll('a[href^="#"]');
//           internalLinks.forEach(link => {
//               link.addEventListener('click', (event) => {
//                   event.preventDefault();
//                   const targetId = link.getAttribute('href').substring(1);
//                   let targetElement = document.getElementById(targetId);
//                   if (!targetElement) {
//                       targetElement = host.shadowRoot.getElementById(targetId);
//                   }
//                   if (targetElement) {
//                       targetElement.scrollIntoView({ behavior: 'smooth' });
//                   }
//               });
//           });
//       }
//   });
// }

// // Llamar a handleInternalLinks después de cargar el contenido
// window.addEventListener('load', () => {
//   setTimeout(() => {
//     handleInternalLinks();
//   }, 1500);
// });

