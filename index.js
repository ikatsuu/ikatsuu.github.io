function convertToHalfBold() {
    text = document.getElementById("text").textContent.split(" ");

    text.forEach(function(element, index) {
        half = this[index].length/2;
        if(text[index]) {
            text[index] = "<b>" + text[index].slice(0, half) + "</b>" + text[index].slice(half);
        }
    }, text);
    document.getElementById("text").textContent ="";
    document.getElementById("text").innerHTML = text.join(' ');
}

function reset() {
    document.getElementById("text").textContent = "";
    
}