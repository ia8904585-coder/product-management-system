let title=document.getElementById('title')
let praice=document.getElementById('praice')
let taxes=document.getElementById('taxes')
let disciunt=document.getElementById('disciunt')
let category=document.getElementById('category')
let submit=document.getElementById('submit')
let total=document.getElementById('total')
let count=document.getElementById('count')
let mood='cearet'
let end;
function getlotal(){
if(praice.value!=''){
    let result=(+praice.value + +taxes.value )- +disciunt.value;
    total.innerHTML=result;
    total.style.background='#040';
}
else{
    total.innerHTML='';
    total.style.background='rgb(26, 106, 210)';
}
}
let datapro;
if(localStorage.product!=null){
datapro=JSON.parse(localStorage.product)
}
else{
     datapro=[]
}
submit.onclick=function(){
 getlotal()
let nwepro={
title:title.value,
praice:praice.value,
taxes:taxes.value,
disciunt:disciunt.value,
total:total.innerHTML,
category:category.value,
count:count.value,
}
if(title.value !=''&&
    praice.value&&
    category.value){
    if(mood==='cearet'){
if(nwepro.count > 1){
for(let i=1;i<=nwepro.count;i++ ){
datapro.push(nwepro)
}
}
else{
    datapro.push(nwepro)
}

}else{
    datapro[and]=nwepro
}
 deletedata()
}
submit.innerHTML='create'
count.style.display='block'

localStorage.setItem('product',JSON.stringify(datapro))
shawedatd()
}
function deletedata(){
title.value='';
praice.value='';
taxes.value='';
disciunt.value='';
total.innerHTML='';
category.value='';
count.value='';
}
function shawedatd(){
let tabldata='';
for(let i=0;i<datapro.length;i++){
    tabldata=tabldata+`<tr>
                        <td data-label="iD">${[i+1]}</td>
                    <td data-label="title">${  datapro[i].title.toLowerCase()}</td>
                     <td data-label="praice">${datapro[i].praice}</td>
                      <td data-label="taxes">${datapro[i].taxes}</td>
                      <td data-label="disciunt">${datapro[i].disciunt}</td>
                      <td data-label="category">${datapro[i].category.toLowerCase()}</td>
                      <td data-label="total">${datapro[i].total}</td>
                       <td data-label="updet"><button onclick="updet(${i})" id="update"> update</button></td>
                      <td data-label="delete"><button onclick="deleteda(${i})" id="delete">delete</button></td>
                </tr>
             `
    document.getElementById('tbody').innerHTML=tabldata; 

    let delet=document.getElementById('butm')
     if(datapro.length>0){

     delet.innerHTML=`<button onclick="dlet()">delete all(${datapro.length})</button>`

     }
else{
delet.innerHTML=''
document.getElementById('tbody').innerHTML=tabldata
}
}

}
shawedatd()
function deleteda(i){
     datapro.splice(i,1)
     localStorage.product=JSON.stringify(datapro)
shawedatd()
}
function dlet(){
    
    localStorage.clear();
    datapro=[]
    shawedatd();
    location.reload()

}
function updet(i){
 title.value=datapro[i].title;
 praice.value=datapro[i].praice
 taxes.value=datapro[i].taxes;
 disciunt.value=datapro[i].disciunt;
 category.value=datapro[i].category;
 getlotal()
 mood='updet'
 count.style.display='none'
 submit.innerHTML='updtde'
 and=i;
 shawedatd()
 scroll({
    top: 0,
    behavior:'smooth'
 })
}
let searchmod='title'

function search(id){
    let sear=document.getElementById('search')
if(id=='searchtitle'){
    searchmod='title'
   
}
else{
    searchmod='category'
  
}
 sear.placeholder='search by '+searchmod;
console.log(searchmod)
sear.focus()
sear.value='';
shawedatd()
}
let tabldata='';
function searchdata(value){
    let tabldata='';
    for(let i=0;i<datapro.length;i++){ if(searchmod='title'){

    if(datapro[i].title.includes(value.toLowerCase())){
          tabldata=tabldata+`<tr>
                        <td data-ladel="iD">${[i+1]}</td>
                    <td data-label="title">${  datapro[i].title.toLowerCase()}</td>
                     <td data-label="praice">${datapro[i].praice}</td>
                      <td data-label="taxes">${datapro[i].taxes}</td>
                      <td data-label="disciunt">${datapro[i].disciunt}</td>
                      <td data-label="category">${datapro[i].category.toLowerCase()}</td>
                      <td data-label="total">${datapro[i].total}</td>
                       <td data-label="updet"><button onclick="updet(${i})" id="update"> update</button></td>
                      <td data-label="delete"><button onclick="deleteda(${i})" id="delete">delete</button></td>
                </tr>
             `
    
}
    }

    else{



    if(datapro[i].category.includes(value.toLowerCase())){
          tabldata=tabldata+`<tr>
                     <td data-label="iD">${[i+1]}</td>
                    <td data-label="title">${  datapro[i].title.toLowerCase()}</td>
                     <td data-label="praice">${datapro[i].praice}</td>
                      <td data-label="taxes">${datapro[i].taxes}</td>
                      <td data-label="disciunt">${datapro[i].disciunt}</td>
                      <td data-label="category">${datapro[i].category.toLowerCase()}</td>
                      <td data-label="total">${datapro[i].total}</td>
                       <td data-label="updet"><button onclick="updet(${i})" id="update"> update</button></td>
                      <td data-label="delete"><button onclick="deleteda(${i})" id="delete">delete</button></td>
                </tr>
             `
    }


    }

    document.getElementById('tbody').innerHTML=tabldata
}
} 