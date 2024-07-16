// 1.Berilgan matnda katta va kichik harflarning sonini toping 
function countCase(str) {
let count = 0;
let count1 = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
        count++;
    } else if (str[i] === str[i].toLowerCase()) {
        count1++;
    }
}
return {
    Katta   : count,
    kichik : count1
}


    }
    console.log(countCase("Hello World!")); // {uppercase: 2, lowercase: 8}





// 2.Berilgan massivdagi juft va toq indekslardagi elementlarning
//  yig'indisini alohida-alohida hisoblang. 
function evenOddIndexSums(arr) {
      let arr2 = arr.filter((item )=> item % 2 == 0)
      let sum1 = arr2.reduce((a,b)=> a+ b, 0)
      let arr3 = arr.filter((item )=> item % 2 !== 0)
      let sum2 = arr3.reduce((a,b)=> a+ b, 0)
      console.log(sum1);
      console.log(sum2);
      return arr
    }
    // console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6]));


// 3.Berilgan matritsani soat strelkasiga qarama-qarshi
//  yo'nalishda 90 daraja aylantiring.




// 4.Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.

function removeSpaces(str) {
    return str.split(" ").join("");
}
// console.log(removeSpaces("Hello World! How are you?")); // "HelloWorld!Howareyou?"




// 5.Berilgan ikki qatorning anagramma ekanligini tekshiring
function areAnagrams(str1, str2) {
    return str1.split("").sort().join("")  == str2.split("").sort().join("")
} 

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false


// 6.Berilgan massivdagi eng ko'p takrorlangan elementni toping.
function mostFrequentElement(arr) {
    let Map = arr.reduce((map, current) => {
        map[current] = (map[current] , 0) + 1;
        return map;
    }, {});
    let Num;
    let max = 0;
    
    for (let num in Map) {
        if (Map[num] > max) {
            max = Map[num];
            Num = num;
        }
    }
    return Num

}

// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1])); // 1

// 7.Berilgan qator ichidagi barcha raqamlarning yig'indisini hisoblang.
function sumOfDigits(str) {
    let numb = str.split('').filter(index => !isNaN(index));
    let sum = numb.reduce((a,b)=> a + +b, 0)
    
    return sum
}

// console.log(sumOfDigits("abc123def45")); // 15 (1+2+3+4+5)


// 8.Berilgan qator ichidagi har bir harfning chastotasini hisoblang.
function letterFrequency(str) {
  
}

// console.log(letterFrequency("hello world")); 
// {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}