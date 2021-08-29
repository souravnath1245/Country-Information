// const colors = ['green','yellow', 'blue', '#f15025', 'black','orange', 'lightblue'];

// const btn =document.querySelector('#btn').addEventListener('click', function(){
//     let random =Math.floor(Math.random() * colors.length) ;
//     let body =document.body.style.backgroundColor = colors[random];
//     console.log(body);

//     // for(let color of colors){
//     //     console.log(color);
//     // }
// })

// variable
// default parameters
// template string
// arrow function
// spread operator
//

// (function () {
//   const hexValue = document.querySelector(".hex-value");
//   document
//     .querySelector("#btn")
//     .addEventListener("click", function () {
//       const hexValues = [
//         0,
//         1,
//         2,
//         3,
//         4,
//         5,
//         6,
//         7,
//         8,
//         9,
//         "A",
//         "B",
//         "C",
//         "D",
//         "E",
//         "F",
//       ];
//       let haxColor = "#";
//       for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * hexValues.length);
//         console.log(random);
//         haxColor += hexValues[random];
//       }
//       document.body.style.backgroundColor = haxColor;
//       hexValue.innerHTML = haxColor;
//     });
// })()

// Hello message function
document.getElementById("submitBtn").addEventListener("click", function () {
  const input = document.querySelector("#message");
  let inputValue = input.value;
  if (inputValue == "") {
    const alert = document.getElementById("alert");
    alert.style.display = "block";
  } else {
    const alert = document.getElementById("alert");
    alert.style.display = "none";
    document.querySelector("#displayMessage").innerHTML = inputValue;
  }
  input.value = " ";
});
