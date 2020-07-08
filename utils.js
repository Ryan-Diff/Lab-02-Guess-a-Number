export default function compareNumbers(guess, myNumber) {
    if (guess === myNumber) {
        return 0;
    } else if (guess < myNumber){
        return -1;
    } else if (guess > myNumber){
        return 1;
    } else {
        alert('not a number or math has failed us');
        throw new Error('not a number or math has failed us');
        
    }
}