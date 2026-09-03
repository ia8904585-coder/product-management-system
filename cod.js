let sum =document.getElementById('sun1')
let moon=document.getElementById('moon1')
let imgsun=document.getElementById('suni')
let imgmoon=document.getElementById('mooni')

sum.onclick=function(){
document.body.classList.add('dark-mode')


}
moon.onclick=function(){
    document.body.classList.remove('dark-mode')
}