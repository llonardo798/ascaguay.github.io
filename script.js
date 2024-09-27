const querySelectors = [
    { 'name': 'index.html', 'selector': '<section-home></section-home>', 'id': 'menu-inicio' },
    { 'name': 'historia.html', 'selector': '<section-history></section-history>', 'id': 'menu-reconstruyendo' },
    { 'name': 'descubre.html', 'selector': '<section-></section->', 'id': 'menu-descubre' },
    { 'name': 'proyectos.html', 'selector': '<section-projects></section-projects>', 'id': 'menu-proyectos' },
    { 'name': 'reconstruyendo.html', 'selector': '<project-reconstructing></project-reconstructing>', 'id': 'project-reconstructing' },
];

function loadcontent(url) {
    // debugger;
    const path = window.location.href.indexOf('#');
    let urlok = querySelectors.find(element => element.name === url);
    if (urlok != null && path == -1) {
        if(querySelectors.slice(0, 4).includes(url)){
            changeClassMenuSelected(url)
        }
        let query = document.getElementsByClassName('query-selector');
        query[0].innerHTML = urlok.selector;
        window.history.pushState(null, url);
    }
}

window.addEventListener('load', () => {
    // debugger;
    const path = new URLSearchParams(window.location.search).get('path');
    if (path != null) {
        loadcontent(path);
    }
});

window.addEventListener('popstate', (event) => {
    // debugger;
    const path = window.location.pathname.substring(1);
    loadcontent(path);
});

function changeUrl(event, url) {
    event.preventDefault();
    loadcontent(url);
    
}

function changeClassMenuSelected(url) {
    // debugger;
    const shadowHost = document.querySelector('menu-header');
    const shadowRoot = shadowHost.shadowRoot;
    const allElements = shadowRoot.querySelectorAll('.selected')[0];

    allElements.classList.remove("selected");

    let urlok = querySelectors.find(element => element.name === url);
    const element = shadowRoot.querySelector(`#${urlok.id}`);
    element.classList.add('selected');
}

function scrollToMemorie(targetId) {
    const target = document.querySelectorAll('section-history')[0].shadowRoot.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
}