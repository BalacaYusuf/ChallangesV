

// ------------------------------------FirstTask-----------------------

// array = [0, 0, 1, 2, 0, 9, 8];

// function arrays(params) {
//    let non_zeroElements=params.Filter(x=>x!==0)
//    let zeroCount=params.length-non_zeroElements.length;
//    let zero=Array(zeroCount).fill(0);

//    return non_zeroElements.concat(zero);
// }

// console.log(arrays(array));


// ------------------------------------SecondTask-----------------------

// let centence="What is the biggestt animal in the world";


// let ArrCent=centence.split(" ");

// let min=ArrCent[0].length;

// ArrCent.forEach(element => {

   

//    if(min>element.length)

//    {
//       min=element.length;
//    }

    

// });

// console.log(min);


// ------------------------------------ThirdTask----------------------

// let year=parseInt(prompt("Enter the year ,Please."));

// let century = Math.ceil(year / 100);

// console.log(century);

// ------------------------------------FouthTask----------------------



// const arr = ("this is my method");
// let words=arr.split(" ");
// let countLetter=0;
// let FirstNoRpeadletter=0;

// words.forEach(element => {
//     for(let i=0;i<element.length;i++)
//     {
//      if( element[0]==element[i])
//       {

//       countLetter++;

//      }
     
//       if(countLetter==1)
//       {
//          FirstNoRpeadletter+=element[0];
//       }
      
//    }
//    console.log(FirstNoRpeadletter);
//  });

 

// ------------------------------------FivthTask----------------------


// let words=("this is my book");

// let newwords=words.split(" ");

// let vowels=0;



// function countVowels(arr)
// {
//    arr.forEach(element => {
//       for(let i=0;i<element.length;i++)
//       {
        
//           if(element[i]=="i" || element[i]=="o")
//           {
//             vowels+=1;
//           }
//       }
//    });
//    return vowels;
// }

// console.log(countVowels(newwords));



