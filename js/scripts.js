// Business Logic
function pigLatin(text) {
  let theText = text;
  let letterArray = theText.split("");
  if (text.slice(0,1) === "a" || text.slice(0,1) === "e" || text.slice(0,1) === "i" || text.slice(0,1) === "o" || text.slice(0,1) === "u") {
    theText = text + "way";
  } else if (text.slice(0,2) === "qu") {
    const splicedArray = letterArray.splice(0,2);
    letterArray = letterArray.join("") + splicedArray.join("") + "ay";
    letterArray = letterArray.split(" ")
    theText = letterArray.join('');
  } else {
    const vowels = ["a","e","i","o","u","q"];
    for(let i = 0;i < letterArray.length;i++) {
      if (vowels.includes(letterArray[i])) {
        let updated = letterArray.splice(0,i).join("");
        theText = letterArray.join('') + updated + "ay";
        break
      }
    };
  }
  return theText;
}
console.log(pigLatin("qi"));