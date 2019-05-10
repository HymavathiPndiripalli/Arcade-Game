## Aim:

-   Arcade Game is implemented by using JavaScript object-oriented programming  features.

# Classic Arcade Game Clone Project

## What I have done in this Project

-   Clone the repository which is provided by the Udacity. the following files are extracted:
           1\. css/style.css
           2\. images
           3\. js(app.js, engine.js, resources.js)
           4\. index.html
-   open index.html file in my browser . I found empty screen on browser then I have created **allEnemies** array and a new Player object
-   Inside the app.js file I have implemented the Player class and Enemy Object

    -   The Enemy function, which initiates the Enemy by:
        -   Loading the image by setting this.sprite to the appropriate image
        -   Setting the Enemy initial location and speed
    -   The update method for the Enemy:
        -   Updating the Enemy location
        -   Handles collision with the Player
    -   I also implemented the Player class, and I used the Enemy class as an example on how to get started. At minimum I have implement the following:
        -   The Player function, which initiates the Player by:
        -   Loading the image by setting this.sprite to the appropriate image
        -   Setting the Player initial location
    -   The render method for the Player
    -   The **handleInput** method, which should receive user input, **allowedKeys**  and move the player according to that input. In particular:
        -   Left key should move the player to the left, right key to the right, up should
            move the player up and down should move the player down in which player cannot move out of screen
        -   If the player reaches the water the game should be reset by moving the
              player back to the initial position
        -   You can add your own Player methods as needed as well. Once you have  completed implementing the Player and Enemy, you should instantiate them by:

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

## How to run the Game

    - open index.html file in your favourite browser

## How to play Game

    1. Initially player is on the grass.
    2. Player can move top , left , bottom , right by pressing arrow keys to reach water level without moving out of screen.
    3. Enemies are randomly moving from left to right.
    4. If collision occur between player and enemy then player will move to its default location.
    5. Player reaches to water level and reset to its initial position.

## Conclusion

-   JavaScript enables the development of complex applications on the web.
-   JavaScript runs on normal web browsers, which makes it one of the most accessible and flexible programming languages.
-   In this project I have learned how to discover a variety of ways inheritance and delegation can be used to create well-architected applications
