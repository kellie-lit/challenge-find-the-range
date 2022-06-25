// Starting array (MY ARRAY)
let array = [28, 43, -12, 30, -4, 0, 37]

array[4]
array[6]
// Write your solution below:
console.log(array[4])
console.log(array[6])

//THIS IS STEPHANIE WILKS ARRAY
// ini arrray and add values to array
//init variables to hold largest and smallest num
//Loop through array and compare number at current index to biggest and smallest
//if current number is bigger than biggest, set biggest to current number
//if curent number is smaller than smallest, set smallest to current number
//print smallest and largest when all the number have been looked at



let nums =[1, 4, 11, 2, 37, -4];
let biggest = 0;
let smallest = 1;

for (i=0;i < nums.length;i++){
    if( biggest > nums[i]){
        biggest = nums[i];
    }else if (smallest < nums[i]){
        smallest = nums[i];
    }
}

console.log(biggest)
console.log(smallest)