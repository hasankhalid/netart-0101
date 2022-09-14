let i = 0;
let speed = 70; /* Duration per character in ms */

function runTypeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(runTypeWriter, speed);
    }
    else {
        let location = window.location.href.split('/');
        location = location[location.length - 1];
        (location.includes('stage5') || location.includes('stage6')) && document.getElementById('sun_button').classList.add('sun_appear');
        location.includes('stage7') && document.getElementById('buttons_container').classList.add('buttons_appear');
    }
}