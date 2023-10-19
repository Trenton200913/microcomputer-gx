enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    linebeacon.start("MC GX 100222001")
})
function GX_Code_Engine_start () {
    serial.writeLine("GX 20009")
    if (true) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . # . # .
            . . . . .
            `)
        basic.pause(500)
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
    }
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
	
})
input.onButtonPressed(Button.A, function () {
    turtle.setBrightness(128)
    turtle.back(1)
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
    for (let index = 0; index < 100; index++) {
        turtle.forward(1)
        basic.pause(100)
        turtle.forward(1)
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
	
})
GX_Code_Engine_start()
basic.forever(function () {
	
})
