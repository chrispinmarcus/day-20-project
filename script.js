const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
    const buttonRect = e.target.getBoundingClientRect()
    const xInside = e.clientX - buttonRect.left
    const yInside = e.clientY - buttonRect.top

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 500)
    })
})

