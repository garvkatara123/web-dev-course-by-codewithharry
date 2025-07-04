/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
// here is the solution of this Quiz:- 

let rand = Math.random();
let first,second,third;
if(rand < 0.33){
    first = "Crazy";
    second = "Engine";
    third = "Bros";
}
else if(rand >=0.33 && rand < 0.66){
    first = "Amazing"; 
    second = "Foods";
    third = "Limited";
}
else{
    first = "Fire";
    second = "Garments";
    third = "Hub";
}
console.log(`Your business name is: ${first} ${second} ${third}`);