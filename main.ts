enum RadioMessage {
    message1 = 49434
}
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
        basic.clearScreen()
        basic.showString("error 1020210020")
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . # . # .
                # . . . #
                . # . # .
                `)
        }
    }
})
function serial_code () {
    serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate115200
    )
}
input.onPinPressed(TouchPin.P2, function () {
    if (true) {
        for (let index = 0; index < 4; index++) {
            let list: number[] = []
            text_list = ["T", "M", "B"]
            list.unshift(list.removeAt(10))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    linebeacon.startWithDeviceMessage(
    "0f0f0f0f0f",
    "1a2b3c4d5e6f70809010a0b0c0"
    )
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
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("Go to TMB LTD.com for more instructions")
    }
})
let text_list: string[] = []
GX_Code_Engine_start()
basic.forever(function () {
    radio.setGroup(1)
})
control.inBackground(function () {
    basic.showString("Created with MakeCode for MicroBit")
})
