const container = document.querySelector('.container1')
const text = document.querySelector('.text1')

const totalTime = 7500 
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation () {
    text.innerHTML = 'Breathe In!'
    container.className = 'container1 grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container1 shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)
