let kelvin = 0
let fahrenheit = 0
let celsius = 0
input.onGesture(Gesture.Shake, () => {
    if (fahrenheit < 0) {
        basic.showString("Fricking Cold")
    } else if (fahrenheit >= 0 && fahrenheit <= 32) {
        basic.showString("Pretty Cold")
    } else if (fahrenheit > 32 && fahrenheit <= 60) {
        basic.showString("Cold")
    } else if (fahrenheit > 60 && fahrenheit <= 80) {
        basic.showString("Warm")
    } else if (fahrenheit > 80 && fahrenheit <= 100) {
        basic.showString("Hot")
    } else if (fahrenheit > 100 && fahrenheit <= 120) {
        basic.showString("Fricking Hot")
    } else {
        basic.showString("You're dead. The Temperature doesn't matter.")
    }
})
input.onButtonPressed(Button.A, () => {
    basic.pause(100)
    basic.showNumber(fahrenheit)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showString("F")
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(celsius)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showString("C")
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, () => {
    basic.clearScreen()
    basic.pause(2000)
    basic.showNumber(kelvin)
    basic.showString(".15")
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showString("K")
    basic.pause(3000)
    basic.clearScreen()
})
basic.forever(() => {
    celsius = input.temperature()
    fahrenheit = celsius * 18 / 10 + 32
    kelvin = celsius + 273
})
