const { myfunction } = require("./helperCalc.js");
var CalcHelpers = require("./helperCalc.js");

const title = document.querySelector("h1");

title.addEventListener("click", e => { 
    myfunction(title)
});

title.addEventListener('mouseleave', e => {
    title.setAttribute("style", "background-color: rgb(220, 192, 247)")
});
