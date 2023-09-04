let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
      cats.push(name);}
    
destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);}

destructivelyPrependCat("Bob");
console.log(cats);

function destructivelyRemoveLastCat() {
    cats.pop();}

destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat() {
    cats.shift();}

destructivelyRemoveFirstCat();
console.log(cats);

function appendCat () {
const appendCat = [...cats, "Broom"];

    return appendCat;
    console.log(appendCat); 
    console.log(cats);
}

function prependCat () {
    const prependCat = ["Arnold", ...cats];

    return prependCat;
    console.log(prependCat); 
    console.log(cats);
}

function removeLastCat () {
    const removeLastCat = cats.slice(0, cats.length - 1);
    return removeLastCat;

    console.log(removeLastCat);
    console.log(cats);
}

function removeFirstCat () {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;

    console.log(removeFirstCat);
    console.log(cats);
}
