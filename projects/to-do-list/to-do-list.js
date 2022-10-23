async function typeSentence(txt, delay, loc) {
    for (var i = 0; i < txt.length; i++) {
        await waitForMs(delay);
        document.getElementById(loc).innerHTML += txt[i];
    }
    return;
}
  
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

async function addToDo () {
    var ul = document.getElementById("to-do");
    var li = document.createElement("li");
    li.classList="animate1";
    li.onclick = function () {
        removeFadeOut(this, 1000);
    };
    str = document.getElementById("iitem").value;
    li.appendChild(document.createTextNode(str));
    ul.appendChild(li);
    document.getElementById("iitem").value = "";

}

typeSentence('A to-do list!', 50, "demo")
typeSentence('Click to delete terms', 50, "header")

var close = document.getElementsByClassName("animate1");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}