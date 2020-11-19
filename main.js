const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
]

const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const minDisplay = document.querySelector(".min")
const secDisplay = document.querySelector(".sec")
const hourDisplay = document.querySelector(".hour")
const dateDisplay = document.querySelector(".date")
const monthDisplay = document.querySelector(".month")
const dayDisplay = document.querySelector(".day")
const digitalHourDisplay = document.querySelector(".time-hour")
const digitalMinDisplay = document.querySelector(".time-min")
const meridianDisplay = document.querySelector(".meridian")

setInterval(() => {
    setTime()
}, 1000)

function setTime() {
    let dateString = new Date()
    const hour = dateString.getHours()
    const min = dateString.getMinutes()
    const sec = dateString.getSeconds()
    const date = dateString.getDate()
    const month = monthNames[dateString.getMonth()]
    const day = weekNames[dateString.getDay()]

    digitalMinDisplay.innerText = addZero(min)
    dateDisplay.innerText = addZero(date)
    monthDisplay.innerText = month
    dayDisplay.innerText = day

    if (hour === 0) {
        digitalHourDisplay.innerText = `12 : `
        meridianDisplay.innerText = "am"
    } else if (hour > 12) {
        meridianDisplay.innerText = "pm"
        digitalHourDisplay.innerText = `${addZero(hour - 12)} : `
    } else {
        meridianDisplay.innerText = "am"
        digitalHourDisplay.innerText = `${addZero(hour)} : `
    }

    secDisplay.style.transform = formatTransform((360 / 60) * sec - 90)
    minDisplay.style.transform = formatTransform((360 / 60) * min - 90)
    hourDisplay.style.transform = formatTransform((360 / 12) * hour - 90)
}

function addZero(num) {
    return ("0" + num).slice(-2)
}

function formatTransform(num) {
    return `rotateZ(${num}deg) translateX(-25px)`
}
