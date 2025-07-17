document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена! Gifts Autobuy v2.2.0 by TypeStryke');
    console.log('Если что-то не работает, пиши в Telegram: https://t.me/emirveliyevrustem');

    const buttons = document.querySelectorAll('.btn-primary, .btn-success, .btn-info');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = e.target.getAttribute('href');
            console.log('Клик по ссылке:', href); 
            alert('Перехожу на ' + href + '! Если что-то сломалось, пиши мне в тг @emirveliyevrustem');
        });
    });
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                console.log('Скроллю к секции:', targetId); // Логи как в моём стиле
            }
        });
    });
    setTimeout(() => {
        alert('Добро пожаловать в Gifts Autobuy! Не забывайте, что это только для некоммерческого использования. Пишите в Telegram если что!');
        console.log('Показал приветственное уведомление');
    }, 5000);
});