var i = 0;
async function typeSentence(txt, delay) {
    for (var i = 0; i < txt.length; i++) {
        await waitForMs(delay);
        document.getElementById("demo").innerHTML += txt[i];
    }
    return;
}
  
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

class ToDo {
    constructor (assignment) {
        this.assignment = assignment;
    }
}

to_do_array = new Array();

function addToDo () {
    var ul = document.getElementById("to-do");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("iitem").value));
    ul.appendChild(li);
}

typeSentence('A to-do list with competitive programming in mind!', 1)