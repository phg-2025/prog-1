let IR = 0
music.playTone(262, music.beat(BeatFraction.Whole))
music.rest(music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
music.rest(music.beat(BeatFraction.Whole))
basic.pause(100)
maqueen.motorStop(maqueen.Motors.M1)
led.enable(true)
led.plotBrightness(0, 0, 255)
led.plotBrightness(2, 2, 255)
led.plotBrightness(4, 4, 255)
basic.forever(function () {
	
})
basic.forever(function () {
    IR = maqueen.irRead()
    if (IR != -1) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        basic.showNumber(IR, 700)
        IR = 0
    }
})
