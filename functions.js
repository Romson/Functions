//Function without 'argument'
function singSong() {
    console.log('%c 1e Couplet', 'font-weight: bold;');
    console.log('Tussen hele hoge bomen in een groot kabouterbos');
    console.log('Stond een heel klein aardig huisje zomaar midden op het mos');
    console.log('\'k Zou er heel graag willen wonen, maar ik ben er veels te groot');
    //Add 2 new lines with + '\n\n'
    console.log('\'t Is gemaakt voor de kabouters met hun mutsjes blauw en rood' + '\n\n');
    //Add bolded text with %c and closing CSS value with ;
    console.log('%c 2e Couplet', 'font-weight: bold;');
    console.log('\'s Avonds bij het donker worden is het helemaal niet naar');
    console.log('Want dan zitten de kabouters heel gezellig bij elkaar' + '\n\n');
    //Add bolded text with %c and closing CSS value with ;
    console.log('%c 3e Couplet', 'font-weight: bold;');
    console.log('Ieder op zijn eigen bankje met een kaarsje in de hand');
    console.log('En dan is het zo gezellig in kabouter sprookjes land');
}

//Function with 'argument'
function square(num) {
    console.log(num * num);
}
square(10); //Output 10 * 10 = 100
square(3); //Output 3 * 3 = 9
square(4); //Output 4 * 4 = 16

//Function with multiple 'arguments' (e.g. Calculate area)
function area(length, width) {
    console.log(length * width + ' ' + 'm2');
}
area(16,16);

//Function with 'argument' + string concatenate +
function person(name) {
    console.log('Hello there ' + name + '!');
}
person('name');

//Function with 'arguments' + string concatenate +
function wizard(name1, name2, name3) {
    console.log(name1 + ', ' + 'you\'re a wizard Harry');
    console.log(name2 + ', you are very funny but a bit insensitive and immature');
    console.log(name3 + ', you really are the cleverest witch of your age');
}
wizard('Harry Potter', 'Ronald Bilius Weasley', 'Hermione Granger');