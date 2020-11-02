const menuList = document.querySelectorAll('.main-menu__item');
const menuBtn = document.getElementById('menu-icon');

menuBtn.addEventListener('click', function () {
    // menuBtn.classList.toggle('show-menu-items');
    for (li of menuList) {
        li.classList.toggle('show-menu-items');
    }
});

function toggleMenSubmenu() {
    const toggleClass = document.querySelector('.men-dropdown-menu');
    if (toggleClass.style.display === 'none') {
        toggleClass.style.display = 'block';
    } else {
        toggleClass.style.display = 'none';
    }
}

function toggleSubmenu() {
    const submenu = document.querySelector('.men-submenu');
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'flex';
    }
}
