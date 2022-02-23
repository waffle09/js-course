
    // Задание 1:
let Info = {
    cityName: 'Chernihiv',
    cityCont: 'Ukraine',
    population: 1234343,
    stadium: true
};

console.log("Task 1");
console.log(Info);

    // Задание 2:
let hight = 40;
let width = 70;

let square = hight * width;

console.log("Task 2: The square is " + square + "\n");


    // Задание 3:
     
    let time = 2;
    let speedOfFirst = 95;
    let speedOfSecond = 114;

    let cities = (speedOfFirst + speedOfSecond)*time; // скорость сближения * расстояние между ними. 

    console.log("Task 3: " + cities + " km\n");

    // Задание 4:

    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber > 20){
        console.log("Task 4: randomNumber меньше 20\n");
    }
    else if(randomNumber < 50){
        console.log("Task 4: randomNumber больше 50\n");
    }
    else{
        console.log("Task 4: randomNumber больше 20, и меньше 50\n");
    }

    // Задание 5:
    
    switch (true) {
        case (randomNumber > 20):
            console.log("Task 5: randomNumber меньше 20\n");
          break;
        case (randomNumber < 50):
            console.log("Task 5: randomNumber больше 50\n");
          break;
        default:
            console.log("Task 5: randomNumber больше 20, и меньше 50\n");
          break;
      }




