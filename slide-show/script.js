let slideIndex = 0;
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
slideShow(slideIndex)

const plus = (n)=>{
    slideIndex += n

    if(slideIndex == slides.length){
        slideIndex=0
    }else if(slideIndex < 0){
        slideIndex = slides.length -1
    }
    slideShow(slideIndex)
}

function slideShow(m){

    // console.log(m)
 
    slides.forEach((item, index)=>{
            slides[index].style.display = 'none'
            // console.log(dots)
            dots[index].classList.remove('active')
    })
    slides[m].style.display='block'
    dots[m].classList.add('active')
}



setInterval(() => {
    plus(1)
}, 4000);