
    // Задание 1:

    console.log("Task 1: \n");
    for(let i = 10; i < 50; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }

    // Задание 2:
    console.log("Task 2: \n");
    let Info = {
        name: 'Maria',
        surname: 'Ilchenko',
        age: 20,
        pet: true
    };
    console.log(Info);

    // Задание 3:

    const array = [
        'я в Симбирск,',//0
        'в трактире.',//1
        'с утра',//2
        'В ту же ночь',//3
        'Я остановился',//4
        'для закупки', //5
        'что и было поручено Савельичу.',//6
        'приехал,',//7
        'где должен был',//8
        'нужных вещей',//9
        'отправился по лавкам',//10
        'пробыть сутки',//11
        'Савельич'//12
    ];
   /* "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"*/
    
    const array2 = [
        array[3],
        array[7],
        array[0],
        array[8],
        array[11],
        array[5],
        array[9],
        array[6],
        array[4],
        array[1],
        array[12],
        array[2],
        array[10]
    ]

    let str = array2.join(' ');
    console.log("\nTask 3: " + str + "\n");
   
    // Задание 4:

    console.log("Task 4: \n");
    function Work(firstName, lastName){
        const fullName = `${firstName} ${lastName}`;
        console.log(fullName);
    }
    console.log(Work("Maria", "Ilchenko") + "\n");

    // Задание 5:

    // Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    console.log("Task 5: \n");
    let i = 21;
    while(i < 67){
        i++;
        if(i%2 != 0){
            console.log(i);
        }
    }
