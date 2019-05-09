"use strict";
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.speed = speed;
  this.x = x;
  this.y = y;
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

//Player class
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }

};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 200);
  }
  if (this.x > 505) {
    this.x = 0;
  }
  if (this.x + 60 > player.x && this.x < player.x + 65 && this.y + 60 > player.y && this.y < player.y + 70) {
    player.x = 200;
    player.y = 410;
  }


};

//update player position
Player.prototype.update = function(dt) {
  if (this.x == Enemy.x && this.y == Enemy.y) {
    Player.x = 200;
    Player.y = 410;
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var forEnemy = [62, 145, 228];
var player = new Player(200, 410);
for (var i in forEnemy) {
  var obj = new Enemy(0, forEnemy[i], 150);
  allEnemies.push(obj);
}
Player.prototype.handleInput = function(key) {
  if (key == "left" && this.x > 0)
    this.x -= 100;
  else if (key == "right" && this.x < 400)
    this.x += 100;
  else if (key == "up" && this.y > 0)
    this.y -= 85;
  else if (key == "down" && this.y < 400)
    this.y += 85;
  if (this.y < 60) {
    setTimeout(() => {
      player.x = 200;
      player.y = 410;
    }, 800);
  }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
