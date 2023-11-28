let list = [];

const newToDo = document.querySelector("input");
const sectionTag = document.querySelector("section");

document.querySelector('#form').addEventListener("submit", function(event){
    event.preventDefault();

list.push(newToDo.value);

let template =
`
<ul>
    <input type="checkbox">${list}
</ul>
`;

sectionTag.innerHTML = template;

});