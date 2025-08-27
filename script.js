// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.


const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for(let i = 0; i < friends.length; i += 1){
    string += friends[i]

    if(i < friends.length -1){
        string += ", ";
    }
}
console.log(friends);
