// El bibliotecario cuenta
//  con libros de 26 categorías de la A a la Z, todos los títulos de los libros comienzan con una letra y no tienen espacios. La primera letra de cada título de libro indica la categoría a la que pertenece seguido del título hay un espacio y luego un número que
//  indica la existencia de cada libro

// // Ejemplo de lista
//  de libros existentes

let $books = ['LENIN_PARA_PRINCIPIANTES 20', 'El_TUNEL 10', 'EL_PERFUME 100','LOBO_ESTEPARIO 40', 'HARRY_POTTER 5', 'hurra 20'];

// Necesitamos implementar
//  una función que reciba dos parámetros; una arreglo de libros existentes y otro de categorías

// Tiene que devolver
//  un arreglo con las categorías que recibió y sus existencias

// Ejemplo #1 usando
//  la $books como primer parámetro

// Categorías

let $categories = ['A', "B", "C", "D", "E"];
console.log(categorize($books, $categories));
// Respuesta deseada

// ['A : 0', 'B: 0', 'C : 0', 'D : 0', 'E : 110'];

// Ejemplo #2  usando
//  la $books como primer parámetro

// Categorías

let $categories = ['H', 'X', 'L'];
console.log(categorize($books, $categories));

// Respuesta deseada

// ['H : 5', 'X: 0', 'L : 60'];

// Property redefination that converts all category items to upper case
$categories = $categories.map(item => item.toUpperCase());

/**
 * Function that gets and returns the needed specs for a given books list.
 *
 * @param {*} booksList An array of books
 * @returns {*} Object that contains in the key the first letter of the book and in the value the quantity of them
 * @example ['LAS_PROFECIAS 10', 'NARNIA 20'] and returns {L: 10, N:20}
 */
function getBooksSpecs(booksList) {
    let specs = {};
    booksList.forEach(bookItem => {
        let [bookName, quantity] = bookItem.split(' ');
        bookName = bookName.substring(0, 1).toUpperCase();
        if(!specs[bookName]) {
            specs[bookName] = 0;
        }
        specs[bookName] += parseInt(quantity);
    });
    return specs;
}


/**
 * Function that analyzes and returns the quantity of books that exists and then checks 
 * how many of them exists within a given category list
 *
 * @param {*} booksList A given array of books
 * @param {*} categoriesList A given array of all available categories
 * @returns {*} Object that contains all existences of books within a given array of categories
 * @example ['LAS_PROFECIAS 10', 'NARNIA 20'], ['L', 'N'] and returns {L:10, N:20}
 */
function categorize(booksList, categoriesList) {
    let innerCategory = {};
    booksList = getBooksSpecs(booksList);
    categoriesList.forEach(categoryLetter => {
        innerCategory[categoryLetter] = 0;
        if (booksList[categoryLetter]) {
            innerCategory[categoryLetter] += parseInt(booksList[categoryLetter]);
        }
    });
    return innerCategory;
}