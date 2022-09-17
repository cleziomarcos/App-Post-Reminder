import { Notifyer } from "./Notifyer.js.js"
import { Timer } from "./Timer.js"
import { Emitter } from "./Emiter.js"

const notify = Notifyer.notify({
    title: "Hora do post",
    body: "Crie algum post para ajudar a comunidade"
})

const App = {
    async start() {
        console.log("Started")
        try {
            await Notifyer.init()

            Emitter.on("countdown-start", notify)
            Emitter.on("countdown-end", Timer.init)

            Timer.init(.5)

        } catch (error) {
            console.log(error.message)
        }
    }
}

export { App }