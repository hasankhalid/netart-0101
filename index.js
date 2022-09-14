function generateNav(arr) {
    let navParent = document.getElementById('navigation_container');
    for (let i = 0; i < arr.length; i++) {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('navItem')
        navParent.appendChild(itemDiv);
        let anchor = document.createElement('a'); 
        anchor.classList.add('navItem_anchor');
        anchor.setAttribute('href', arr[i].link);
        anchor.setAttribute('aria-label', arr[i].title);
        itemDiv.appendChild(anchor);
        let underlined = document.createElement('span');
        underlined.classList.add('underline');
        underlined.innerHTML = arr[i].title;
        anchor.appendChild(underlined);
    }
}
