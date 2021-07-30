Describe: vowelCounter();

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Describe: pigLatin();

Test: "Words beginning with a vowel add "way" to the end"
Code: pigLatin("away")
Expected Output: "awayway"

Test: "For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay""
Code: pigLatin("code")
Expected Output: "odecay"

Test: "If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first"
Code: pigLatin("quick")
Expected Output: "ickquay"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"