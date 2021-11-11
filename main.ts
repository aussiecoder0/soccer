input.onPinPressed(TouchPin.P0, function () {
    score += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showNumber(score)
})
input.onButtonPressed(Button.A, function () {
    score = 0
})
let score = 0
basic.showString("Hello!")
soundExpression.spring.playUntilDone()
