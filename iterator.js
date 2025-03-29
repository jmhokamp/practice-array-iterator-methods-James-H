
//Task 1: Using forEach() 
let favCities = ['Kansas City', 'Toyko', 'Seattle', 'Birmingham', 'Nashville' ];
let favCitiesUp = favCities.map(city => 
    city.toUpperCase());
console.log(favCitiesUp);
//[ 'KANSAS CITY', 'TOYKO', 'SEATTLE', 'BIRMINGHAM', 'NASHVILLE' ]

//Task 2: Transforming with map() 
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num );
console.log(squares);
//[ 1, 4, 9, 16, 25 ]

//Task 3: Filtering with filter() 
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);
//[ 85, 90, 100 ]

//Task 4: Finding with find() and findIndex()
let favoriteFood =  ['Soup', 'Quesabirria', 'Korean Beef', 'Hamburger', 'Lobster', 'Lamb Chop' ];
let firstFood = favoriteFood.find(food => food.length > 4);
console.log(firstFood);
//Quesabirria

let foodPosition = favoriteFood.findIndex(food => food.length > 4);
console.log(foodPosition);










