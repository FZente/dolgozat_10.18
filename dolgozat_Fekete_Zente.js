//1.feladat
function digitsAverage(number) {
    let foszam = 0;
    let oszto = 0;
    for (let i = 0; i < number.length; i++) {
        foszam += number[i];
        oszto += 1;
    }
    let vege = foszam / oszto;
    return vege
}
console.log(digitsAverage(268));

//2.feladat

function gradeCalculator(score, maximum) {
    let szazalek = ((score * 100) / maximum);
    let jegy = "";
    if (0 <= szazalek < 50){
        jegy += "F";
    }
    else if (50 < szazalek <= 60){
        jegy += "E";
    }
    else if (60 < szazalek <= 70){
        jegy += "D";
    }
    else if (70 < szazalek <= 80){
        jegy += "C";
    }
    else if (80 < szazalek <= 90){
        jegy += "B";
    }
    else if (90 < szazalek <= 100){
        jegy += "A";
    }
    return jegy
}
console.log(gradeCalculator(5, 10));

//3.feladat

function factorial(number) {
    let faktor = number;
    for(let i = number; i != 1; i--){
        faktor = faktor*(i-1); 
    }
    return faktor
}
console.log(factorial(3))

//4.feladat

function stonePaperScissors(player1, player2) {
    let p1 = player1;
    let p2 = player2;
    let vege = ""
    if(p1 == p2){
        vege = "The game is a tie.";
    }
    else if ((p1 == 0 && p2 == 1 ) || (p1 == 2 && p2 == 0 ) || (p1 == 1 && p2 == 2 )){
        vege = "Player 1 win";
    }
    else{
        vege = "Player 2 win";
    }
    return vege
}
console.log(stonePaperScissors(0,1))