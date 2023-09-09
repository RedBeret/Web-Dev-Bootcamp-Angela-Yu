prompt("what is your name?");
prompt("What is their name?");

var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore === 100) {
    alert("Your love score is " + loveScore + "%" + " you love each other like kanye loves kanye");
} else {
    alert("Your love score is " + loveScore + "%");

}
