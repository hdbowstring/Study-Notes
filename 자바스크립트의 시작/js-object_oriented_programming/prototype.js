function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    // this.sum = function(){
    //     return this.first+this.second+this.third;
    // } //sum이라는 함수가 객체가 생성될 때마다 새로 만들어지고 있음. 메모리 낭비.
}
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second+this.third);
}

var kim = new Person('kim', 10, 20, 30);//괄호 안에 입력값을 줄 수 있음
kim.sum = function(){
    return 'this : '+(this.first+this.second);
} //자바스크립트는 kim이라는 객체의 sum이라는 메소드를 호출할 때, 제일 먼저 그 객체 자신이 sum이라는 속성을 갖고 있는 지를 찾음. 자신이 갖고 있지 않으면 생성자인 Person의 프로토타입에 sum이라는 메소드 있는지 찾음.
// kim.sum = function(){
//     return 'modified : '+(this.first+this.second); //Person이라는 생성자를 사용하는 모든 객체의 sum함수를 다 바꾸고 싶다면 번거로워짐. 생성자 안에 메소드를 만드는 것이 갖는 단점.
// }
var lee = new Person('lee', 10, 10, 10);
// lee.sum = function(){
//     return 'modified : '+(this.first+this.second); //Person이라는 생성자를 사용하는 모든 객체의 sum함수를 다 바꾸고 싶다면 번거로워짐. 생성자 안에 메소드를 만드는 것이 갖는 단점.
// }

console.log("kim.sum()", kim.sum()); 
console.log("lee.sum()", lee.sum()); 
  