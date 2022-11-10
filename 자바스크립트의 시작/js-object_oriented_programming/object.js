var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
} //객체는 이름이 있는 정보를 정리정돈 할 때 쓰는 도구
memberObject.designer = 'leezche'; //수정함
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']); //.이나 대괄호로 읽는다
delete memberObject.manager //delete 연산자를 통해 삭제함
console.log('after delete memberObject.manager', memberObject.manager);