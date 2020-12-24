namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Weapon = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tristanDirection = 2
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tristanDirection == 1) {
        sword.setPosition(Tristan.x - 5, Tristan.y)
        animation.runImageAnimation(
        Tristan,
        [img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . . f f e e e f f f f f f f . 
            . . . . e 4 4 f b e 4 4 e f f . 
            . . . . e d d f 1 4 d 4 e e f . 
            . . . . d e d d d 4 e e e f . . 
            . . e d d 4 e 4 4 e e f f . . . 
            . . . e e 4 4 2 2 2 2 f . . . . 
            . . . . f 2 e 2 2 2 2 f . . . . 
            . . . . f 5 5 4 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 2 f f f f f . . . 
            . . . . f f 2 2 e e e e e f f . 
            . . . f f 2 2 2 e e e e e e f f 
            . . . f e e e e f f f e e e e f 
            . . f e 2 2 2 2 e e e f f f f f 
            . . f 2 e f f f f f 2 2 2 e f f 
            . . f f f e e e f f f f f f f f 
            . . f e e 4 4 f b b e 4 4 e f e 
            . . . f e d d f b b 4 d 4 e e f 
            . . e e f d d d d d 4 e e e f . 
            . . d d e e 2 2 2 2 2 2 2 f . . 
            . . d d 4 4 e 5 4 4 4 4 4 f . . 
            . . e e e e f f f f f f f f . . 
            . . . . . . f f . . . f f f . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 2 f f f f . . . . 
            . . . . f f 2 f e e e e f f . . 
            . . . f f 2 2 f e e e e e f f . 
            . . . f e e e e f f e e e e f . 
            . . f e 2 2 2 2 e e f f f f f . 
            . . f 2 e f f f f 2 2 2 e f f f 
            . . f f f e e e f f f f f f f f 
            . . f e e 4 4 f b e 4 4 e f e f 
            . . . f e d d f b 4 d 4 e e f . 
            . . . . e e d d d 4 e e e f . . 
            . . . e d d e e 2 2 2 2 f . . . 
            . . . e d d 4 4 e 4 4 4 f . . . 
            . . . . e e e e f f f f f . . . 
            . . . . . . f f f f f f f f . . 
            . . . . . . . f f . . f f f . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d d 4 e e e f . . 
            . . . . f e 4 4 4 e d d f . . . 
            . . . . . . . 2 2 e d d f . . . 
            . . . . . . . 2 2 f e e . . . . 
            . . . . . . . 4 4 4 4 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        50,
        false
        )
        animation.runImageAnimation(
        sword,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c c . . . . . . . . . 
            . . . . . c d c . . . . . . . . 
            . . . . . c d d c . . . . . . . 
            . . . . . . c d d c . . . . . . 
            . . . . . . . c d d c . . . . . 
            . . . . . . . . c d c . . . . . 
            . . . . . . . . c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c c . . . . . . . . . . . . . . 
            c d c c . . . . . . . . . . . . 
            c c d d c c . . . . . . . . . . 
            . . c d d d c . . . . . . . . . 
            . . . c c d c . . . . . . . . . 
            . . . . c c c . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . c c c c c c c . . . . . . . 
            . . . d d d d d c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . . . . . c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . c d c . . . 
            . . . . . . . . . c d d c . . . 
            . . . . . . . . c d d c . . . . 
            . . . . . . . c d d c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
    } else if (tristanDirection == 2) {
        sword.setPosition(Tristan.x, Tristan.y - 5)
        animation.runImageAnimation(
        Tristan,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f . . . . 
            . . 4 d f 2 2 2 2 2 2 f . . . . 
            . . 4 4 f 4 4 4 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f . . . . 
            . . 4 d f 2 2 2 2 2 2 f . . . . 
            . . 4 4 f 4 4 4 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f . . . . 
            . . 4 d f 2 2 2 2 2 2 f . . . . 
            . . 4 4 f 4 4 4 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        50,
        false
        )
        animation.runImageAnimation(
        sword,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . c c c . 
            . . . . . . . . . . . c c 1 1 c 
            . . . . . . . . . . c c 1 1 c . 
            . . . . . . . . . . c 1 1 c . . 
            . . . . . . . . . . . . c . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . c c . . . . . . . . 
            . . . . . . c d c . . . . . . . 
            . . . . . . c 1 c . . . . . . . 
            . . . . . . c 1 c . . . . . . . 
            . . . . . . c 1 c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c . . . . . . . . . . . . 
            . . c d c . . . . . . . . . . . 
            . . c d d c . . . . . . . . . . 
            . . c c d d . . . . . . . . . . 
            . . . c . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
    } else if (tristanDirection == 3) {
        sword.setPosition(Tristan.x + 5, Tristan.y)
        animation.runImageAnimation(
        Tristan,
        [img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f . . . 
            . f f e 4 4 e b f 4 4 e . . . . 
            . f e e 4 d 4 1 f d d e . . . . 
            . . f e e e 4 d d d e d . . . . 
            . . . f f e e 4 4 e 4 d d e . . 
            . . . . f 2 2 2 2 4 4 e e . . . 
            . . . . f 2 2 2 2 e 2 f . . . . 
            . . . . f 4 4 4 4 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . f f f f f 2 f . . . . . 
            . . f f e e e e e 2 2 f f . . . 
            . f f e e e e e e 2 2 2 f f . . 
            . f e e e e f f f e e e e f . . 
            . f f f f f e e e 2 2 2 2 e f . 
            f f f e 2 2 2 f f f f f e 2 f . 
            f f f f f f f f f e e e f f f . 
            f e f e 4 4 e b b f 4 4 e e f . 
            . f e e 4 d 4 b b f d d e f . . 
            . . f e e e 4 d d d d d f e e . 
            . . . f 2 2 2 2 2 2 2 e e d d . 
            . . . f 4 4 4 4 4 5 e 4 4 d d . 
            . . . f f f f f f f f e e e e . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . . . . . f f . . . . . . 
            . . . . . f f f f 2 f f . . . . 
            . . . f f e e e e f 2 f f . . . 
            . . f f e e e e e f 2 2 f f . . 
            . . f e e e e f f e e e e f . . 
            . . f f f f f e e 2 2 2 2 e f . 
            . f f f e 2 2 2 f f f f e 2 f . 
            . f f f f f f f f e e e f f f . 
            . f e f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 b f d d e f . . 
            . . . f e e e 4 d d d e e . . . 
            . . . . f 2 2 2 2 e e d d e . . 
            . . . . f 4 4 4 e 4 4 d d e . . 
            . . . . f f f f f e e e e . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f . . f f . . . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e 4 d d d d f . . . . 
            . . . f d d e 4 4 4 e f . . . . 
            . . . f d d e 2 2 . . . . . . . 
            . . . . e e f 2 2 . . . . . . . 
            . . . . f 4 4 4 4 . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        50,
        false
        )
        animation.runImageAnimation(
        sword,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c . . . . . 
            . . . . . . . . c d c . . . . . 
            . . . . . . . c d d c . . . . . 
            . . . . . . c d d c . . . . . . 
            . . . . . c d d c . . . . . . . 
            . . . . . c d c . . . . . . . . 
            . . . . . c c c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . c c 
            . . . . . . . . . . . . c c d c 
            . . . . . . . . . . c c d d c c 
            . . . . . . . . . c d d d c . . 
            . . . . . . . . . c d c c . . . 
            . . . . . . . . . c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . c c c c c c c . . 
            . . . . . . . c d d d d d . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . c d c . . . . . . . . . . 
            . . . c d d c . . . . . . . . . 
            . . . . c d d c . . . . . . . . 
            . . . . . c d d c . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
    } else if (tristanDirection == 0) {
        sword.setPosition(Tristan.x, Tristan.y + 5)
        animation.runImageAnimation(
        Tristan,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            f d f e e d d d d d 4 e f f . . 
            f b f f e e 4 4 4 e d d 4 e . . 
            f b f 4 f 2 2 2 2 e d d e . . . 
            f c f . f 2 2 . . . e e . . . . 
            . f f . f 4 4 . . . 4 f . . . . 
            . . . . f f f . . . f f . . . . 
            . . . . . f . . . f f . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 2 2 f f . . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f e e e e e e e e e e f f . 
            . f f e 2 2 2 2 2 2 2 2 e f f . 
            . f f f f f e e e e f f f f f . 
            f d f e f b f 4 4 f b f e f f . 
            f b f e 4 1 f d d f 1 4 e f . . 
            f b f f e 4 d d d d 4 e f e . . 
            f c f e f 2 2 2 2 2 f 4 e . . . 
            . f f 4 f 4 4 5 5 4 f 4 e . . . 
            . . . . f f f f f f d d e . . . 
            . . . . . f f f f e d d e . . . 
            . . . . . . . . . . e e . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 2 2 f f . . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f e e e e e e e e e e f f . 
            . f f e 2 2 2 2 2 2 2 2 e f f . 
            . f f f f f e e e e f f f f f . 
            f d f e f b f 4 4 f b f e f f . 
            f b f e 4 1 f d d f 1 4 e f . . 
            f b f f e 4 d d d d 4 e f e . . 
            f c f e f 2 2 2 2 2 f 4 e . . . 
            . f f 4 f 4 4 5 5 4 f 4 e . . . 
            . . . . f f f f f f d d e . . . 
            . . . . . f f f f e d d e . . . 
            . . . . . . . . . . e e . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        50,
        false
        )
        animation.runImageAnimation(
        sword,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c c c . . . . . . . . 
            . . . . . c d c . . . . . . . . 
            . . . . . d d c . . . . . . . . 
            . . . . d d c . . . . . . . . . 
            . . c d d c . . . . . . . . . . 
            . . c d c . . . . . . . . . . . 
            . . c c . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . c c 1 c c . . . . . 
            . . . . . . . c 1 c . . . . . . 
            . . . . . . . c 1 c . . . . . . 
            . . . . . . . c 1 c . . . . . . 
            . . . . . . . c 1 c . . . . . . 
            . . . . . . . . c c . . . . . . 
            . . . . . . . . . c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c . . . . . 
            . . . . . . . . c 1 c . . . . . 
            . . . . . . . . c 1 1 c . . . . 
            . . . . . . . . . c 1 1 c . . . 
            . . . . . . . . . . c 1 c . . . 
            . . . . . . . . . . . c c . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
    }
    tristanAnimateState = -1
    weaponAnimationTime = game.runtime()
})
function setAnimation () {
    if (tristanDirection == 0) {
        if (controller.down.isPressed()) {
            if (!(controller.up.isPressed())) {
                if (!(tristanAnimateState == 0) && game.runtime() - weaponAnimationTime >= weaponAnimationTimeDelay) {
                    tristanAnimateState = 0
                    animation.runImageAnimation(
                    Tristan,
                    [img`
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f f f f d d d d d e e f . . 
                        . f d d d d f 4 4 4 e e f . . . 
                        . f b b b b f 2 2 2 2 f 4 e . . 
                        . f b b b b f 2 2 2 2 f d 4 . . 
                        . . f c c f 4 5 5 4 4 f 4 4 . . 
                        . . . f f f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . f f e 2 f f f f f f 2 e f f . 
                        . f f f f f e e e e f f f f f . 
                        . . f e f b f 4 4 f b f e f . . 
                        . f f e 4 1 f d d f 1 4 e f . . 
                        f d f f e 4 d d d d 4 e f e . . 
                        f b f e f 2 2 2 2 e d d 4 e . . 
                        f b f 4 f 2 2 2 2 e d d e . . . 
                        f c f . f 4 4 5 5 f e e . . . . 
                        . f f . f f f f f f f . . . . . 
                        . . . . f f f . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f e e 2 2 2 2 2 2 e f f . . 
                        . f f e 2 f f f f f f 2 e f f . 
                        . f f f f f e e e e f f f f f . 
                        . . f e f b f 4 4 f b f e f . . 
                        . . f e 4 1 f d d f 1 4 e f . . 
                        . . e f f f f d d d 4 e f . . . 
                        . . f d d d d f 2 2 2 f e f . . 
                        . . f b b b b f 2 2 2 f 4 e . . 
                        . . f b b b b f 5 4 4 f . . . . 
                        . . . f c c f f f f f f . . . . 
                        . . . . f f . . . f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f e e 2 2 2 2 2 2 e f f . . 
                        . f f e 2 f f f f f f 2 e f f . 
                        . f f f f f e e e e f f f f f . 
                        . . f e f b f 4 4 f b f e f . . 
                        . . f e 4 1 f d d f 1 4 e f f . 
                        . . e f e 4 d d d d 4 e f f d f 
                        . . e 4 d d e 2 2 2 2 f e f b f 
                        . . . e d d e 2 2 2 2 f 4 f b f 
                        . . . . e e f 5 5 4 4 f . f c f 
                        . . . . . f f f f f f f . f f . 
                        . . . . . . . . . f f f . . . . 
                        `],
                    200,
                    true
                    )
                    sword.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else {
                tristanAnimateState = -1
                Tristan.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f f f f d d d d d e e f . . 
                    . f d d d d f 4 4 4 e e f . . . 
                    . f b b b b f 2 2 2 2 f 4 e . . 
                    . f b b b b f 2 2 2 2 f d 4 . . 
                    . . f c c f 4 5 5 4 4 f 4 4 . . 
                    . . . f f f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
                sword.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        }
    } else if (tristanDirection == 1) {
        if (!(controller.right.isPressed())) {
            if (!(tristanAnimateState == 1) && game.runtime() - weaponAnimationTime >= weaponAnimationTimeDelay) {
                tristanAnimateState = 1
                animation.runImageAnimation(
                Tristan,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . f 2 f e e e e f f . . . . 
                    . . f 2 2 2 f e e e e f f . . . 
                    . . f e e e e f f e e e f . . . 
                    . f e 2 2 2 2 e e f f f f . . . 
                    . f 2 e f f f f 2 2 2 e f . . . 
                    . f f f e e e f f f f f f f . . 
                    . f e e 4 4 f b e 4 4 e f f . . 
                    . . f e d d f 1 4 d 4 e e f . . 
                    . . . f d d d e e e e e f . . . 
                    . . . f e 4 e d d 4 f . . . . . 
                    . . . f 2 2 e d d e f . . . . . 
                    . . f f 5 5 f e e f f f . . . . 
                    . . f f f f f f f f f f . . . . 
                    . . . f f f . . . f f . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f f . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 2 2 2 e . . . . 
                    . . . f f e e f 4 4 4 f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . . f e d d f 1 4 d 4 e e f . 
                    . . . . f d d d e e e e e f . . 
                    . . . . f e 4 e d d 4 f . . . . 
                    . . . . f 2 2 e d d e f . . . . 
                    . . . f f 5 5 f e e f f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f . . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 4 4 4 f f . . . 
                    . . . f f e e f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `],
                200,
                true
                )
                sword.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        } else {
            tristanAnimateState = -1
            Tristan.setImage(img`
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . f f e d d f 1 4 d 4 e e f . 
                . f d d f d d d d 4 e e e f . . 
                . f b b f e e e 4 e e f f . . . 
                . f b b e d d 4 2 2 2 f . . . . 
                . . f b e d d e 2 2 2 e . . . . 
                . . . f f e e f 4 4 4 f . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . . f f f . . . . . . 
                `)
            sword.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    } else if (tristanDirection == 2) {
        if (!(controller.down.isPressed())) {
            if (!(tristanAnimateState == 2) && game.runtime() - weaponAnimationTime >= weaponAnimationTimeDelay) {
                tristanAnimateState = 2
                animation.runImageAnimation(
                Tristan,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . . f f f f 2 2 f f f f . . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f f 2 f e f . . 
                    . . f f f 2 f e e 2 2 f f f . . 
                    . . f e 2 f f e e 2 f e e f . . 
                    . f f e f f e e e f e e e f f . 
                    . f f e e e e e e e e e e f f . 
                    . . . f e e e e e e e e f . . . 
                    . . . e f f f f f f f f 4 e . . 
                    . . . 4 f 2 2 2 2 2 e d d 4 . . 
                    . . . e f f f f f f e e 4 . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . . f f f f 2 2 f f f f . . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e f 2 f f f 2 f 2 e f . . 
                    . . f f f 2 2 e e f 2 f f f . . 
                    . . f e e f 2 e e f f 2 e f . . 
                    . f f e e e f e e e f f e f f . 
                    . f f e e e e e e e e e e f f . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f e . . . 
                    . . 4 d d e 2 2 2 2 2 f 4 . . . 
                    . . . 4 e e f f f f f f e . . . 
                    . . . . . . . . . f f f . . . . 
                    `],
                200,
                true
                )
                sword.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        } else {
            tristanAnimateState = -1
            Tristan.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
            sword.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    } else if (tristanDirection == 3) {
        if (!(controller.left.isPressed())) {
            if (!(tristanAnimateState == 3) && game.runtime() - weaponAnimationTime >= weaponAnimationTimeDelay) {
                tristanAnimateState = 3
                animation.runImageAnimation(
                Tristan,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . f f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . . e 2 2 2 e d d e b f . . 
                    . . . . f 4 4 4 f e e f f . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f . . . 
                    . . f e e e e e d d d f . . . . 
                    . . . . f 4 d d e 4 e f . . . . 
                    . . . . f e d d e 2 2 f . . . . 
                    . . . f f f e e f 5 5 f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . . f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . f f 4 4 4 e d d e b f . . 
                    . . . f f f f f f e e f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                200,
                true
                )
                sword.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        } else {
            tristanAnimateState = -1
            Tristan.setImage(img`
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f f . . 
                . . f e e e 4 d d d d f d d f . 
                . . . f f e e 4 e e e f b b f . 
                . . . . f 2 2 2 4 d d e b b f . 
                . . . . e 2 2 2 e d d e b f . . 
                . . . . f 4 4 4 f e e f f . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . f f f . . . . . . . 
                `)
            sword.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
    if (!(tristanAnimateState == -1)) {
        if (!(controller.up.isPressed()) && (!(controller.right.isPressed()) && (!(controller.down.isPressed()) && !(controller.left.isPressed())))) {
            tristanAnimateState = -1
            animation.stopAnimation(animation.AnimationTypes.All, Tristan)
            if (tristanDirection == 0) {
                Tristan.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f f f f d d d d d e e f . . 
                    . f d d d d f 4 4 4 e e f . . . 
                    . f b b b b f 2 2 2 2 f 4 e . . 
                    . f b b b b f 2 2 2 2 f d 4 . . 
                    . . f c c f 4 5 5 4 4 f 4 4 . . 
                    . . . f f f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
            } else if (tristanDirection == 1) {
                Tristan.setImage(img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 2 f e e e e f f . . . 
                    . . . f 2 2 2 f e e e e f f . . 
                    . . . f e e e e f f e e e f . . 
                    . . f e 2 2 2 2 e e f f f f . . 
                    . . f 2 e f f f f 2 2 2 e f . . 
                    . . f f f e e e f f f f f f f . 
                    . . f e e 4 4 f b e 4 4 e f f . 
                    . . f f e d d f 1 4 d 4 e e f . 
                    . f d d f d d d d 4 e e e f . . 
                    . f b b f e e e 4 e e f f . . . 
                    . f b b e d d 4 2 2 2 f . . . . 
                    . . f b e d d e 2 2 2 e . . . . 
                    . . . f f e e f 4 4 4 f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    `)
            } else if (tristanDirection == 2) {
                Tristan.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
            } else if (tristanDirection == 3) {
                Tristan.setImage(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . . 
                    . . f f f f e e 2 2 2 2 e f . . 
                    . . f e 2 2 2 f f f f e 2 f . . 
                    . f f f f f f f e e e f f f . . 
                    . f f e 4 4 e b f 4 4 e e f . . 
                    . f e e 4 d 4 1 f d d e f f . . 
                    . . f e e e 4 d d d d f d d f . 
                    . . . f f e e 4 e e e f b b f . 
                    . . . . f 2 2 2 4 d d e b b f . 
                    . . . . e 2 2 2 e d d e b f . . 
                    . . . . f 4 4 4 f e e f f . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `)
            }
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.left.isPressed()) {
        tristanDirection = 1
    } else if (controller.right.isPressed()) {
        tristanDirection = 3
    } else if (controller.up.isPressed()) {
        tristanDirection = 2
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tristanDirection = 1
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.down.isPressed()) {
        tristanDirection = 0
    } else if (controller.up.isPressed()) {
        tristanDirection = 2
    } else if (controller.left.isPressed()) {
        tristanDirection = 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.down.isPressed()) {
        tristanDirection = 0
    } else if (controller.up.isPressed()) {
        tristanDirection = 2
    } else if (controller.right.isPressed()) {
        tristanDirection = 3
    }
})
function makeWeapon () {
    sword = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Weapon)
    sword.z = 100
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tristanDirection = 3
})
function drawBridgeOpen (Open: boolean) {
    if (Open) {
        animation.runImageAnimation(
        door,
        [img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            `,img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            `,img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            `,img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            `],
        500,
        false
        )
        tiles.setTileAt(tiles.getTileLocation(51, 26), sprites.dungeon.buttonOrangeDepressed)
        tiles.setTileAt(tiles.getTileLocation(42, 26), sprites.dungeon.buttonTeal)
        CreateShark()
        tiles.placeOnRandomTile(shark, sprites.builtin.brick)
    } else {
        animation.runImageAnimation(
        door,
        [img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            `,img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            `,img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            `,img`
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeeefff111eeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeeefffeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            ................................................................................................
            `],
        500,
        false
        )
        tiles.setTileAt(tiles.getTileLocation(51, 26), sprites.dungeon.buttonOrange)
        tiles.setTileAt(tiles.getTileLocation(42, 26), sprites.dungeon.buttonTealDepressed)
    }
    for (let c = 0; c <= 5; c++) {
        for (let r = 0; r <= 3; r++) {
            if (Open) {
                tiles.setWallAt(tiles.getTileLocation(44 + c, 21 + r), false)
            } else {
                tiles.setWallAt(tiles.getTileLocation(44 + c, 21 + r), true)
            }
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.left.isPressed()) {
        tristanDirection = 1
    } else if (controller.right.isPressed()) {
        tristanDirection = 3
    } else if (controller.down.isPressed()) {
        tristanDirection = 0
    }
})
function initParameters () {
    tristanDirection = -1
    tristanAnimateState = -1
    weaponAnimationTimeDelay = 200
    enemyBounceBack = 200
    SHARK_MAX_HP = 20
    TRISTAN_MAX_HP = 20
    iFrameTimeDelay = 1000
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tristanDirection = 0
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game.runtime() - enemyHitTime >= weaponAnimationTimeDelay) {
        SharkHealthBar.value += 0 - 100 / SHARK_MAX_HP
        if (SharkHealthBar.value == 0) {
            shark.destroy(effects.disintegrate, 2000)
            isShark = false
            isSharkFollow = false
        }
        otherSprite.setVelocity(enemyBounceBack * Math.sin(Math.atan2(shark.y - Tristan.y, shark.x - Tristan.x) * 180 / 3.14), enemyBounceBack * Math.cos(Math.atan2(shark.y - Tristan.y, shark.x - Tristan.x) * 180 / 3.14))
        enemyHitTime = game.runtime()
    }
})
function createHero () {
    Tristan = sprites.create(img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .ffffdddddeef...........
        fddddf444eef............
        fbbbbf2222f4e...........
        fbbbbf2222fd4...........
        .fccf45544f44...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    controller.moveSprite(Tristan)
    scene.cameraFollowSprite(Tristan)
    tristanStatusBar = statusbars.create(20, 4, StatusBarKind.Health)
    tristanStatusBar.attachToSprite(Tristan)
}
function initBackground () {
    door = sprites.create(img`
        eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeeeeeefffeeeeeefff111eeefffe
        eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeefff111eeefffe
        eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeefff111eeefffe
        eeeeefffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeefff111eeefffe
        ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeefff111eeefffe
        ee111fffeeeeeeeefffeeeeee111fffeeeeeeeeefff111eeeeefffeeeeeeeeefffeeeee111fffeeeeeefff111eeefffe
        ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fffeeeeeefffeeeeeefffe
        ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeee111fff111eeefffeeeeeefffe
        ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeefffeeeeeefffe
        ee111fffeeeeeeeefffeeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeefffeeeeeefffe
        eeeeefffeeeeeeeefffeeeeeeeeefff111eeeeeefffeeeeeeeefff111eeeeeefffeeeeeeeefff111eeefffeeeeeefffe
        eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefff111eeefffeeeeeefffe
        eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeefffeeeeeefff1
        eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeefffeeeeeefff1
        eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeefffeeeeeefff1
        eeeeefffeeeee111fffeeeeeeeeefff111eeeeeefffeeeeeeeefffeeeeeeeeefffeeeeeeeefffeeeeeefffeeeeeefff1
        `, SpriteKind.Background)
    door.z = -1
    tiles.placeOnTile(door, tiles.getTileLocation(46, 20))
    door.setPosition(door.x + 5, door.y)
}
function CreateShark () {
    if (!(isShark)) {
        isShark = true
        shark = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(shark, myTiles.tile2)
        sharkStartPosition = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Background)
        sharkStartPosition.setPosition(shark.x, shark.y)
        SharkHealthBar = statusbars.create(20, 4, StatusBarKind.Health)
        SharkHealthBar.attachToSprite(shark)
        SharkHealthBar.value = 100
        animation.runImageAnimation(
        shark,
        [img`
            ...........fffffff...ccfff..........
            ..........fbbbbbbbffcbbbbf..........
            ..........fbb111bbbbbffbf...........
            ..........fb11111ffbbbbff...........
            ..........f1cccc1ffbbbbbcff.........
            ..........ffc1c1c1bbcbcbcccf........
            ...........fcc3331bbbcbcbcccf..ccccc
            ............c333c1bbbcbcbccccfcddbbc
            ............c333c1bbbbbbbcccccddbcc.
            ............c333c11bbbbbccccccbbcc..
            ...........cc331c11bbbbccccccfbccf..
            ...........cc13c11cbbbcccccbbcfccf..
            ...........c111111cbbbfdddddc.fbbcf.
            ............cc1111fbdbbfdddc...fbbf.
            ..............cccfffbdbbfcc.....fbbf
            ....................fffff........fff
            `,img`
            ....................................
            ....................................
            ....................................
            ...............ccffff...............
            ..............cddbbbf...............
            .......ffffffcddbbbf................
            .....ffbbbbbbbbbbbbbcfff.......ccccc
            ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
            ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
            .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
            .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
            .ffbb1111fffbbcbbbbcccccccbcffbccf..
            ..ff111111111bbbbccccccbbbcc..fbbcf.
            ....ccccccc111bdbbbfddbccc.....ffbbf
            ........ccccccfbdbbbfcc..........fff
            ...............ffffff...............
            `],
        500,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game.runtime() - iFrameTime >= iFrameTimeDelay) {
        tristanStatusBar.value += 0 - 100 / TRISTAN_MAX_HP
        if (tristanStatusBar.value == 0) {
            game.over(false, effects.smiles)
        }
        iFrameTime = game.runtime()
    }
})
let iFrameTime = 0
let sharkStartPosition: Sprite = null
let tristanStatusBar: StatusBarSprite = null
let isSharkFollow = false
let isShark = false
let SharkHealthBar: StatusBarSprite = null
let enemyHitTime = 0
let iFrameTimeDelay = 0
let TRISTAN_MAX_HP = 0
let SHARK_MAX_HP = 0
let enemyBounceBack = 0
let shark: Sprite = null
let door: Sprite = null
let weaponAnimationTimeDelay = 0
let weaponAnimationTime = 0
let tristanAnimateState = 0
let sword: Sprite = null
let tristanDirection = 0
let Tristan: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
initParameters()
initBackground()
createHero()
makeWeapon()
tiles.placeOnTile(Tristan, tiles.getTileLocation(47, 26))
game.onUpdate(function () {
    if (Tristan.tileKindAt(TileDirection.Center, sprites.dungeon.buttonOrange)) {
        drawBridgeOpen(true)
    } else if (Tristan.tileKindAt(TileDirection.Center, sprites.dungeon.buttonTeal)) {
        drawBridgeOpen(false)
    }
    setAnimation()
    sword.setVelocity(Tristan.vx, Tristan.vy)
})
game.onUpdateInterval(500, function () {
    if (isShark) {
        if (isSharkFollow) {
            if (shark.tileKindAt(TileDirection.Bottom, myTiles.tile1)) {
                isSharkFollow = false
                shark.follow(sharkStartPosition, 50)
            }
        } else if (100 > Math.sqrt((Tristan.x - shark.x) ** 2 + (Tristan.y - shark.y) ** 2)) {
            isSharkFollow = true
            shark.follow(Tristan, 50)
        }
    }
})
