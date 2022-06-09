const myData = [
  {
    title: `var person = {
            age: 23,
            getAge: function(){
              return this.age;
            }
          }
                  
          var person2 = {age:  54};
          person.getAge.call(person2);`,
    options: [
      { id: 1, option: "23" },
      { id: 2, option: "54" },
      { id: 3, option: "syntex error" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 2,
  },
  {
    title: `function multiply(a,b){
        return a*b;
      }
      
      function currying(fn){
        return function(a){
          return function(b){
            return fn(a,b);
          }
        }
      }
      
      var curriedMultiply = currying(multiply);
      curriedMultiply(4)(3)
      `,
    options: [
      { id: 1, option: "12" },
      { id: 2, option: "144" },
      { id: 3, option: "syntex error" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 1,
  },
  {
    title: `function divideByHalf(sum){
        console.log(Math.floor(sum / 2));
      }
      
      function multiplyBy2(sum){
        console.log(sum * 2);
      }
      
      function operationOnSum(num1,num2,operation){
        var sum = num1 + num2;
        operation(sum);
      }
      
      operationOnSum(3, 3, divideByHalf);`,
    options: [
      { id: 1, option: "3" },
      { id: 2, option: "20" },
      { id: 3, option: "syntex error" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 1,
  },
  {
    title: `function divideByHalf(sum){
        console.log(Math.floor(sum / 2));
      }
      
      function multiplyBy2(sum){
        console.log(sum * 2);
      }
      
      function operationOnSum(num1,num2,operation){
        var sum = num1 + num2;
        operation(sum);
      }
      
      operationOnSum(5, 5, multiplyBy2);`,
    options: [
      { id: 1, option: "3" },
      { id: 2, option: "20" },
      { id: 3, option: "syntex error" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 2,
  },
  {
    title: `function computeSum(arr){
        if(arr.length === 1){
          return arr[0];
        }
        else{
          return arr.pop() + computeSum(arr);
        }
      }
      
      computeSum([7, 8, 9, 99]);`,
    options: [
      { id: 1, option: "123" },
      { id: 2, option: "undefine" },
      { id: 3, option: "syntex error" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 1,
  },
  {
    title: `var obj1 = {
        valueOfThis: function(){
          return this;
        }
      }
      var obj2 = {
        valueOfThis: ()=>{
          return this;
        }
      }
      
      obj1.valueOfThis();`,
    options: [
      { id: 1, option: "Will return the object obj1" },
      { id: 2, option: "undefine" },
      { id: 3, option: "syntex error" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 1,
  },
  {
    title: `var obj1 = {
        valueOfThis: function(){
          return this;
        }
      }
      var obj2 = {
        valueOfThis: ()=>{
          return this;
        }
      }
       
      obj2.valueOfThis();`,
    options: [
      { id: 1, option: "Will return the object obj1" },
      { id: 2, option: "Will return window/global object" },
      { id: 3, option: "undefine" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 2,
  },
  {
    title: `var variable1 = 23;

    let variable2 = 89;
    
    function catchValues(){
      console.log(variable1);
      console.log(variable2); 
    }
    
    window.variable1;`,
    options: [
      { id: 1, option: "syntex error" },
      { id: 2, option: "23" },
      { id: 3, option: "undefine" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 2,
  },
  {
    title: `var variable1 = 23;

    let variable2 = 89;
    
    function catchValues(){
      console.log(variable1);
      console.log(variable2); 
    }
    
    window.variable2;`,
    options: [
      { id: 1, option: "syntex error" },
      { id: 2, option: "23" },
      { id: 3, option: "undefine" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 3,
  },
  {
    title: `function extractingArgs(...args){
        return args[1];
      } 
      
      function addAllArgs(...args){
        let sumOfArgs = 0;
        let i = 0;
        while(i < args.length){
          sumOfArgs += args[i];
          i++;
        }
        return sumOfArgs;
      }
      addAllArgs(6, 5, 7, 99);`,
    options: [
      { id: 1, option: "117" },
      { id: 2, option: "8" },
      { id: 3, option: "undefine" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 1,
  },
  {
    title: `function extractingArgs(...args){
        return args[1];
      } 
      
      function addAllArgs(...args){
        let sumOfArgs = 0;
        let i = 0;
        while(i < args.length){
          sumOfArgs += args[i];
          i++;
        }
        return sumOfArgs;
      }
      addAllArgs(1, 3, 4);`,
    options: [
      { id: 1, option: "117" },
      { id: 2, option: "8" },
      { id: 3, option: "undefine" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 2,
  },
  {
    title: `const classDetails = {
        strength: 78,
        benches: 39,
        blackBoard:1
      }
      
      const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;
      console.log(classStrength);`,
    options: [
      { id: 1, option: "true" },
      { id: 2, option: "false" },
      { id: 3, option: "undefine" },
      { id: 4, option: "type error" },
    ],
    selectedOption: "",
    answerId: 2,
  },
];

export default myData;
