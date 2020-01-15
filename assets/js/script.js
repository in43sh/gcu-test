// Add your JS here and include in index.html

// function changeColor(newColor) {
//     let elem = document.getElementById('cta');
//     elem.style.color = newColor;
// }

let cta = document.getElementById('cta');
let select = document.getElementById('imageColor');
select.onchange = function () {
    cta.className = select.options[this.selectedIndex].className;
}

// var select = document.getElementById('cta');
// select.onchange = function () {
//     select.className = this.options[this.selectedIndex].className;
// }