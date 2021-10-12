// let Obj={
//    username : "mayank",
//    email : "mayank@gmail.com",
//    address: [{
//       personal_address: "",
// 	  state: "", 
// 	  city: ""
//    },
//    {
//       office_address: "b-605 , ghdsghdshjd",
// 	  state: "banglore", 
// 	  city: "abcd"
//    }]
// }

// console.log( Obj.address[1])





function data( data) {
  let arr = [];
console.log((data))
  if(typeof(data) === "number"){
   for( let i =1; i<= data; i++)
   {
      arr.push(i);
   }
   console.log(arr)
}
else{
   console.warn("Invalid Input")
}
}

function numbers(numbers ) {
   
   data(Math.floor(Math.random() * 100))
}


numbers(
   setInterval(() => {  },2000)
)

// let arr = [1,2,3];
// const reducers = (previousState , currentState) => previousState + currentState;




// console.log(arr.reduce(reducers, 0))
