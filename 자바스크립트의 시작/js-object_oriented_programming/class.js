class Person{
    constructor(name, first, second){
        this.name=name;
        this.first=first;
        this.second=second;
        console.log('constructor');
    }
    sum(){
        return this.first+this.second; // 이 메소드는 객체의 소속이 아니고 객체의 프로토타입 소속이기 때문에 person을 이용해 생성되는 모든 객체가 공유하는 함수.
    }
//     avg(){
//         return (this.first+this.second)/2;
//     }
// }
//함수를 추가하고 싶을 때, 클래스가 업데이트될 가능성도 있고, 거의 쓰이지는 않는 코드라면 코드를 수정하지 않고 상속을 사용

// Person.prototype.sum = function(){
//     return 'prototype : '+(this.first+this.second);
}
class PersonPlus extends Person{ //부모의 코드를 재활용하면서 자식만의 작업을 할 수도 있다.
    constructor(name, first, second, third){
        super(name, first, second); // super()는 부모클래스의 생성자
        this.third = third; 
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
// var kim = new Person('kim', 10, 20);
// console.log('kim', kim);
// kim.sum = function(){
//     return 'this : '+(this.first+this.second);
// } 
// var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum()); 
console.log("kim.avg()", kim.avg()); 
// console.log("lee.sum()", lee.sum()); 
  