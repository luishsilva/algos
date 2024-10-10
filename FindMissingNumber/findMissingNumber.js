const findMissingNumber = (numbers) => {
    let firstArrayElement = numbers[0]; 
    const lastArrayElement = numbers[numbers.length - 1];  
    let index = 0
    while (firstArrayElement <= lastArrayElement) {
      if ((firstArrayElement) !== numbers[index]) {
        return firstArrayElement;
      }
      firstArrayElement++;
      index++;
    } 
  }
  
  console.log(findMissingNumber([1,2,4,5])); // 3
  console.log(findMissingNumber([10,11,12,14,15])); // 13
  console.log(findMissingNumber([5,6,8,9,10])); // 7