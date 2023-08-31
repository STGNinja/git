document.addEventListener("DOMContentLoaded", function () {
    const viewSongsLink = document.getElementById("view-songs-link");
    const albumContainer = document.getElementById("album-container");
    const closeButton = document.getElementById("close-button");

    viewSongsLink.addEventListener("click", function (event) {
        event.preventDefault();
        albumContainer.style.opacity = "1";
        albumContainer.style.pointerEvents = "auto";
    });

    closeButton.addEventListener("click", function () {
        albumContainer.style.opacity = "0";
        albumContainer.style.pointerEvents = "none";
    });
});




darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    resetInactivityTimer(); // Reset the timer when the dark mode button is clicked
});


// Function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        location.href = 'index.html';
    }, 500000); // 30 seconds
}

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    resetInactivityTimer(); // Reset the timer when the menu is clicked
});

const dashElement = document.querySelector('.dash');

dashElement.addEventListener('animationend', () => {
    dashElement.style.animation = 'none'; // Remove animation
});


closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    resetInactivityTimer(); // Reset the timer when the close button is clicked
});

const clickable = document.getElementById('clickable');
const container = document.getElementById('container');
const exitButton = document.getElementById('exitButton');

clickable.addEventListener('click', () => {
  console.log('Download button clicked');
  // Handle the download logic here
});

exitButton.addEventListener('click', () => {
  console.log('Exit button clicked');
  container.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    const moreIcon = document.getElementById("more-icon");
    const threeContainer = document.getElementById("three");

    moreIcon.addEventListener("click", function () {
        threeContainer.style.display = threeContainer.style.display === "none" ? "block" : "none";
    });
});

function toggleContainer() {
    var container = document.getElementById("white-container");
    if (container.style.display === "" || container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
