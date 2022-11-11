function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

var kim = new Person('kim', 10, 20, 30);//Person이란 함수를 생성자로서 동작시킴. 괄호 안에 입력값도 줄 수 있음
// var kim = {
//     name:'kim',
//     first:10,
//     second:20,
//     third:30,
//     sum:function(){
//         return this.first+this.second+this.third; //this는 method가 속해있는 객체를 가리키도록 한 약속
//     }
// }
var lee = new Person('lee', 10, 10, 10);
// var lee = {
//     name:'lee',
//     first:10,
//     second:10,
//     third:10,
//     sum:function(){
//         return this.first+this.second+this.third; //this는 method가 속해있는 객체를 가리키도록 한 약속
//     }//third도 더하고 싶으면 같은 형태의 객체 모두 수정해야함
// }
console.log("kim.sum()", kim.sum()); 
console.log("lee.sum()", lee.sum()); 

var d1 = new Date('2022-11-11'); // 데이터를 가지고 있는 객체가 만들어져서 d1이 됨. 객체의 설계도는 보이지 않는 상태.
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

console.log('Date', Date);

console.log('Person()', Person());
// constructor 생성자
console.log('new Person()', new Person()); //Person이라는 객체가 만들어짐

// 객체를 만들 때마다 다시 정의할 필요가 없고 new를 사용하여 객체를 양산할 수 있음. construct function을 사용하는 객체를 한번에 바꿀 수 있음