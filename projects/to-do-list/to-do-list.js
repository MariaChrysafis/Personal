async function parse () {
    x = document.getElementById("add_to_do").value;
    document.getElementById("lister").innerHTML += x + '\r';
}