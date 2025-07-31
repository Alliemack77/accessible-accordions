const accordions = document.querySelectorAll('.accordion')
const panels = document.querySelectorAll('.accordion-panel')

function OnKeyDown(e) {
    //space key
    if(e.keyCode === 32) {
        //prevent default scroll
        e.preventDefault()
    }

    //enter key
    if(e.keyCode === 13) {
        e.preventDefault()
        activatePanel(e)
    }
}

function OnKeyUp(e) {
    if(e.keyCode === 32) {
        e.preventDefault()
        activatePanel(e)
    }
}

function activatePanel(e) {
    e.stopPropagation()

    let btn = e.currentTarget.getAttribute('class') === "accordion-button" ? 
              e.currentTarget :
              e.currentTarget.querySelector('.accordion-button')
    let panel = document.getElementById(`${btn.getAttribute('aria-controls')}`)

    if(btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', 'false')
        panel.setAttribute('hidden', 'true')
    } else {
        btn.setAttribute('aria-expanded', 'true')
        panel.removeAttribute('hidden')
    }
}

accordions.forEach((item, index) => {
    const trigger = item.querySelector('.accordion-trigger')
    const buttonLabel = item.querySelector('.accordion-heading span').getAttribute('id')
    const btn = document.createElement('div')

    btn.classList.add('accordion-button')
    btn.setAttribute('role', 'button')
    btn.setAttribute('aria-labelledby', `toggle ${buttonLabel}`)
    btn.setAttribute('aria-controls', `panel-${index}`)
    btn.setAttribute('aria-expanded', 'false')
    btn.setAttribute('tabindex', '0')
    btn.addEventListener('click', (e) => activatePanel(e))
    btn.addEventListener('keydown', (e) => OnKeyDown(e))
    btn.addEventListener('keyup', (e) => OnKeyUp(e))

    const img = document.createElement('img')
    img.classList.add('icon-plus')
    img.setAttribute('src', './images/plus-icon.png')
    img.setAttribute('alt', '')
    img.setAttribute('height', '42')
    img.setAttribute('width', '42')

    const span = document.createElement('span')
    span.setAttribute('id', 'toggle')
    span.setAttribute('hidden', 'true')
    span.innerText = 'Toggle'

    btn.append(img)
    btn.append(span)

    trigger.prepend(btn)
    item.addEventListener('click', (e) => activatePanel(e))
    
})

panels.forEach(panel => {
    panel.setAttribute('hidden', 'true')
})