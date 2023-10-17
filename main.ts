enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Line code activated")
    linebeacon.startWithDeviceMessage(
    "MC GX",
    "100111001"
    )
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
        basic.showLeds(`
            . . . . .
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . # . # .
            . . . . .
            `)
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
        timeanddate.setTime(8, 37, 0, timeanddate.MornNight.AM)
        control.waitMicros(4)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("Cast")
    radio.setGroup(1)
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Line Code closed")
    linebeacon.stop()
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    radio.sendString("Hi")
})
GX_Code_Engine_start()
basic.forever(function () {
	
})
