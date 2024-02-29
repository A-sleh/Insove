// mobile nav 
const mobileNav = document.querySelector('.mnav')  ;
const closeBtn = document.querySelector('.mnav__close-btn') ;
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon') ;

const navOpenClass = 'left-0' ;
const navCloseClass = '-left-[300px]' ;
const arrowRightClass = 'fa-angle-left';
const arrowLeftClass = 'fa-angle-right';

function fixed_statues() {
    mobileNav.classList.toggle(navOpenClass) ;
    mobileNav.classList.toggle(navCloseClass) ;
    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);
}

closeBtn.addEventListener('click' ,() => {
    if(mobileNav.classList.contains('open')) {
        fixed_statues() ;
        mobileNav.classList.remove('open') ;
    }else {
        fixed_statues();
        mobileNav.classList.add('open') ;
    }
})

// swipper 
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true ,
    },
});

// faq 
const faqItems = document.querySelectorAll('.faq__item') ;

faqItems.forEach( item => {
    item.addEventListener('click', ()=>{
        const faqBtn = item.querySelector('.faq__btn') ;
        const faqAnswer = item.querySelector('.faq__answer') ;
        const isOpen = faqAnswer.classList.contains('open__faq') ;
        const innerBtn = isOpen === true ? '+' : '-' ;
        faqBtn.innerHTML = innerBtn ;
        faqAnswer.classList.toggle('open__faq') ;
    })
})









