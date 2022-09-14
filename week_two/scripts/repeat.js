function createSideBar() {
    let sideBarDiv = document.getElementById('main_container').appendChild(document.createElement('div'));
    sideBarDiv.classList.add('side_bar_container');
    let link = sideBarDiv.appendChild(document.createElement('a'));
    link.innerHTML = "Hasan Khalid";
    addMultipleClasses(link, ['side_bar_text', 'lato']);
    link.setAttribute("href", "https://hasankhalid.github.io/netart-0101/index.html"); 

    let bottomDiv = document.getElementById('content_container').appendChild(document.createElement('div'));
    bottomDiv.classList.add('absolute_bottom_div');
    let netArt = bottomDiv.appendChild(document.createElement('div'));
    netArt.classList.add('net_art_div');
    netArt.setAttribute("id", "net_art"); 
    let text1 = netArt.appendChild(document.createElement('p'));
    text1.innerHTML = 'Net Art 0101';
    text1.classList.add('net_art');
    text1.addEventListener('click', function() {
        window.open('https://www.netart.lol/');
    })
    let text2 = netArt.appendChild(document.createElement('p'));
    text2.innerHTML = 'Fall 2022 | Week 2';
    addMultipleClasses(text2, ['fall', 'lato']);
    let link2 = bottomDiv.appendChild(document.createElement('a'));
    link2.innerHTML = 'Back to the beginning';
    link2.setAttribute("href", "https://hasankhalid.github.io/netart-0101/week_two/index.html"); 
    addMultipleClasses(link2, ['beginning', 'lato']);
}

function doggo() {
    document.getElementById('net_art').addEventListener('mouseover', function() {
        document.getElementById('happy_doggo').classList.add('doggo_appear');
    });
    document.getElementById('net_art').addEventListener('mouseout', function() {
        document.getElementById('happy_doggo').classList.remove('doggo_appear');
    });
}

function addMultipleClasses(el, arr) {
    for ( let i = 0 ; i < arr.length ; i++) {
        el.classList.add(arr[i]);
    }
}