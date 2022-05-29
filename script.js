const secondshand = document.querySelector('.hand.seconds')
const minuteshand = document.querySelector('.hand.minutes')
const hourshand = document.querySelector('.hand.hour')

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360)
}

const setClock = () => {
    const currentDate = new Date()

    const secondsPercentage = currentDate.getSeconds() / 60
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12

    setRotation(secondshand, secondsPercentage)
    setRotation(minuteshand, minutesPercentage)
    setRotation(hourshand, hoursPercentage)
}

setClock()

setInterval(setClock, 1000)