/**
 * Created by nhatnk on 4/26/17.
 */

let Hero = function (image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 1;
    this.direction = 'right';

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.canMoveLeft = function () {
        return (this.left > 0);
    }
    this.moveLeft = function () {
        if (this.canMoveLeft()) {
            this.left -= this.speed;
        }
    }

    this.canMoveRight = function () {
        return (this.left < window.innerWidth - this.size);
    }
    this.moveRight = function () {
        if (this.canMoveRight()) {
            this.left += this.speed;
        }
    }

    this.canMoveUp = function () {
        return (this.top > 0);
    }
    this.moveUp = function () {
        if (this.canMoveUp()) {
            this.top -= this.speed;
        }
    }

    this.canMoveDown = function () {
        return (this.top < window.innerHeight - this.size);
    }
    this.moveDown = function () {
        if (this.canMoveDown()) {
            this.top += this.speed;
        }
    }
}

let hero = new Hero('hamster.jpg', 0, 0, 100);

function move(event) {
    switch (event.keyCode) {
        case 37:
            hero.direction = 'left';
            break;
        case 38:
            hero.direction = 'up';
            break;
        case 39:
            hero.direction = 'right';
            break;
        case 40:
            hero.direction = 'down';
            break;
    }
}

function start() {

    if (hero.canMoveRight() && hero.canMoveDown()&&hero.top===0) {
        hero.direction = 'right';
    } else {
        if (hero.canMoveLeft() && hero.canMoveDown()) {
            hero.direction = 'down';
        } else {
            if (hero.canMoveLeft() && hero.canMoveUp()) {
                hero.direction = 'left';
            } else {
                if (hero.canMoveRight() && hero.canMoveUp()&&hero.top) {
                        hero.direction = 'up';
                }
            }
        }
    }

    switch (hero.direction) {
        case 'right':
            hero.moveRight();
            break;
        case 'left':
            hero.moveLeft();
            break;
        case 'down':
            hero.moveDown();
            break;
        case 'up':
            hero.moveUp();
            break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    window.addEventListener('keydown', move);
    setTimeout(start, 1);
}

start();