Describe: pigLatin();

Test: "Words beginning with a vowel add "way" to the end"
Code: pigLatin("away")
Expected Output: "awayway"

Test: "For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay""
Code: pigLatin("code")
Expected Output: "odecay"

Code: pigLatin("tree")
Expected Output: "eetray"

Test: "If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first"
Code: pigLatin("quick")
Expected Output: "ickquay"

Code: pigLatin("squeal")
Expected Output: "quealsay"