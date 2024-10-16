// Open Modal
function openModal(title, description, price, imageSrc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal').style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal if clicked outside the content area
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Filter Menu by Category
function filterMenu(category) {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.menu-card');
    const buttons = document.querySelectorAll('.filter-button');

    // Highlight the active filter button
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-filter') === category) {
            button.classList.add('active');
        }
    });

    // Filter the cards based on category and search term
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();

        if ((category === 'all' || cardCategory === category) && cardTitle.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search Menu
function searchMenu() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const category = document.querySelector('.filter-button.active').getAttribute('data-filter');
    const cards = document.querySelectorAll('.menu-card');

    // Filter the cards based on the active category and search term
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();

        if ((category === 'all' || cardCategory === category) && cardTitle.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
