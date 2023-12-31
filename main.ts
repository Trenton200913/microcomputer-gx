enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    serial.writeLine("https://sites.google.com/stu.ballard.kyschools.us/tmb-ltd/home         Are Website")
})
function GX_Code_Engine_start () {
    serial.writeLine(" MicroComputer 480")
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        `)
    basic.clearScreen()
    basic.showString("Microcomputer 480 (C) 2023 TMB LTD")
}
input.onButtonPressed(Button.A, function () {
    if (true) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        turtle.forward(1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        turtle.forward(1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        turtle.forward(1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        turtle.forward(2)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        turtle.forward(2)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        turtle.forward(2)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # . # #
            # . . . #
            # # # # #
            `)
    } else if (0 == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # . # #
            # . . . #
            . # # # .
            `)
    } else if (0 == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (0 == 0) {
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    } else if (0 == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("ScreenSaver on")
    for (let index = 0; index < 20; index++) {
        if (true) {
            turtle.forward(1)
            if (true) {
                for (let index = 0; index < 20; index++) {
                    turtle.forward(1)
                    if (true) {
                        turtle.forward(1)
                        basic.pause(100)
                        turtle.back(1)
                    }
                    if (true) {
                        for (let index = 0; index < 20; index++) {
                            if (true) {
                                basic.pause(100)
                                turtle.forward(1)
                            }
                        }
                    }
                }
            }
        }
    }
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    control.waitForEvent(10, 5)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
GX_Code_Engine_start()
basic.forever(function () {
    radio.setGroup(1)
})
