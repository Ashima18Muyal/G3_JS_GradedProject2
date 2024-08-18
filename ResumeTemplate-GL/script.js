function addNewEqField(){
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control") ;
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let eqOb = document.getElementById("we")
    let eqAddButtonOb = document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode, eqAddButtonOb);
}
function addNewInField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control") ;
    newNode.classList.add("inField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let inOb = document.getElementById("in")
    let inAddButtonOb = document.getElementById("inAddButton");

    inOb.insertBefore(newNode, inAddButtonOb);

}

function addNewAcField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control") ;
    newNode.classList.add("acField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let acOb = document.getElementById("ac")
    let acAddButtonOb = document.getElementById("acAddButton");

    acOb.insertBefore(newNode, acAddButtonOb);
}

//generating cv
function GenerateCV(){
// console.log("generating CV");

let candidateName = document.getElementById("nameT").Value;

let nameT = document.getElementById("nameT").Value;

nameT.innerHTML = candidateName
}

//direct
document.getElementById("contactT").innerHTML = document.getElementById("contactField").Value;

//emailAddress
document.getElementById("emaT").innerHTML = document.getElementById("emailAddress").Value;

//LinkedInField
document.getElementById("LinT").innerHTML = document.getElementById("LinkedInField").Value;
