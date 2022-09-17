import { View } from "./View.js";
import { Emitter } from "./Emiter.js";

const Timer = {
    time: 60,

    timeToMinutes: time => Math.floor( time / 60 ),

    timeToSeconds: time => time % 60,

    timeFormat: number => String(number).padStart(2, "0"),

    rendering(time) {
        const minutes = Timer.timeFormat(Timer.timeToMinutes(time))
        const seconds = Timer.timeFormat(Timer.timeToSeconds(time))

        View.render({
            minutes, 
            seconds 
        })
    },

    init(time) {
        Timer.time = time || Timer.time
        Emitter.emit("countdown-start")
        Timer.countdown(Timer.time)
    },

    countdown(time) {
        time = time * 60
        const interval = setInterval(() => {
            time --

            Timer.rendering(time)

            if (time === 0) {
                clearInterval(interval)
                Emitter.emit("countdown-end")
            }
        }, 1000)
    }

}

export { Timer }