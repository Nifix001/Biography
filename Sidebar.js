// Get the side bar and the button that opens it
var bar = document.getElementById("sideBar");
var sideBtn = document.getElementById("more-options"); //

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-bar")[0];

var homeLink = document.getElementById('homeLink');
var heroLink = document.getElementById( 'heroLink');
var workLink = document.getElementById('workLink');
var galleryLink = document.getElementById('galleryLink');
var newsLink = document.getElementById('newsLink');

// Function to display the side bar
function showBar() {
    bar.style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    })
}

// Function to close the side bar
function closeBar() {
    bar.style.display = "none";
}

sideBtn.addEventListener("click", showBar);
span1.addEventListener("click", closeBar);
homeLink.addEventListener("click", closeBar);
heroLink.addEventListener("click", closeBar);
workLink.addEventListener("click", closeBar);
galleryLink.addEventListener("click", closeBar);
newsLink.addEventListener("click", closeBar);

// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target == bar) {
        closeBar();
    }
});