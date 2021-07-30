// Business Logic

function vowelCounter(text) {
  return 0;
}

function pigLatin(text) {
  if (text.slice(0) === "a" || text.slice(1) === "e" || text.slice(1) === "i" || text.slice(1) === "o" || text.slice(1) === "u") {
    return text + "way";
  } else {
    return text;
  }
}