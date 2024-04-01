document.getElementById('toggleButton').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

document.getElementById('themeToggle').addEventListener('click', function() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        this.textContent = '🌞'; // Light Mode
    } else {
        document.body.classList.add('dark-theme');
        this.textContent = '🌙'; // Dark Mode
    }
});

// Select all the menu items
const menuItems = document.querySelectorAll('.nav-menu a');

// Function to remove 'active' class from all menu items
const removeActiveClasses = () => {
menuItems.forEach(item => {
    item.classList.remove('active');
});
};

// Function to add 'active' class to the clicked menu item
menuItems.forEach(item => {
item.addEventListener('click', function() {
    removeActiveClasses();
    item.classList.add('active');
});
});
