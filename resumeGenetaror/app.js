function addNewWEField(){
    //console.log('Add')

    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")

    let weObj=document.getElementById("we")
    let weAddButtonObj=document.getElementById("weAddButton")

    weObj.insertBefore(newNode,weAddButtonObj)
}

const aqAddButton=()=>{
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here")

    let aqObj=document.getElementById('aq')
    let aqAddButtonObj=document.getElementById('aqAddButton')

    aqObj.insertBefore(newNode,aqAddButtonObj)
}

//generating CV

const GenerateCV=()=>{
    //console.log("genetare")

    //name
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById('nameT2').innerHTML=nameField;

    //contact

    let contactField=document.getElementById('contactField').value;
    let contactT=document.getElementById('contactT')
    contactT.innerHTML=contactField;

    //address

    let addressField=document.getElementById('addressField').value;
    let  addressT=document.getElementById('addressT')
    addressT.innerHTML=addressField;

    //we can write it as also
    // document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    //links
    //github
    let ghField=document.getElementById('ghField').value;
    let ghT=document.getElementById('ghT')
    ghT.innerHTML=ghField;

    //linkedin
    let linkedField=document.getElementById('linkedField').value;
    let linkedT=document.getElementById('linkedT')
    linkedT.innerHTML=linkedField

    //objective
    let objectiveField=document.getElementById('objectiveField').value;
    let objectiveT=document.getElementById('objectiveT')
    objectiveT.innerHTML=objectiveField

    //expr
   let wes=document.getElementsByClassName('weField')
   let str=''

   for(let e of wes){
       str=str+`<li>${e.value}</li>`;
   }

   document.getElementById('weT').innerHTML=str;

   //quali

   let aqs=document.getElementsByClassName('aqField')
   let str1=''

   for(let a of aqs){
       str1=str1+`<li>${a.value}</li>`;
   }

   document.getElementById('aqT').innerHTML=str1;


   document.getElementById('cv-form').style.display='none'
   document.getElementById('cv-template').style.display='block'

}

   //print cv

   function printCVS(){

    
       window.print();
   }