var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj; //prototype, __proto__ 헷갈리는 게 당연
var subObj = Object.create(superObj); //상속, 즉 protolink를 정해줌.
subObj.subVal = 'sub';
// debugger; //자바스크립트의 실행을 일시중지시킬 수 있음
console.log('subObj.subVal =>', subObj.subVal)
console.log('subObj.superVal =>', subObj.superVal)
subObj.superVal = 'sub'; // 그 객체를 바꾸는 것이지 객체의 프로토를 바꾸는 게 아님
console.log('superObj.superVal =>', superObj.superVal);
//객체를 손쉽게 상속받을 수 있다.

var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}
// var lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());