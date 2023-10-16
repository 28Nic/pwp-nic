

const carousel = document.querySelector("#lessons .carousel")
const lessonsBtn = document.getElementById('lessonsBtn')
const lessonsArray = document.querySelectorAll("#lessons .carousel-item")


let lessonsWidth = 0

// calculates length of content based on window size
if (window.innerWidth < 768) {
    lessonsArray.forEach((element) => {
        lessonsWidth += element.offsetWidth
    })
} else {
    lessonsArray.forEach((element, i) => {
        if (i < lessonsArray.length - 3) {
            lessonsWidth += element.offsetWidth
        }
    })
}

// same as above but recalculates every time window is resized
window.addEventListener("resize", (event) => {
    lessonsWidth = 0
    if (window.innerWidth < 768) {
        lessonsArray.forEach((element) => {
            lessonsWidth += element.offsetWidth
        })
    } else {
        lessonsArray.forEach((element, i) => {
            if (i < lessonsArray.length - 3) {
                lessonsWidth += element.offsetWidth
            }
        })
    }
})

// how far carousel has currently scrolled
let scrollDistance = 0
lessonsBtn.addEventListener("click", (event) => {
    // determines post it width based on window size
    let postItWidth
    if (window.innerWidth < 768) {
        postItWidth = window.innerWidth
    } else {
       postItWidth = window.innerWidth / 4
    }
    // sets how far carousel needs to scroll
    scrollDistance += (postItWidth - 10)
    // looping back to the front of carousel
    if (scrollDistance >= lessonsWidth) {
        scrollDistance = 0
        carousel.scrollTo(scrollDistance, 0)
        // moving through carousel
    } else {
    carousel.scrollTo(scrollDistance, 0)
    }
})

