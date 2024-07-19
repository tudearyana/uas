// navbarLoader.js

document.addEventListener('DOMContentLoaded', function () {
    const navbarPlaceholder = document.getElementById('navbarPlaceholder');

    fetch('../asset-view/navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});



