if (Notification.permission !== "granted") Notification.requestPermission()

const notify = (title, body) => {
    if (Notification.permission !== "granted") return
    new Notification(title, {body: body})
}