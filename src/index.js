module.exports = function toReadable (num) {
    let arr = ['zero', "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    let arrDecimalNum = ['', '', 'twenty', 'thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    for(i=21;i<1000;i++) {
        if(num<100) {
             arr.push(arrDecimalNum[Math.floor(i/10)] + (i%10==0?'':' '+arr[i%10]));
        }else {
            arr.push(arr[Math.floor(i/100)] +' hundred'+(i%100==0?'':' '+arr[i%100]));
        }
    }
    return arr[num];
};
