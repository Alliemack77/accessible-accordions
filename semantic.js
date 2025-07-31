const accordions = document.querySelectorAll('.accordion')

accordions.forEach((item, index) => {

    item.addEventListener('click', () => {

        for(i = 0; i < accordions.length; i++) {
            if(i == index) continue
            accordions[i].removeAttribute('open')
        }
    })
})







