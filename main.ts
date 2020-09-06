let projectile: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 4 5 4 2 2 2 . . . . 
    . . . 2 2 2 4 4 4 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 7 2 2 . . . . . . 
    . . . . . . 2 7 2 . . . . . . . 
    . . 7 7 . . . 7 . . . 7 . . . . 
    . . . 7 7 . . 7 . . . 7 . . . . 
    . . . . 7 7 . 7 . . 7 . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 9 9 . . . . . . . . . . . . . 
        . 9 9 9 . . . . . . . . . . . . 
        . 9 9 9 9 . . . . . . . . . . . 
        . 9 9 9 9 9 . . . . . . . f . . 
        . . 9 9 9 9 9 . . . . . f . . . 
        . . . 9 9 9 9 9 f 5 . f . . . . 
        . . . . . 5 f 5 f 5 f f f f . . 
        . . . 5 f 5 f 5 f 5 f f 1 f . . 
        . f f 5 f 5 f 5 f 5 f f f f . . 
        . . . 5 f 5 f 5 f 5 f f . . . . 
        . . . 5 f 5 f 5 f 5 f f f f . . 
        . . . . . 5 f 5 f 5 f . . . . . 
        . . . . . . . 5 f f . f . . . . 
        . . . . . . . f f . f . f . . . 
        . . . . . . . f . . f . . f . . 
        . . . . . . f . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
