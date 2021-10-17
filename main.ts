input.onButtonPressed(Button.A, function () {
    if (decimale1 < decimale2) {
        basic.showString("<")
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showString("<")
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    decimale1 = randint(1, 1000) / randint(1, 1000)
    decimale2 = randint(1, 1000) / randint(1, 1000)
    basic.showNumber(decimale1)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showNumber(decimale2)
})
input.onButtonPressed(Button.AB, function () {
    if (decimale1 == decimale2) {
        basic.showString("=")
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showString("=")
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (decimale1 > decimale2) {
        basic.showString(">")
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showString(">")
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("CONFRONTO DECIMALI")
    basic.showString("A<")
    basic.pause(1000)
    basic.showString("B>")
    basic.pause(1000)
    basic.showString("A+B=")
    basic.pause(1000)
    basic.showString("SHAKE!")
    basic.showString("- prof NM")
})
let decimale2 = 0
let decimale1 = 0
decimale1 = 0
decimale2 = 0
basic.showString("Logo=info")
