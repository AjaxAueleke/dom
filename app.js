var mainContent = document.getElementById('main-content');
console.log(mainContent);
console.log(mainContent.childNodes);
var classRender = document.getElementsByClassName('render');
for (let i = 0; i < classRender.length; i++) {
    console.log(classRender[i].innerHTML);
}
var formControl = document.getElementById('form-content');
console.log(formControl.nodeType);   
var lastName = document.getElementById('lastName');
console.log(lastName.nodeType);
console.log(lastName.firstChild);
console.log(lastName.firstChild.nodeType);
console.log(mainContent.firstChild);
console.log(mainContent.lastChild);
console.log(lastName.previousSibling);
console.log(lastName.nextSibling);