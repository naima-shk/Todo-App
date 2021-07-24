/* pseudocode 
1- call the main function to get the data enter by user.
2- if the value is empty then we use the conditions to check.
3- 
*/
function addMore(){
  document.getElementById('error').innerHTML="";
  let name= document.getElementById('name').value;
  if(name == ''){
    document.getElementById('error').innerHTML='please enter value';
    //console.log(name);
  }else{
    let box= document.getElementById('box');
    let li =document.createElement('li');
     li.textContent=name;
     let a = document.createElement('a');
     a.textContent='x';
     //it does not redirect when we click on button
    a.href ='javaScript:void(0)';
    a.className='remove';
    li.appendChild(a);
    //check the position of the text
     let pos = box.firstElementChild;
     if(pos == null){
       box.appendChild(li);
     } else{
       box.insertBefore(li,pos);
     }
     //let a = document.createElement('a');
     //a.textContent='x';
     //a.href ='javaScript';
     
  }
  document.getElementById('name').value;

}
let btn= document.querySelector('ul');
btn.addEventListener('click', function (e){
  let box= document.getElementById('box');
  let li= e.target.parentNode;
  box.removeChild(li);
})
