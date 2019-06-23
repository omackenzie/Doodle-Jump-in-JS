function block() {
    this.x;
    this.y;
    this.width = 100;
    this.height = 15;
    this.powerup;
    this.type;
    this.monster;
    this.direction = "right";
    this.moveTime = 10;

    this.draw = function() {
        if (this.type === "break") {
            ctx.fillStyle = "#876537";
        } else if (this.type === "sideways") {
            ctx.fillStyle = "#14a7c8";
        } else {
            ctx.fillStyle = "#6fbb1d";
        }

        if (this.monster === 0) {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } else {
            monsterFunctions[this.monster].draw(this.x, this.y);
        }

        if (this.powerup === "spring") {
            ctx.fillStyle = "grey";
            ctx.fillRect(this.x + 35, this.y - 10, 30, 10);
        } else if (this.powerup === "springBoots") {
            ctx.fillStyle = "blue";
            ctx.fillRect(this.x + 30, this.y - 25, 15, 10);
            ctx.fillRect(this.x + 53, this.y - 25, 15, 10);  
            ctx.fillStyle = "grey";
            ctx.fillRect(this.x + 30, this.y - 15, 15, 15);
            ctx.fillRect(this.x + 53, this.y - 15, 15, 15);
        }
    }

    this.update = function() {
        if (this.type === "sideways") {
            if (this.x >= screenWidth - this.width) {
                this.direction = "left";
            } else if (this.x <= 0) {
                this.direction = "right";
            }

            if (this.direction === "right") {
                this.x += 2.5;
            } else {
                this.x -= 2.5;
            }
        }

        if (this.monster === "smallRed") {
            if (this.direction === "right") {
                this.x += 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "left";
                    this.moveTime = 10;
                }
            } else {
                this.x -= 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "right";
                    this.moveTime = 10;
                }
            }
        }
    }
}
