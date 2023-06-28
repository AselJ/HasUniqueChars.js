// Write your code below
function uniqueCharacters(word){
  let uniqueWords = {}
  for (let i = 0; i < word.length; i++){
    if(uniqueWords[word[i]]){
      return false
    }
    uniqueWords[word[i]] = true
  }
  return true 
}
console.log(uniqueCharacters('Monday'))
console.log(uniqueCharacters('Moonday'))
console.log(uniqueCharacters('Bob'))
console.log(uniqueCharacters('booo'))