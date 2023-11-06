enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
	
})
function GX_Code_Engine_start () {
    serial.writeLine("GX 20009")
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
    basic.showNumber(10011001)
    basic.clearScreen()
    basic.showString("GX engine Starting")
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
    if (true) {
        if (true) {
            basic.showString("Welcome to the light optimizer")
            turtle.setBrightness(100000)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    linebeacon.startWithDeviceMessage(
    "0f0f0f0f0f",
    "1a2b3c4d5e6f70809010a0b0c0"
    )
})
input.onButtonPressed(Button.B, function () {
    turtle.setBrightness(128)
    turtle.forward(1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("ScreenSaver on")
    for (let index = 0; index < 10; index++) {
        turtle.forward(1)
        for (let index = 0; index < 10; index++) {
            turtle.forward(1)
            if (true) {
                turtle.forward(1)
                basic.pause(100)
                turtle.back(1)
            }
        }
        for (let index = 0; index < 10; index++) {
            if (true) {
                basic.pause(100)
                turtle.forward(1)
            }
        }
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
	
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
GX_Code_Engine_start()
basic.forever(function () {
    radio.setGroup(1)
})
loops.everyInterval(3600000, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . . #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . . #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . . #
        # . . . #
        . # # # .
        `)
})
