// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#Byeee')
// spanBye.remove()
// div.append(spanBye)
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li  = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    //after adding in value, clear up the textbox
    input.value = "";

    li.addEventListener("click", function() {
        var finished = this.classList.toggle("done");
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        if (finished) {
            removeButton.appendChild(document.createTextNode("x"));
            removeButton.classList = "deleteButton";
            li.appendChild(removeButton);
        
            removeButton.addEventListener("click", function() {
                this.parentElement.remove();
            });
        
        }
        else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    })
    input.value = "";

}

function addListAfterClick()
{
    if (inputLength() > 0)
    {
        createListElement();
    }
}

function addListAfterKeyPress(event)
{
    if (inputLength() > 0 && event.which === 13)
    {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick); 
input.addEventListener("keypress", addListAfterKeyPress); 