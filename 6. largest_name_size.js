var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var maxLen = 0, largest = [];

for(friend of friends){
    if(friend.length > maxLen){
        maxLen = friend.length;
        largest = [];
        largest.push(friend);
    }
    else if(friend.length == maxLen){
        largest.push(friend);
    }
}

console.log(...largest);