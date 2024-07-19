document.addEventListener('DOMContentLoaded', function () {
    const navbarPlaceholder = document.getElementById('footerPlaceholder');

    fetch('../asset-view/footer.html')
        .then(response => response.text())
        .then(data => {
            navbarPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});
