// Get reference to form and preloader
const form = document.getElementById('eventForm');
const preloader = document.getElementById('preloader');

// Function to handle form submission
function event(e) {
    e.preventDefault(); // Prevent default form submission

    // Show preloader
    preloader.style.display = 'block';

    const stateInput = document.getElementById('stateInput');
    const stateValue = stateInput.value.trim();

    // Fetch events via POST request
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `state=${stateValue}`,
    })
    .then(response => response.text())
    .then(html => {
        // Replace events container with new HTML
        const eventsContainer = document.getElementById('events');
        eventsContainer.innerHTML = html;

        // Hide preloader
        preloader.style.display = 'none';
    })
    .catch(error => {
        console.error('Error fetching events:', error);
        // Handle error if needed
        preloader.style.display = 'none'; // Ensure preloader is hidden on error
    });
}

// Event listener for form submission
form.addEventListener('submit', event);
