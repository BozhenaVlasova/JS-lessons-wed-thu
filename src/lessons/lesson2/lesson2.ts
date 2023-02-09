console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(x: number) {
    return function (y: number) {
        return x + y;
    };
};
console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count: number = 1
    return function () {
        return count++
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
const Counter = (function () {
    let privateCounter = 0;

    function changeBy(val: number) {
        privateCounter += val;
    }

    return {
        increase: function () {
            changeBy(1);
        },
        decrease: function () {
            changeBy(-1);
        },
        reset: function () {
            privateCounter = 0;
        },
        set: function (n: number) {
            privateCounter = n
        },
        value: function () {
            return privateCounter
        }
    };
})();

console.log(Counter.value()); // 0
Counter.increase();
console.log(Counter.value()); // 1
Counter.increase();
console.log(Counter.value()); // 2
Counter.decrease();
console.log(Counter.value()); // 1
Counter.reset();
console.log(Counter.value()); // 0
Counter.set(5)
console.log(Counter.value()) // 5
Counter.increase();
Counter.increase();
console.log(Counter.value()) // 7
Counter.decrease();
console.log(Counter.value()) // 6

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
// 1) Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTo1(num: number): number {
    return num === 1 ? 1 : num + sumTo1(num - 1)
}

function sumTo2(num: number): number {
    let res = 0
    for (let i = 1; i <= num; i++) {
        res += i
    }
    return res
}

console.log(sumTo1(4)) // 10
console.log(sumTo2(4)) // 10
console.log(sumTo1(100)) // 5050
console.log(sumTo2(100)) // 5050

// 2) Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(num: number): number {
    let res = 1
    if (num >= 1) {
        res *= num * factorial(num - 1)
    }
    return res
}

console.log(factorial(5))

// 3) Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
function fib(num: number): number {
    return num > 1 ? fib(num - 1) + fib(num - 2) : num
}

console.log(fib(3))
console.log(fib(7))

// 4) Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// @ts-ignore
function printList1(list) {
    console.log(list.value)
    if (list.next) {
        return printList1(list.next)
    }
}

// @ts-ignore
function printList2(list) {
    let l = list;

    while (l) {
        alert(l.value);
        l = l.next;
    }
}

console.log(printList1(list))
console.log(printList2(list))

// 5) Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// @ts-ignore
function printList3(list) {
    let res: any = []
    console.log(list.value)
    if (list.next) {
        return res.push(printList3(list.next))
    }
    return [...res].sort()
}
// @ts-ignore
function printList4(list) {
    let l = list;
    let res = []
    while (l) {
        alert(l.value);
        l = l.next;
        res.push(l)
    }
    return [...res].sort()
}
console.log(printList3(list))
console.log(printList4(list))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};