let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function() {
    let items=document.createElement("li");
    items.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    items.appendChild(delbtn);

    ul.appendChild(items);
    console.log(inp.value);
    inp.value=""; //resetting the input box to empty
}); 

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let part=event.target.parentElement;
        part.remove();
        console.log("deleted");
    }
});

