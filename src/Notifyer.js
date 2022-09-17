const Notifyer = {
    init: async () => await Notification.requestPermission().then( permission => {
        if (permission !== "granted") {
            throw new Error("Permission denied!")
        }
    }),
    notify({title, body, icon}) {
        return () => new Notification(title, {
            body,
            icon
        })
    },
}

export { Notifyer }