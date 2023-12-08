
function rankCalculator (wins, loses) {
    let rankPoints = wins - loses
    return rankPoints
}

let rankPoints = rankCalculator(200, 60);

if (rankPoints <= 10) {
        heroRank = "Ferro";
    } else if (rankPoints > 10 && rankPoints <= 20) {
        heroRank = "Bronze";
    } else if (rankPoints > 20 && rankPoints <= 50) {
        heroRank = "Prata";
    } else if (rankPoints > 50 && rankPoints <= 80) {
        heroRank = "Ouro";
    } else if (rankPoints >80 && rankPoints <= 90) {
        heroRank = "Diamante";
    } else if (rankPoints >90 && rankPoints < 100) {
        heroRank = "Lendário";
    } else if (rankPoints >= 100) {
        heroRank = "Imortal";
}


console.log ("O Herói tem saldo de " + rankPoints + " e está no rank de " + heroRank)