function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < 4; i++){
   newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}
function johnLennonFacts(facts){
  var i = 5;
  while (i > -1){
    facts.unshift(`${facts[i]}`)
    facts.push(`${facts[i]}!!!`);
    i--;
  }
  return facts
}