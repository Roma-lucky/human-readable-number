module.exports = function toReadable (num) {
    let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    let arrDecimalNum = ['thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   // if(number<=arr) {return `${arr[number]}`}

    let objUnitsAndTens = {
        "one": 'one',
        "two": 'two',
        "three": 'three',
        "four": 'four',
        "five": 'five',
        "six": 'six',
        "seven": 'seven',
        "eight": 'eight',
        "nine": 'nine',
        "ten": 'ten',
        "eleven": 'eleven',
        "twelve": 'twelve',
        "thirteen": 'thirteen',
        "fourteen": 'fourteen',
        "fifteen": 'fifteen',
        "sixteen": 'sixteen',
        "seventeen": 'seventeen',
        "eighteen": 'eighteen',
        "nineteen": 'nineteen',
        "twenty": 'twenty',
        "thirty": 'thirty',
        "fourty": 'fourty',
        "fifty": 'fifty',
        "sixty": 'sixty',
        "seventy": 'seventy',
        "eighty": 'eighty',
        "ninety": 'ninety',
    };

    for(let key in objUnitsAndTens) {
        if(num == key) {
            return objUnitsAndTens[key];
        }
    }
  
};
