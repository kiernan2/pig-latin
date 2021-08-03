// Business Logic
const vowels = ["a","e","i","o","u"];

function pigLatin(text) {
  let theText = text;
  if (text.slice(0,1) === "a" || text.slice(0,1) === "e" || text.slice(0,1) === "i" || text.slice(0,1) === "o" || text.slice(0,1) === "u") {
    theText = text + "way";
  } else {
    let letterArray = theText.split("");
    for(let i = 0;i < letterArray.length;i++) {
      if (vowels.includes(letterArray[i])) {
        let updated = letterArray.splice(0,i) + "ay";
        console.log(updated)
        theText = letterArray.join('') + updated;
      break
        }
      };
  }
  return theText;
}
console.log(pigLatin("tree"));