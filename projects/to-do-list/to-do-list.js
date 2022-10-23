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

to_do_array = new Array();

async function addToDo () {
    var ul = document.getElementById("to-do");
    var li = document.createElement("li");
    li.classList="animate1";
    str = document.getElementById("iitem").value;
    li.appendChild(document.createTextNode(str));
    ul.appendChild(li);
}

typeSentence('A to-do list!', 50)

var close = document.getElementsByClassName("animate1");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}