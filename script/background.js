
const setRandomBackgroundImage = () => {
    const min = 1;
    const max = 5;
    const img = `img/${Math.floor(Math.random() * (max - min)) + min}.jpg`
    document.body.style.backgroundImage = `url('${img}')`
}
