
// TODO: Define yearOfBirth and yearFuture variables here:

function ageify(yearOfBirth, yearFuture) {
    // Calculate the age based on the birth year and the year in the future
    age = 0;
    return "concatenated string with age";
};

// TODO: Substitute your variables in this function
console.log(`ageify result is: ${ageify(1921, 2035)}`);

// TODO: Define dogYearOfBirth and dogYearFuture here:

let shouldShowResultInDogYears = true;

function goodBoyOldBoy(dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears)  {
    dogAge = 0;
    return "concatenated string with age";
};
console.log(`goodBoyOldBoy result is: ${goodBoyOldBoy(2005, 2023, shouldShowResultInDogYears)}`);

// Do not pay too much attention here--these are for the tests
module.exports = {
    ageify,
    goodBoyOldBoy
};
