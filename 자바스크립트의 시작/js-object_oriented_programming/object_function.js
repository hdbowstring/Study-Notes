var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum();
sum.call(kim); //sum이라는 객체를 실행. 자바스크립트에서 모든 함수는 객체기 때문에 call이라는 메소드를 가지고 있다. sum안에서 this는 kim이 된다.
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply도 call과 비슷
console.log("lee.call(kim)", sum.call(lee, ': '));
var kimSum = sum.bind(kim, '-> '); // sum의 함수는 같은데 this를 kim으로 하는 새로운 함수가 만들어짐.
console.log("kimSum()", kimSum());