input.onPinPressed(TouchPin.P0, function () {
    t0 = input.runningTime()
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    t1 = input.runningTime()
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    d = t1 - t0
    v = 10000 / d
    while (true) {
        basic.showNumber(v)
        basic.showString("m/s")
    }
})
let v = 0
let d = 0
let t1 = 0
let t0 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
