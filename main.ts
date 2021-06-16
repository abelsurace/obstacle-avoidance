let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
k_Bit.OFFLed()
basic.forever(function () {
    if (k_Bit.ultra() > 3 && k_Bit.ultra() <= 10 && k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        if (Math.randomBoolean()) {
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 80)
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 30)
            music.playTone(659, music.beat(BeatFraction.Whole))
            basic.pause(200)
        } else {
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 30)
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 80)
            music.playTone(165, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
    } else if (k_Bit.ultra() <= 10 && k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
        k_Bit.run(DIR.RunBack, 60)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(200)
    } else if (k_Bit.ultra() > 10 && k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
        k_Bit.run(DIR.RunForward, 60)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 80)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 30)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 80)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 30)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        if (Math.randomBoolean()) {
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 80)
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 30)
            music.playTone(659, music.beat(BeatFraction.Whole))
            basic.pause(200)
        } else {
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 30)
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 80)
            music.playTone(165, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
    }
})
