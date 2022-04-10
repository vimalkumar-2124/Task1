// 1.Do the below programs in anonymous function, arrow function & IIFE
//     a. Print odd numbers in an array
console.log("\nPrint odd numbers in an array\n")
console.log("=================================\n")
function odd(arr){
    console.log("Normal way of declaring function:\n")
    for(let i of arr){
        if(i % 2 != 0){
            console.log(i)
        }
    }
};
const odd2 = function(arr){
    console.log("\nAnonymous Function:\n")
    for(let i of arr){
        if(i % 2 != 0){
            console.log(i)
        }
    }
};

const odd3 = (arr => {
    console.log("\nArrow Function:\n")
    for(let i of arr){
        if(i % 2 != 0){
            console.log(i)
        }
    }
});
arr = [1,2,3,4,5,6,7,8,9,10]
odd(arr)
odd2(arr)
odd3(arr)


//     b. Convert all the strings to title caps in a string array
console.log("\n=================================")
console.log("\nConvert all the strings to title caps in a string array\n")
console.log("=================================\n")
function titleCaps(str){
    console.log("Normal way of declaring function:\n")
    return str.toLowerCase().split(" ").map(function(word){
    return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(" ")
};
const titleCaps2 = function(str){
    console.log("\nAnonymous Function:\n")
    return str.toLowerCase().split(" ").map(function(word){
        return (word.charAt(0).toUpperCase() + word.slice(1))
        }).join(" ")
};

const titleCaps3 = (str => {
    console.log("\nArrow Function:\n")
    return str.toLowerCase().split(" ").map(function(word){
        return (word.charAt(0).toUpperCase() + word.slice(1))
        }).join(" ")
});
str = 'Title caps in a string way'
console.log(titleCaps(str))
console.log(titleCaps2(str))
console.log(titleCaps3(str))

//     c. Sum of all numbers in an array
console.log("\n=================================")
console.log("\nSum of all numbers in an array\n")
console.log("=================================\n")
function sum(arr){
    console.log("Normal way of declaring function:\n")
    sum = 0
    arr.forEach(element => sum += element)
    console.log(sum)
};
const sum2 = function(arr){
    console.log("\nAnonymous Function:\n")
    sum = 0
    arr.forEach(element => sum += element)
    console.log(sum)
};

const sum3 = (arr => {
    console.log("\nArrow Function:\n")
    sum = 0
    arr.forEach(element => sum += element)
    console.log(sum)
});
arr = [1,2,3,4,5,6,7,8,9,10]
sum(arr)
sum2(arr)
sum3(arr)

//     d. Return all the prime numbers in an array
console.log("\n=================================")
console.log("\nReturn all the prime numbers in an array\n")
console.log("=================================\n")
function prime(n){
    console.log("Normal way of declaring function:\n")
    
    for(let j of n){
        count = 0

        for(let i = 2; i<=j ; i++)
        {
            if(j % i == 0){
                count += 1
            }
        }
        if(count == 1)
        {
            console.log(j)
        }
    }
};
const prime2 = function(n){
    console.log("\nAnonymous Function:\n")
    
    for(let j of n){
        count = 0

        for(let i = 2; i<=j ; i++)
        {
            if(j % i == 0){
                count += 1
            }
        }
        if(count == 1)
        {
            console.log(j)
        }
    }
};

const prime3 = (n => {
    console.log("\nArrow Function:\n")
    
    for(let j of n){
        count = 0
        for(let i = 2; i<=j ; i++)
        {
            if(j % i == 0){
                count += 1
            }
        }
        if(count == 1)
        {
            console.log(j)
        }
    }
});
arr = [2,3,4,5,6,7,8,9,10]
prime(arr)
prime2(arr)
prime3(arr)

//     e. Return all the palindromes in an array
console.log("\n=================================")
console.log("\nReturn all the palindromes in an array")
console.log("=================================\n")

function palindrome(s){
    console.log("Normal way of declaring function:\n")
    
    for(let i of s){
        
        if (i == i.split("").reverse().join("")){
            console.log(i)
        }
    }
};
const palindrome2 = function(s){
    console.log("\nAnonymous Function:\n")
    
    for(let i of s){
        if (i == i.split("").reverse().join("")){
            console.log(i)
        }
    }
};

const palindrome3 = (s => {
    console.log("\nArrow Function:\n")
    
    for(let i of s){
        if (i == i.split("").reverse().join("")){
            console.log(i)
        }
    }
});
arr = ['vimal','mam','test','string','mom']
palindrome(arr)
palindrome2(arr)
palindrome3(arr)


//     f. Return median of two sorted arrays of the same size
console.log("\n=================================")
console.log("\nReturn median of two sorted arrays of the same size\n ")
console.log("=================================\n")


function median(arr,m){
    console.log("Normal way of declaring function:\n")
    
    result = Math.floor((arr[m] + arr[m-1])/2)

    console.log(result)
};
const median2 = function(arr,m){
    console.log("\nAnonymous Function:\n")
    
    result = Math.floor((arr[m] + arr[m-1])/2)

    console.log(result)
};

const median3 = ((arr,m) => {
    console.log("\nArrow Function:\n")
    
    result = Math.floor((arr[m] + arr[m-1])/2)

    console.log(result)
});
arr = [1, 12, 15, 26, 38]
arr2 = [2, 13, 17, 30, 45]
res_arr = arr.concat(arr2)
res_arr.sort((a,b) => a-b)
mid = Math.floor(res_arr.length/2)
median(res_arr,mid)
median2(res_arr,mid)
median3(res_arr,mid)


//     g. Remove duplicates from an array
console.log("\n=================================")
console.log("\nRemove duplicates from an array\n")
console.log("=================================\n")

function duplicate(s){
    console.log("Normal way of declaring function:\n")
    
    set = new Set(s)

    console.log(...set)
};
const duplicate2 = function(s){
    console.log("\nAnonymous Function:\n")
    
    set = new Set(s)

    console.log(...set)
};

const duplicate3 = (s => {
    console.log("\nArrow Function:\n")
    
    set = new Set(s)

    console.log(...set)
});
arr = [2,5,3,5,4,3,1,10,4]
duplicate(arr)
duplicate2(arr)
duplicate3(arr)


//     h. Rotate an array by k times
console.log("\n=================================")
console.log("\nRotate an array by k times\n")
console.log("=================================\n")
function rotate(arr,m,l){
    console.log("Normal way of declaring function:\n")
    k = m % l
    for (let i = 0; i<l; i++){
        if(i<k){
            console.log(arr[l + i - k])
        }
        else{
            console.log(arr[i-k])
        }
    }
    
};
const rotate2 = function(arr,m,l){
    console.log("\nAnonymous Function:\n")
    k = m % l
    for (let i = 0; i<l; i++){
        if(i<k){
            console.log(arr[l + i - k])
        }
        else{
            console.log(arr[i-k])
        }
    }
    
};

const rotate3 = ((arr,m,l) => {
    console.log("\nArrow Function:\n")
    k = m % l
    for (let i = 0; i<l; i++){
        if(i<k){
            console.log(arr[l + i - k])
        }
        else{
            console.log(arr[i-k])
        }
    }
    
});
arr = [1, 2, 3, 4, 5]
k = 2
rotate(arr,k,arr.length)
rotate2(arr,k,arr.length)
rotate3(arr,k,arr.length)