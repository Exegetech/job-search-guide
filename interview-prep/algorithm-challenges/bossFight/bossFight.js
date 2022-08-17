// create a character class that both hero and boss derive from
function Character (type, attackPower, defense, health) {
    this.type = type;
    this.attackPower = attackPower;
    this.defense = defense;
    this.health = health;
};

Character.prototype.attack = function(opponent) {
    if (opponent.defense < Math.random()){
        //extra credit solution starts here
        if (this.type === 'hero' && (Math.random() < .34) && opponent.health > (this.attackPower * 5)){
            opponent.health -= (opponent.health/5);
        }
        //extra credit ends here
            opponent.health -= this.attackPower;
    }
};

function startBattle(battles){
    //style of this solution involves pushing winners to a winner array, but many different methods also work, such as below
    winnerArray = [];
    // alt method:
    // you can also use variables for each player, and add 1 to them at the conclusion of each battle, for the winner
    // eg (var heroWins = 0, bossWins = 0;)
    for (i = 0; i < battles; i++) {
        var hero = new Character('hero', 6, 0.6, 60);
        var boss = new Character('boss', 10, 0.2, 100);
        while (hero.health > 0 && boss.health > 0){
            //hero will attack, if able to swing
            if (hero.health > 0) {
                hero.attack(boss)
            }
            //boss will attack, if able to swing
            if (boss.health > 0) {
                boss.attack(hero)
            }
        }
        if (boss.health <= 0) {
            winnerArray.push('hero')
            //if individual variables are used: heroWins++
        } else {
            winnerArray.push('boss')
            //if individual variables are used: bossWins++
        }
    }
    return winnerArray.reduce(function(winnerObj, currentWinner){
        if (currentWinner === 'boss') {
            winnerObj.boss++;
        }
        else {
            winnerObj.hero++
        }
        return winnerObj;
    }, {boss: 0, hero: 0});
    // if individual variables are used, return [{hero: heroWins}, {boss: bossWins}]
};