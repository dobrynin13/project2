function moveRight () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 40, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, PCA96852)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.pause(500)
}
function moveForvard () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 40, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 40, PCA96852)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
}
function turnL () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 15, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 25, PCA96852)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # .
        . # . # .
        . . . # .
        `)
    basic.pause(500)
}
function moveBack () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 40, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 40, PCA96852)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    music.playTone(440, music.beat(BeatFraction.Breve))
    basic.pause(500)
}
function moveStop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, PCA96852)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.pause(500)
}
function moveLeft () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 40, PCA96852)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.pause(500)
}
function turnR () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 25, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 15, PCA96852)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # #
        . # . # .
        . # . . .
        `)
    basic.pause(500)
}
let PCA96852 = 0
let strip: neopixel.Strip = null
basic.clearScreen()
pins.analogSetPitchPin(AnalogPin.P0)
music.setVolume(40)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
music.playMelody("C5 D E A E - A C ", 220)
let n = 1
strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB_RGB)
strip.setBrightness(255)
strip.clear()
PCA96852 = 67
PCA9685.init(PCA96852, 0)
PCA9685.reset(PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, PCA96852)
let light_sen = 0
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(25)
})
basic.forever(function () {
    if (input.isGesture(Gesture.ThreeG)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(2000)
        n += 0
    } else if (n) {
        strip.showRainbow(1, 360)
        strip.show()
        basic.pause(1000)
    }
})
basic.forever(function () {
    light_sen = pins.analogReadPin(AnalogPin.P1)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, pins.map(
    light_sen,
    0,
    1023,
    0,
    100
    ), PCA96852)
    moveForvard()
    moveStop()
    moveLeft()
    moveRight()
    moveBack()
    moveStop()
    turnL()
    moveForvard()
    turnR()
    moveStop()
})
