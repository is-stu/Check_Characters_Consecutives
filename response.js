const input = `3
abb
aaab
ababab`

const arrayInput = input.split('\n')

for (let i = 1; i < arrayInput.length; i++) {
  fixArray(arrayInput[i])
}


function fixArray(letterArray){
  const test = letterArray.replace(/(.)\1+/g, '$1');
  console.log(test);
}
