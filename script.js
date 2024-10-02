document.querySelectorAll('.more-info').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const popupId = this.getAttribute('data-popup');
        document.getElementById(popupId).style.display = 'flex';
    });
});

document.querySelectorAll('.popup .close').forEach(item => {
    item.addEventListener('click', function () {
        this.closest('.popup').style.display = 'none';
    });
});

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup')) {
        e.target.style.display = 'none';
    }
});
