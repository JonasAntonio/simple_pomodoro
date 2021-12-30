
// export const Timer = () => {

/**
 * Defines running stage
 */
let stage = 0

const SMALL_BREAK = 5   // minutes
const LONG_BREAK = 15  // minutes
const FOCUS = 25  // minutes

const STAGES = [
    {
        "name": "Foco",
        "minutes": FOCUS,
        "count": 1
    },
    {
        "name": "Pausa Curta",
        "minutes": SMALL_BREAK,
        "count": 1
    },
    {
        "name": "Foco",
        "minutes": FOCUS,
        "count": 2
    },
    {
        "name": "Pausa Curta",
        "minutes": SMALL_BREAK,
        "count": 2
    },
    {
        "name": "Foco",
        "minutes": FOCUS,
        "count": 3
    },
    {
        "name": "Pausa Longa",
        "minutes": LONG_BREAK,
    }
]

const getStageName = () => STAGES[stage].name

const getStageTime = () => STAGES[stage].minutes

const getStageCount = () => STAGES[stage].count ? STAGES[stage].count : null

const nextStage = () => {
    notifyNextStage(STAGES[stage])
    stage = !STAGES[stage] ? 0 : stage + 1
    countDown()
}

const notifyNextStage = (currentStage) => notify(`Concluído`, `${currentStage.name} #${currentStage.count} concluído!`)

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
    document.getElementById('stage_title').innerHTML = `${getStageName()} #${getStageCount()}`
    document.title = `${minutes}:${seconds} - ${getStageName()}`
}

const countDown = () => {
    const countDownDate = addMinutes(getNow(), getStageTime())
    let interval = setInterval(function () {
        const distance = countDownDate - getNow()
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if (minutes < 10) minutes = `0${minutes}`
        if (seconds < 10) seconds = `0${seconds}`

        setTimer(minutes, seconds)
        if (distance <= 0) {
            clearInterval(interval)
            // playAudio()
            nextStage()
        }
    }, 1000)
}

const playAudio = () => {
    const sound = new Audio('done.wav')
    sound.play()
    sound.loop = false
    sound.playbackRate = 1
    sound.pause()
}

// }