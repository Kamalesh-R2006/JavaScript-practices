var numbers = [11,14,17,8,3,8]
numbers= numbers.filter(num => num % 2 !== 0).map(num => num * num)
console.log(numbers)