// Бургер-меню для мобильных
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
document.querySelector('header .container').appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Обработка формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});