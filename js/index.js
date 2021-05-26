'use strict';

const paragraphText = document.querySelector("p");
//const verbText = document.querySelector("#verb");
//const adjText = document.querySelector("#adj");
let verbInputs = document.querySelectorAll(".verbInput")
let adjInputs = document.querySelectorAll(".adjInput")

const submitButton = document.querySelector("#madlibssubmit");

submitButton.addEventListener("click", function()
{
    let myVerbMap = Array.prototype.map.call(verbInputs, function(x)
    {
        return x.value
    })
    let myAdjMap = Array.prototype.map.call(adjInputs, function(x)
    {
        return x.value
    })

    paragraphText.innerText = "Logan is a " + myAdjMap[Math.floor(Math.random() * myAdjMap.length)] + " dude. He likes to " + myVerbMap[Math.floor(Math.random() * myVerbMap.length)] + ".";
    //paragraphText.innerText = "Logan is a " + inputs[0].value + " dude. He likes to " + inputs[1].value + ".";
})