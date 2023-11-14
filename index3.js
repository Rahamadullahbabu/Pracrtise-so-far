function exampleFunction(varParam, letParam, constParam) {
    console.log("varParam:", varParam);
    console.log("letParam:", letParam);
    console.log("constParam:", constParam);
  }
  
  var a = "VarVariable";
  let b = "LetVariable";
  const c = "ConstVariable";
  
  exampleFunction(a, b, c);

  const person = {
    name: "John Doe",
    age: 30,
    city: "Example City"
  };
  
  const jsonString = JSON.stringify(person);
  console.log(jsonString);
  
  const jsonStr = '{"name":"John Doe","age":30,"city":"Example City"}';
const parsedObject = JSON.parse(jsonStr);
console.log(parsedObject);

const jsonArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Charlie", age: 28 }
  ];
  
  const jsonArrayString = JSON.stringify(jsonArray);
  console.log(jsonArrayString);
  
  const parsedArray = JSON.parse(jsonArrayString);
  console.log(parsedArray);

  const invalidJsonStr = '{"name":"John Doe","age":30,"city":"Example City",}';

try {
  const parsedObject = JSON.parse(invalidJsonStr);
  console.log(parsedObject);
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}

  var Fruitname = "apple"   

var  count = 10
var price = 100
var total= (count*price)
console.log(total)
function Iphone()
{
    console.log("Costly Mobile")
}
Iphone()
var a=10
var g=20
function add()
{
    console.log(a+g)
}
add()

var  Factor= "Dhanush "
var  Fpalyer ="Dhoni "
var Fmovie = "Mayakam Enna"

function favorite()
{
    console.log("Foutire actor:"+ Factor+Fmovie+Fpalyer)
}
favorite()

function area(l,b )
{
    console.log("Area is:" + l*b)
}
area(10,20)


var homework=false
if (homework)
{
    console.log("greatjob")
}
else{
    console.log("bad")
}

