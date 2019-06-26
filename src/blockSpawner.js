function blockSpawner() {
    if (lowestBlock === 0) {
        var i = 1;
    } else {
        var i = lowestBlock;
    }

    for (i; i < lowestBlock + 60; i++) {
        if (i >= blocks.length) {
            blocks.push(new block);

            if (blocks[i-1].type === "break") {
                blocks[i].type = 0;
            } else {
                blocks[i].type = spawnBlock();
            }
    
            blocks[i].powerup = 0;
            blocks[i].monster = 0;
    
            if (blocks[i].type === 0) {
                blocks[i].powerup = spawnPowerup();
    
                if (blocks[i].powerup === 0) {
                    blocks[i].monster = spawnMonster();
                }
            }
    
            blocks[i].x = Math.random()*(screenWidth - blocks[i].width);
    
            if (blocks[i].type === "break" || blocks[i-1].type === "break") {
                blocks[i].y = (blocks[i-1].y) - (((Math.random()*(80 + (difficulty * 25))) + 30) / 2);
            } else if (blocks[i].monster !== 0) {
                blocks[i].y = (blocks[i-1].y) - ((Math.random()*(80 + (difficulty*25)))+50);
            }  else if (blocks[i-1].monster !== 0) {
                blocks[i].y = (blocks[i-1].y) - ((Math.random()*(80 + (difficulty*25)))+50);
            }
            else {
                blocks[i].y = (blocks[i-1].y) - ((Math.random()*(80 + (difficulty*25)))+30);
            }
        } 
    }

    //Remove blocks that are below us now
    for (var i = 0; i < lowestBlock - 2; i++) {
        blocks.shift();
    }
}
