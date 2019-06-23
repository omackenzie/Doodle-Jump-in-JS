function spawnPowerup() {
    var powerupChances = {
        "spring": 20,
        "springBoots": 80,
        "flyingHat": 80,
        "rocket": 120
    };

    if (Math.round(Math.random() * powerupChances["spring"]) === 0) {
        return "spring";
    } else if (Math.round(Math.random() * powerupChances["springBoots"]) === 0) {
        return "springBoots";
    }
    return 0;
}