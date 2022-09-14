function createSideBar() {
    let sideBarDiv = document.getElementById('main_container').appendChild(document.createElement('div'));
    sideBarDiv.classList.add('side_bar_container');
    let link = sideBarDiv.appendChild(document.createElement('a'));
    link.innerHTML = "Hasan Khalid";
    link.classList.add('side_bar_text');
    link.classList.add('lato');
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
    text2.classList.add('fall');
    text2.classList.add('lato');
    let link2 = bottomDiv.appendChild(document.createElement('a'));
    link2.innerHTML = 'Back to the beginning';
    link2.setAttribute("href", "/"); 
    link2.classList.add('beginning');
    link2.classList.add('lato');
}

function doggo() {
    document.getElementById('net_art').addEventListener('mouseover', function() {
        document.getElementById('happy_doggo').classList.add('doggo_appear');
    });
    document.getElementById('net_art').addEventListener('mouseout', function() {
        document.getElementById('happy_doggo').classList.remove('doggo_appear');
    });
}