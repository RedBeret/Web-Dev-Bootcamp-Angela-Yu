const tweet = prompt('Compose your tweet: ');
const tweetCount = tweet.length;
alert('You have written ' + tweetCount + ' characters, you have ' + (140 - tweetCount) + ' characters remaining.');
