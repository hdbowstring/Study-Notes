var kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second; //this는 method가 속해있는 객체를 가리키도록 한 약속
    }
}
console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)", kim.sum()); 