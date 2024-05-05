// script.js
navbar = document.getElementById("Home")
function toggleMenu() {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
  }
  
function aboutme(){
  console.log("berhasil di click");
}


var element = document.getElementById("aboutme");


function showAboutMyself(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    // Hide other content and show About Myself content
    document.getElementById('aboutmyself-content').style.display = 'block';
    document.getElementById('mybackground-content').style.display = 'none';
    document.getElementById('myfavmusic-content').style.display = 'none';
    document.getElementById('aboutgym-content').style.display = 'none';

    element.style.height = "100vh";
    
}

function showMyBackground(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    // Hide other content and show My Background content
    document.getElementById('aboutmyself-content').style.display = 'none';
    document.getElementById('mybackground-content').style.display = 'block';
    document.getElementById('myfavmusic-content').style.display = 'none';
    document.getElementById('aboutgym-content').style.display = 'none';
    element.style.height = "100vh";
}


function showMyFavMusic(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    // Hide other content and show My Fav Music content
    document.getElementById('aboutmyself-content').style.display = 'none';
    document.getElementById('mybackground-content').style.display = 'none';
    document.getElementById('myfavmusic-content').style.display = 'block';
    document.getElementById('aboutgym-content').style.display = 'none';


    if (window.innerWidth < 568) {
        element.style.height = "234vh"; // Set width for smaller screens
    }
    // Get the element by its ID and set its width

}
function showMyGym(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    // Hide other content and show My Fav Music content
    document.getElementById('aboutmyself-content').style.display = 'none';
    document.getElementById('mybackground-content').style.display = 'none';
    document.getElementById('myfavmusic-content').style.display = 'none';
    document.getElementById('aboutgym-content').style.display = 'block';
    element.style.height = "100vh";
}

