// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.


// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for(let i = 0; i < friends.length; i += 1){
//     string += friends[i]

//     if(i < friends.length -1){
//         string += ", ";
//     }
// }
// console.log(friends);


const array = ['яблуко', 'банан', 'груша', 'апельсин'];

const result = array.join(', '); 

console.log(result); 






// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];


const copyCards = cards.slice()

const resultat = copyCards.splice(0, 2)
console.log(copyCards);
console.log(resultat);

