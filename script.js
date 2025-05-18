//your JS code here. If required.
const element=document.getElementById("level");
const findLevel=(element,level)=>{
    if(element===null){
        alert(`The level of the element is: ${level}`)
    }
    element=element.parentElement;
    findLevel(element,level+1)
}
findLevel(element,0)