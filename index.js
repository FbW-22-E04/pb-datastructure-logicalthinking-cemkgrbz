//1

const numbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

numbers.sort()
console.log(numbers)
//2

const names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]

names.sort()
console.log(names)

//Bonus


names.sort((a, b) => {

    if (a.length > b.length) return 1
    if (b.length > a.length) return -1
  
    return 0
  
  });

console.log(names)