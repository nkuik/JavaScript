const exerciseFunctions = require('./exercises.js');

test('ageify returns correctly ageified string', () => {
    const yearOfBirth = 1990;
    const yearFuture = 2020;
    const ageifiedString = exerciseFunctions.ageify(yearOfBirth, yearFuture);
    const expectedString = "You will be 30 years old in 2020";
    expect(ageifiedString).toEqual(expectedString);
});

test('goodBoyOldBoy correctly returns results in human years', () => {
    const dogYearOfBirth = 2017;
    const dogYearFuture = 2027;
    const shouldShowResultInDogYears = false;
    const ageifiedString = exerciseFunctions.ageify(dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears);
    const expectedString = "Your dog will be 10 human years old in 2027";
    expect(ageifiedString).toEqual(expectedString);
});

test('goodBoyOldBoy correctly returns results in dog years', () => {
    const dogYearOfBirth = 2017;
    const dogYearFuture = 2027;
    const shouldShowResultInDogYears = true;
    const ageifiedString = exerciseFunctions.ageify(dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears);
    const expectedString = "Your dog will be 70 dog years old in 2027";
    expect(ageifiedString).toEqual(expectedString);
});
