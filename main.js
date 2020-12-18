var canvas = new fabric.Canvas("myCanvas");
var playerX = 10;
var playerY = 10;
var blockImageWidth = 30;
var blockImageHeight = 30;
var playerObject = "";
var blockObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });

}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockObject = Img;
        blockObject.scaleToWidth(blockImageWidth);
        blockObject.scaleToHeight(blockImageHeight);
        blockObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockObject);

    });
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("p & shift pressed together");
        blockImageWidth = blockImageWidth + 15;
        blockImageHeight = blockImageHeight + 15;

        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;

    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("m & shift pressed together");
        blockImageWidth = blockImageWidth - 15;
        blockImageHeight = blockImageHeight - 15;

        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;

    }
    if (keyPressed == "37") {
        left();
        console.log("left");

    }
    if (keyPressed == "38") {
        up();
        console.log("up");

    }
    if (keyPressed == "39") {
        right();
        console.log("right");

    }
    if (keyPressed == "40") {
        down();
        console.log("down");

    }

    if (keyPressed == "87") {
        newImage("wall.jpg");
        console.log("w");

    }
    if (keyPressed == "71") {
        newImage("ground.png");
        console.log("g");
    }

    if (keyPressed == "76") {
        newImage("light_green.png");
        console.log("l");

    }
    if (keyPressed == "84") {
        newImage("trunk.jpg");
        console.log("t");
    }
    if (keyPressed == "82") {
        newImage("roof.jpg");
        console.log("r");
    }
    if (keyPressed == "89") {
        newImage("yellow_wall.png");
        console.log("y");
    }
    if (keyPressed == "68") {
        newImage("dark_green.png");
        console.log("d");
    }
    if (keyPressed == "85") {
        newImage("unique.png");
        console.log("u");
    }
    if (keyPressed == "67") {
        newImage("cloud.jpg");
        console.log("c");

    }
}
function up() {
    if (playerY >= 0) {
        playerY = playerY - blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("block Image height =" + blockImageHeight);
        console.log(" x " + playerX);
        console.log(" y " + playerY);
    }

}

function down() {
    if (playerY <= 500) {
        playerY = playerY + blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("block Image height =" + blockImageHeight);
        console.log(" x " + playerX);
        console.log(" y " + playerY);
    }

}

function left() {
    if (playerX >= 0) {
        playerX = playerX - blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("block Image width =" + blockImageWidth);
        console.log(" x " + playerX);
        console.log(" y " + playerY);
    }

}

function right() {
    if (playerX <= 850) {
        playerX = playerX + blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("block Image width =" + blockImageWidth);
        console.log(" x " + playerX);
        console.log(" y " + playerY);
    }

}

