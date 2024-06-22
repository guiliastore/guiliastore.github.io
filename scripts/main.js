// Function to load HTML content
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('app').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Initialize the router
var router = new Navigo('/', { hash: true });

// Define the routes and their handlers
router
    .on('/', function() {
        loadPage('home.html');
    })
    .on('/about', function() {
        loadPage('newpage.html');
    })
    .on('/contact', function() {
        loadPage('contact.html');
    })
    .resolve();

// Update links to be navigated by Navigo
document.querySelectorAll('a[data-navigo]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        router.navigate(e.target.getAttribute('href'));
    });
});