
// export const Timer = () => {

/**
 * Defines running stage
 */
let stage = 0

const SMALL_BREAK = 5   // minutes
const LONG_BREAK  = 15  // minutes
const FOCUS       = 25  // minutes

const STAGES = [
    {
        "name": "Foco",
        "minutes": FOCUS,
    },
    {
        "name": "Pausa Curta",
        "minutes": SMALL_BREAK,
    },
    {
        "name": "Foco",
        "minutes": FOCUS,
    },
    {
        "name": "Pausa Curta",
        "minutes": SMALL_BREAK,
    },
    {
        "name": "Foco",
        "minutes": FOCUS,
    },
    {
        "name": "Pausa Longa",
        "minutes": LONG_BREAK,
    }
]

const getStageName = () => STAGES[stage].name

const getStageTime = () => STAGES[stage].minutes

const resetStage = () => stage = 0

const start = () => {
    stage = 0
    countDown()
}

const getNow = () => new Date().getTime()

const addMinutes = (initial, add) => {
    const date = new Date(initial)
    return date.setMinutes(date.getMinutes() + add)
}

const setTimer = (minutes, seconds) => {
    const timer = `${minutes}:${seconds}`
    document.getElementById('countdown').innerHTML = timer
    document.title = `${minutes}:${seconds} - ${getStageName()}`
}

const nextStage = () => {
    stage = !STAGES.stage ? resetStage() : stage + 1
    countDown()
}

const countDown = () => {
    const countDownDate = addMinutes(getNow(), getStageTime())
    let interval = setInterval(function () {
        const distance = countDownDate - getNow()
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (minutes < 10) minutes = `0${minutes}`
        if (seconds < 10) seconds = `0${seconds}`

        setTimer(minutes, seconds)
        if (distance < 0) {
            clearInterval(interval)
            nextStage()
        }
    }, 1000)
}

// }