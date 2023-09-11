prompt('what is your name?');
prompt('What is their name?');

let loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore > 70) {
  alert('Your love score is ' + loveScore + '%' + ' you love each other like kanye loves kanye');
}

if (loveScore > 30 && loveScore <= 70) {
  alert('Your love score is ' + loveScore + '%');
}

if (loveScore <= 30) {
  alert('Your love score is ' + loveScore + '%' + ' You go together like oil and water.');
}
