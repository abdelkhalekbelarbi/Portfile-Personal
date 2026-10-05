const tablinks = document.querySelectorAll(".tab-links");
const tabcontent = document.querySelectorAll(".tab-content");

function opentab(tabname, event) {

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabconten of tabcontent) {
        tabconten.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

///Dom:
const menu=document.querySelector(".menu");
function closeMenu() {
menu.style.right="-250px";
}
function showMenu() {
menu.style.right="0";
}



// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});