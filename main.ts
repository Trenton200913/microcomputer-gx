enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    serial.writeLine("error EDP445")
})
function GX_Code_Engine_start () {
    serial.writeLine("Open For Template")
    basic.clearScreen()
    basic.showString("System Closed down | File for template")
}
GX_Code_Engine_start()
