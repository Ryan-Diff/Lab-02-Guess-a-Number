const test = QUnit.test;
import { compareNumbers } from '../utils.js';

test('test will compare myNumber and userNumber', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const myNumber1 = 10;
    const myNumber2 = 20;
    const myNumber3 = 15;

    const userNumber1 = 9;
    const userNumber2 = 12;
    const userNumber3 = 15;

    const expected1 = 1;
    const expected2 = 1;
    const expected3 = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compareNumbers(myNumber1, userNumber1);
    const actual2 = compareNumbers(myNumber2, userNumber2);
    const actual3 = compareNumbers(myNumber3, userNumber3);
        


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected1, actual1);
    assert.equal(expected2, actual2);
    assert.equal(expected3, actual3);
});