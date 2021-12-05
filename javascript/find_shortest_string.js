function findShortestString(arr) {

  let shortest = arr[0]

  for (const string of arr){

    if (string.length < shortest.length) {

      shortest = string;
    }
  }

  return shortest;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("Expecting: 'I'");
  console.log("=>", findShortestString(['Hi', 'I', 'am', 'Mike']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  const startTime = Date.now();

  let shortCount = 0;
  let longCount = 0;

  while (shortCount < 1000) {
    const shortInput = [];

    for (let i = 0; i < 5; ++i) {
      shortInput.push("hello")
    }

    findShortestString(shortInput)
    ++shortCount
  }
  while (longCount < 1000) {
    const longInput = [];

    for (let i = 0; i < 100; ++i) {
      longInput.push("goodbye")
    }

    findShortestString(longInput);
    ++longCount

  }

  const stopTime = Date.now();

  const avgTime = (stopTime - startTime) / 2000;

  console.log(`Average runtime for findShortestString() = ${avgTime} seconds`)



}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*

given an array of strings, return the shortest string
in the array... if two arrays are the same length,
return the first one to appear.

this needs to iterate through an array, checking each
string to see which is longest. the current longest
should be stored into a variable, and that will now
be the length against which is checked as the function
iterates through the arr
*/