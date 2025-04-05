function showEvents(category) {
    // Hide all event sections first
    let allEventDivs = document.querySelectorAll('.event-div');
    allEventDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    // Show the selected category of events
    if (category === 'tech') {
        document.getElementById('tech-events').style.display = 'block';
    } else if (category === 'nontech') {
        document.getElementById('nontech-events').style.display = 'block';
    } else {
        document.getElementById('all-events').style.display = 'block';
    }
}

// Show all events by default on page load
window.onload = function() {
    showEvents('all');
};
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});