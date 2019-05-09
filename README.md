## Aim:

-   Arcade Game is implemented by using JavaScript object-oriented programming  features.

# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## What I have done in this Project

-   Clone the repository which is provided by the Udacity. the following files are extracted:
           1. css/style.css
           2. images
           3. js(app.js, engine.js, resources.js)
           4. index.html
-   Inside the app.js file I have implemented the Player class and Enemy Object

    -   The Enemy function, which initiates the Enemy by:
        -   Loading the image by setting this.sprite to the appropriate image in the image folder (which is already provided)
        -   Setting the Enemy initial location
        -   Setting the Enemy speed
    -   The update method for the Enemy:
        -   Updating the Enemy location
        -   Handles collision with the Player
    -   I also implemented the Player class, and I used the Enemy class as an example on how to get started. At minimum I have implement the following:
        -   The Player function, which initiates the Player by:
        -   Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
        -   Setting the Player initial location
    -   The update method for the Player
    -   The render method for the Player
    -   The **handleInput** method, which should receive user input, **allowedKeys**  and move the player according to that input. In particular:
    -   Left key should move the player to the left, right key to the right, up should
        move the player up and down should move the player down.
    -   Recall that the player cannot move off screen .
    -   If the player reaches the water the game should be reset by moving the
          player back to the initial location .
    -   You can add your own Player methods as needed as well. Once you    have  completed implementing the Player and Enemy, you should instantiate them by:

        -   Creating a new Player object
        -   Creating several new Enemies objects and placing them in an array called  **allEnemies**  Beyond that, feel free to add additional functionality to the game.

-   I can add own Enemy methods as needed. You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. I have implemented the following:
    -   The Player function, which initiates the Player by:
        -   Loading the image by setting **this.sprite** to the appropriate image in the image folder (use the code from the Enemy function as an example on how
            to do that).
        -   Setting the Player initial location
        -   The update method for the Player (can be similar to the one for the Enemy)
    -   The render method for the Player (use the code from the render method for the Enemy).
    -   The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
    -   Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
    -   Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
    -   If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player
        method to handle that).
-   You can add your own Player methods as needed as well. Once you have completed implementing the Player and Enemy, you should instantiate them by:
    -   Creating a new Player object
    -   Creating several new Enemies objects and placing them in an array called
            **allEnemies**.Beyond that, feel free to add additional functionality to the game. You can add more code to the app.js file and to the Enemy and Player classes to accomplish that

## Conclusion

-   JavaScript enables the development of complex applications on the web.
-   JavaScript runs on normal web browsers, which makes it one of the most accessible and flexible programming languages.
-   In this project I have learned how to discover a variety of ways inheritance and delegation can be used to create well-architected applications
