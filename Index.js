const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// Get the modal and the button that opens it
var modal = document.getElementById("myModal");
var btn = document.getElementById("contact"); // 

// Get the side bar and the button that opens it
var bar = document.getElementById("sideBar");
var sideBtn = document.getElementById("more-options"); //


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-bar")[0];

var homeLink = document.getElementById('homeLink');
var heroLink = document.getElementById( 'heroLink');
var workLink = document.getElementById('workLink');
var galleryLink = document.getElementById('galleryLink');
var newsLink = document.getElementById('newsLink');

// Function to display the modal
function showModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}


// Function to display the side bar
function showBar() {
    bar.style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
}

// Function to close the side bar
function closeBar() {
    bar.style.display = "none";
}


// Event listeners
btn.addEventListener("click", showModal);
span.addEventListener("click", closeModal);
sideBtn.addEventListener("click", showBar);
span1.addEventListener("click", closeBar);
homeLink.addEventListener("click", closeBar);
heroLink.addEventListener("click", closeBar);
workLink.addEventListener("click", closeBar);
galleryLink.addEventListener("click", closeBar);
newsLink.addEventListener("click", closeBar);


// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target == bar) {
        closeBar();
    }
});



$(document).ready(function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("contact");

    // ... (your existing code for modal)

    function sendEmail(email, message) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/send-email', // Change this URL to your server's URL
        data: { email, message },
        success: function (response) {
        console.log(response);
        },
        error: function (error) {
        console.error(error);
        },
    });
    }

    document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var messenger = document.getElementById("email");
    var message = document.getElementById("message");
    sendEmail(messenger.value, message.value);
    closeModal();
    });
});