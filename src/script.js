// core version + navigation, pagination modules:
import Swiper from '/swiper';
import { Navigation} from '/swiper/modules';
// import Swiper and modules styles
import '/swiper/css';
import '/swiper/css/navigation';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    breakpoints: {
       768: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next'
    },
    slidesPerView: 1,
    spaceBetween: 0
});






// const carousel = document.querySelector("#lessons .carousel")
// const lessonsBtn = document.getElementById('lessonsBtn')
// const lessonsArray = document.querySelectorAll("#lessons .carousel-item")


// let lessonsWidth = 0
// lessonsArray.forEach((element) =>{
//     lessonsWidth += element.offsetWidth
// })
//
// let scrollDistance = 0
// lessonsBtn.addEventListener("click", (event) => {
//     let postItWidth
//     if (window.innerWidth < 768) {
//         postItWidth = window.innerWidth
//     } else {
//        postItWidth = window.innerWidth / 4
//     }
//     scrollDistance += postItWidth
//     if (scrollDistance >= lessonsWidth) {
//         scrollDistance = 0
//         carousel.scrollTo(scrollDistance, 0)
//     } else {
//     carousel.scrollTo(scrollDistance, 0)
//     }
//     console.log(lessonsWidth)
//     console.log(scrollDistance)
// })

