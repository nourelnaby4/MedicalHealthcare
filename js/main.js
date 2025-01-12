const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);
    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);

});

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// FAQ
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');
    const faqAnswer = item.querySelector('.faq__answer');
    
    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        faqAnswer.style.height = '0px';
        if (isOpen) {
            faqAnswer.style.height = `${faqAnswer.scrollHeight}px`; // Set height to content height
        } else {
            faqAnswer.style.height = '0px'; // Collapse to height 0
        }

        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.classList = `${iconClass} text-2xl`;
    });
});

// const sr = ScrollReveal({
//     origin: 'bottom',
//     distance: '60px',
//     duration: 2500,
//     delay: 500,
//     reset: true
// });

// sr.reveal('.stats__item',{
//     origin: 'top',
//     distance: '100px',
//     delay: 100,
//     interval: 100
// });
// sr.reveal('.services_item',{
//     origin: 'bottom',
//     distance: '100px',
//     delay: 100,
//     interval: 100
// });


// sr.reveal('.blog__title',{
//     origin: 'bottom',
//     distance: '100px',
//     delay: 100,
//     interval: 100
// });
// sr.reveal('.blog__post');

// sr.reveal('brands');
// sr.reveal('footer__logo')