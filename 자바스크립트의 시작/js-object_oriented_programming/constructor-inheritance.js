function Person(name, first, second){ //Person이라는 constructor function
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first+this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second);
    this.third = third;
}
PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum()); 
console.log("kim.avg()", kim.avg()); 

//PersonPlus 라는 생성자를 호출할 때, 부모의 기능을 사용하고 싶다면?
// 그냥 Person(name, first, second);를 쓰면 안됨. this는 PersonPlus를 통해 만들어질 객체가 아니니까.
// Person.call(this, name, first, second);으로 하면 됨.
// super(name, first, second); 와 같은 역할을 하는 것