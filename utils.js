export function compareNumbers(guess, myNumber) {
    if (guess === myNumber) {
        return 0;
    } else if (guess < myNumber){
        return -1;
    } else if (guess > myNumber){
        return 1;
    } 
}
