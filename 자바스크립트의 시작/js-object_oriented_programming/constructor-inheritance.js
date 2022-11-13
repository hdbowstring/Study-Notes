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
// PersonPlus.prototype.__proto__ = Person.prototype; //__proto__는 비표준임
PersonPlus.prototype = Object.create(Person.prototype); //Person.prototype이라는 객체를 __proto__로 하는 새로운 객체를 만듬. PersonPlus.prototype를 교체해버림. 더이상 PersonPlus를 가리키지 않음.
PersonPlus.prototype.constructor = PersonPlus; // kim.constructor가 Person에서 PersonPlus로 나옴

PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum()); 
console.log("kim.avg()", kim.avg()); 
console.log("kim.constructor", kim.constructor);

// PersonPlus 라는 생성자를 호출할 때, 부모의 기능을 사용하고 싶다면?
// 그냥 Person(name, first, second);를 쓰면 안됨. this는 PersonPlus를 통해 만들어질 객체가 아니니까.
// Person.call(this, name, first, second);으로 하면 됨.
// super(name, first, second); 와 같은 역할을 하는 것
// 아직 Person과 PersonPlus는 아무런 관계가 없어서 sum이 작동하지 않음.
// PersonPlus의 프로토타입 객체의 __prototype__이 Person의 프로토타입 객체의 sum을 가리키게 하면됨.
// Person은 __proto__라는 프로퍼티를 통해서 Person의 prototype 객체를 참조하고 Person의 prototype 객체는 constructor라는 프로퍼티를 통해서 Person 객체를 참조
// new를 통해 객체를 생성하여 객체.constructor로 constructor를 호출하면
// __proto__가 가리키는 Person의 프로토타입 객체의 construtor가 가리키는 Person이 리턴됨. 그 객체를 생성한 생성자 
// var d = new Date();
// Date.prototype.constructor === Date // true
// d.constructor // 그 객체가 누구로부터 만들어졌는지를 알 수 있음
// new d.constructor()를 통해 컨스트럭터펑션이 뭔지 몰라도 새로운 객체를 만들 수 있음
